const http = require("http");
const mongoUpdate = require("./mongoUpdate");
const port = process.env.PORT || 3000;
const server = http.createServer(mongoUpdate);

server.listen(port);
