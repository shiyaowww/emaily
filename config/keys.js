// keys.js - figure out what set of credentials to return

//emaily-prod
//mongodb+srv://myuser:9b3jxMgQNhqn76Tt@cluster0.gfsoy.mongodb.net/test?retryWrites=true&w=majority
if (process.env.NODE_ENV === 'production'){
    //we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    //we are in development - return the dev keys
    module.exports = require('./dev');
}