const fetch = require("node-fetch");
const env = require("../config");

const GRAPHQL_URL = env.GRAPHQL_URL;

test('fetch primary shop and get json response', async () => {
    const body = JSON.stringify({ "operationName": "primaryShop", "variables": {}, "query": "query primaryShop {\n  primaryShop {\n    _id\n    name\n  }\n}\n" })
    
    const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: body
    });

    expect(response.status).toBe(200);
});