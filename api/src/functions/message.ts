import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function message(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('HTTP trigger function processed a request.');

    const message = {
        text: "Hello from Azure Functions!"
    };

    return {
        status: 200,
        body: JSON.stringify(message)
    };
};

app.http('message', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: message
});