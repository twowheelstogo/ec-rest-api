const { cleanEnv, str,url,num } = require('envalid');

const env = cleanEnv(process.env, {
  GRAPHQL_URL:        url({ default: 'https://api.lulisgt.com/graphql' }),
  NODE_ENV:           str({ choices: ['development', 'production', 'test' ]}),
  PORT:               num({default: 5000}),
  PREFIX:             str({default: "/api/v1"})
})

module.exports=env;