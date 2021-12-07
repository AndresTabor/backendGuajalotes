const jsonserver = require('json-server');
const server = jsonserver.create();
//se relaciona la ruta de la data
const router = jsonserver.router('cars.json');
const middlewares = jsonserver.defaults();

//middleware es un intermediario entre aplicaciones
server.use(middlewares);
server.use(router);
const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('JSON Server is running');
})