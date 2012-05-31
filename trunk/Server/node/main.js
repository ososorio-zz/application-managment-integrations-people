var configurationHandlers = require("./handlers/ConfigurationHandlers");
var server = require("./server/server");
var router = require("./server/router");



server.init(router.route, configurationHandlers.handle);