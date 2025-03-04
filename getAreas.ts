import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Connection, Request } from 'tedious';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const connectionString = process.env.AZURE_SQL_CONNECTION_STRING;
    const tableName = 'dbo.Areas';

    if (!connectionString) {
        context.res = {
            status: 500,
            body: "Azure SQL connection string not found."
        };
        return;
    }

    const config = {
       server: connectionString.split(';')[0].split('=')[1],
        authentication: {
            type: 'azure-active-directory-password',
            options: {
                userName: connectionString.split(';')[3].split('=')[1],
                password: process.env.AZURE_SQL_PASSWORD
            }
        },
        options: {
            database: connectionString.split(';')[1].split('=')[1],
            encrypt: true
        }
    };

    const connection = new Connection(config as any);

    connection.on('connect', function(err) {
        if (err) {
            context.log("Error: ", err);
            context.res = {
                status: 500,
                body: "Error connecting to Azure SQL."
            };
        } else {
            executeQuery();
        }
    });

    const executeQuery = () => {
        const query = `SELECT * FROM ${tableName}`;

        const request = new Request(query, function(err, rowCount) {
            if (err) {
                context.log("Error: ", err);
                context.res = {
                    status: 500,
                    body: "Error executing query."
                };
            } else {
                context.log(`${rowCount} rows returned`);
            }
        });

        const result: any[] = [];

        interface Column {
            metadata: {
                colName: string;
            };
            value: any;
        }

        request.on('row', function(columns: Column[]) {
            const row: any = {};
            columns.forEach(function(column) {
              row[column.metadata.colName] = column.value;
            });
            result.push(row);
        });

        request.on('requestCompleted', function() {
            const formattedResult = result.map(item => ({
                id: item.Id,
                name: item.Name
            }));
            context.res = {
                status: 200,
                body: JSON.stringify(formattedResult)
            };
        });

        connection.execSql(request);
    }

    connection.connect();
};

export default httpTrigger;