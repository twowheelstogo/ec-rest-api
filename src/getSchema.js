const fs = require("fs");
const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} = require("graphql");

const fetch = require("node-fetch");

async function getSchema(endpoint, filename) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  });
  const graphqlSchemaObj = buildClientSchema((await response.json()).data);
  const sdlString = printSchema(graphqlSchemaObj);
  //console.log(sdlString);

  fs.writeFileSync(filename, sdlString);

  return graphqlSchemaObj;
}

module.exports = getSchema;