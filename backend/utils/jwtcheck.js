const jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({

        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://safiullah-rafeeq.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'i am safiullah',
  issuer: 'https://safiullah-rafeeq.us.auth0.com/',
  algorithms: ['RS256']
}).unless({path:['/','/userAuthenticate','/api/protected','/myTodos','/updateTodo','/deleteTodo','/deleteAllTodos']})
module.exports=jwtCheck