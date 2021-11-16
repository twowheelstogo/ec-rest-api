const path = require("path");
const schema = require("../schemas/index.js"); // a GraphQLSchema object
const GraphQL2REST = require("graphql2rest");
const env = require("../config.js");
const chalk = require("chalk");
const { execute, makePromise } = require("apollo-link");
const { createHttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");
const log = console.log;
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../config/swagger.json");
// uncomment in case you have direct SSL (not proxy from cloudflare)
// require('https').globalAgent.options.ca = require('ssl-root-cas').create();
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const formatData = (data, status) => {
    return { message: true, status: 200, ...data };

}
const formatError = (graphQlErrorObj, httpStatusCode = 500) => {
    const err = graphQlErrorObj;
    if (!err || typeof err !== 'object' || !err.errors || !Array.isArray(err.errors)) return err;
    const firstError = err.errors[0];
    if (!firstError || typeof firstError !== 'object') return err;

    return {
        message: firstError.message || 'General error',
        status: httpStatusCode
    }
}

var options = {
    swaggerOptions: {
        validatorUrl: null
    }
};

//dasd
const server = () => {
    const app = express();

    const gqlServerUri = env.GRAPHQL_URL; // our existing remote GraphQL server

    const headers = { Authorization: "" };

    const customFetch = (uri, options) => {
        const parsedBody = JSON.parse(options.body);

        log("options", options);

        const body = JSON.stringify({
            operationName: parsedBody.operationName,
            variables: parsedBody.variables,
            query: parsedBody.query,
        });
        const updatedOptions = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body
        };

        if (options.headers.authorization) {
            Object.assign(updatedOptions, {
                headers: {
                    ...updatedOptions.headers,
                    "Authorization": options.headers.authorization
                }
            });
        }

        return fetch(uri, updatedOptions)
            .then(response => {

                if (response.status >= 500) {  // or handle 400 errors
                    return Promise.reject(response.status);
                }

                return response;
            });
    };

    const link = createHttpLink({
        uri: gqlServerUri,
        credentials: "same-origin",
        fetch: customFetch,
        headers,
        fetchOptions: {
            agent: new https.Agent({ rejectUnauthorized: false })
        }
    });

    /* GraphQL2REST execute function using apollo-link. Invokes GraphQL operation against gqlServerUri via node-fetch */
    const executeGqlLink = (operation) => {
        return makePromise(execute(link, operation));
    };

    const GQL_FILES_FOLDER = path.resolve(__dirname, "./gqlFilesFolder"); // folder previously generated by generateGqlQueryFiles()

    const gql2restOptions = {
        apiPrefix: env.PREFIX, //sets the API base path url
        middlewaresFile: path.resolve(__dirname, "./middleware.js"),
        manifestFile: path.resolve(__dirname, "../manifest.json"), //pathname of manifest file. Default is ./manifest.json
        gqlGeneratorOutputFolder: GQL_FILES_FOLDER, //.gql files folder
        depthLimitArg: 5 // max depth of query
    };

    const restRouter = GraphQL2REST.init(schema, executeGqlLink, gql2restOptions, formatError, formatData);

    const errorHandler = (err, req, res, next) => {
        if (res.headersSent) {
            return next(err);
        }
        const { status } = err;
        res.status(status).json(err);
    };
    app.use(errorHandler);

    // parse application/json
    app.use(bodyParser.json());
    // restRouter now has our REST API attached
    app.use("/", restRouter);

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

    app.listen(
        env.PORT,
        log(chalk.yellow(`TWOWHEELSTOGO EC REST`)),
        log(
            chalk.green(
                `API Server running in ${env.NODE_ENV} mode on port ${env.PORT}`
            )
        )
    );
    process.on("uncaughtException", function (err) {
        log(chalk.yellow(err.stack));
        log(chalk.red("NODE CRASHED: exiting "));
        process.exit(1);
    });
};
module.exports = server;