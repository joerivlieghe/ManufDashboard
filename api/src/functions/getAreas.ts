import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Connection, Request } from 'tedious';

export async function getAreas(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('HTTP trigger function processed a request.');

    const connectionString = process.env.AZURE_SQL_CONNECTION_STRING;
    const tableName = 'dbo.Areas';

    if (!connectionString) {
        return {
            status: 500,
            body: "Azure SQL connection string not found."
        };
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

    return new Promise((resolve, reject) => {
        connection.on('connect', function(err) {
            if (err) {
                context.log("Error: ", err);
                resolve({
                    status: 500,
                    body: "Error connecting to Azure SQL."
                });
            } else {
                executeQuery(resolve, reject);
            }
        });

        const executeQuery = (resolve: (value: HttpResponseInit | PromiseLike<HttpResponseInit>) => void, reject: (reason?: any) => void) => {
            const query = `SELECT * FROM ${tableName}`;

            const request = new Request(query, function(err, rowCount) {
                if (err) {
                    context.log("Error: ", err);
                    resolve({
                        status: 500,
                        body: "Error executing query."
                    });
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
                context.log("getAreas - Raw result:", result);
                const formattedResult = result.map(item => ({
                    id: item.Id,
                    name: item.Area
                }));
                context.log("getAreas - Formatted result:", formattedResult);
                resolve({
                    status: 200,
                    body: JSON.stringify(formattedResult)
                });
            });

            connection.execSql(request);
        }

        connection.connect();
    });
};

app.http('getAreas', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getAreas
});