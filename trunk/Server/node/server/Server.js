var http = require("http");
var url = require("url");

function iniciar(route, handle) {
  function onRequest(request, response) {
        var dataRequest = "";
        var pathname = url.parse(request.url).pathname;
        request.setEncoding("utf8");
        
        request.addListener("data", function(datarecection) { dataRequest.concat(datarecection);});

        request.addListener("end", function() {
         route(handle, pathname, response, dataRequest);
        });
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado");
}

exports.init = iniciar;