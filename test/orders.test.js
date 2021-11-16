const fetch = require("node-fetch");
const env = require("../config");
const GRAPHQL_URL = env.GRAPHQL_URL;
const { orders } = require("../src/gqlFilesFolder/queries")

const body = JSON.stringify({
    "operationName": "orders",
    "variables": {
        "shopId": "cmVhY3Rpb24vc2hvcDpaUTJTNFRhNGVUZmNyTkFxYQ=="
    },
    "query": orders
});

test('fetch primary shop and get json response', async () => {
    const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: body
    });

    console.log(response);

    expect(response.status).toBe(200);
});