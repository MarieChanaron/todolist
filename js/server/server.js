const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

server.listen(3000, () => {
  console.log('JSON Server is running');
})

/*

  Start the server:
  json-server --watch db.json
  in the server folder

  To reset/regenerate data in db.json (if no data appear on first loading):
  simply enter the below code:

  {
    "tasks": {}
  }

  in db.json
  
*/