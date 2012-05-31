
 function init(response, data) {
 	console.info('data'+data);
 	response.write("uso de fotball: " + data);
    response.end();
 }

exports.init=init;