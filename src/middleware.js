/* middlewares.js */

const middlewareFunc = (req, route, verb, operation) => {

  console.log(req.body);
    if(req.body.Transaction){
      req.body.Transaction.Status=JSON.stringify(req.body.Transaction.Status);
      req.body.Transaction.Services=JSON.stringify(req.body.Transaction.Services);
      }
   console.log('headers',req.headers);
    return req;
  };
  
  module.exports = { middlewareFunc };