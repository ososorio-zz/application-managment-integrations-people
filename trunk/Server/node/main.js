var server = require("./server/server");
var router = require("./server/router");
var configurationHandlers = require("./handlers/ConfigurationHandlers");


server.init(router.route, configurationHandlers.handle);