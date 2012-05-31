
 function init(response, data) {
 	console.info('data'+data);
 	response.write("uso de: launch: " + data);
    response.end();
 }

exports.init=init;