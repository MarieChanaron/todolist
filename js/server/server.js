const fs = require('fs');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

server.post('/upload-json', (req, res) => {
    console.log(req.body);
    res.jsonp(req.query);
});

server.listen(3000, () => {
  console.log('JSON Server is running');
})