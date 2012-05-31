
 function init(response, data) {
 	console.info('data'+data);
 	response.write("uso de: snack: " + data);
    response.end();
 }
exports.init=init;