"use strict";

var http = require("http");

var server = http.createServer(function (request, response) {
  response.writeHead(200, {
    "Content-Type": "JSON"
  });
  response.end("data.json");
});
server.listen(3000, "127.0.0.1");
server.on();
console.log("port 3000 idi nahui");