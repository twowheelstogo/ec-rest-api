const { useSofa } = require("sofa-api");
const express = require("express");
const bodyParser = require("body-parser");
const schema = require("../schemas/index.js");
const graphqlTools = require("@graphql-tools/schema");
const env = require("../config.js");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = graphqlTools;
const exSchema = makeExecutableSchema({ typeDefs: schema });
const chalk = require("chalk");
const log = console.log;

const server = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(
        "/api",
        useSofa({ basePath: "/api", schema: exSchema, depthLimit: 2 })
    );

    app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: true,
        })
    );

    app.listen(
        env.PORT,
        log(chalk.yellow(`TWOWHEELSTOGO EC REST`)),
        log(
            chalk.green(
                `API Server running in ${env.NODE_ENV} mode on port ${env.PORT}`
            )
        )
    );
    process.on("unhandledRejection", (err) => {
        log(chalk.red(`Error: ${err.message}`));
        //Close server & exit process
        server.close(() => process.exit(1));
    });
};

module.exports = server;