const jsonServer = require('json-server');
const api = require('./api.json');

const server = jsonServer.create();
const router = jsonServer.router(api);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);

server.use(router);

server.listen(port, () => {
  console.log(`Successfully running on port ${port}`);
});
