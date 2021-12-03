const { cleanEnv, str,url,num } = require('envalid');

const env = cleanEnv(process.env, {
  GRAPHQL_URL:        url({ default: process.env.GRAPHQL_URL }),
  NODE_ENV:           str({ choices: ['development', 'production', 'test' ]}),
  PORT:               num({default: process.env.PORT}),
  PREFIX:             str({default: process.env.PREFIX})
})

module.exports=env;