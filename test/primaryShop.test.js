const fetch = require("node-fetch");
const env = require("../config");

const GRAPHQL_URL = env.GRAPHQL_URL;

test('fetch primary shop and get json response', async () => {
    // const body = JSON.stringify({ "operationName": "primaryShop", "variables": {}, "query": "query primaryShop { primaryShop {_id   name  allowGuestCheckout }}" });
    // const body = JSON.parse(('"{\\"operationName\\":\\"primaryShop\\",\\"variables\\":{},\\"query\\":\\"query primaryShop {  primaryShop {    _id    name  }}\\"}"').replace("\\", ""))
    const body = JSON.stringify({ "operationName": "primaryShop", "variables": {}, "query": "query primaryShop {\n  primaryShop {\n    _id\n    name\n  }\n}\n" })
    // console.log(body);
    const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: body
        // body: JSON.stringify({ "operationName": "primaryShop", "variables": {}, "query": "query primaryShop { primaryShop {_id   name  allowGuestCheckout }}" })
    });

    // console.log("response", response);
    console.log("JSON response", await response.json());

    expect(response.status).toBe(200);
});