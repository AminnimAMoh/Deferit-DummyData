const jsonServer= require('json-server');

const responce=require('./responce.json');

const server= jsonServer.create();
const router=jsonServer.router({responce});
const middleware=jsonServer.defaults();
const port =process.env.PORT || 3001;


server.use(middleware);
server.use(router);

server.listen(port)