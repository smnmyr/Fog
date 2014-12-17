piURL = 'http://128.32.211.227:8080/app';
selfURL = 'http://127.0.0.1:8080/app';

var rest = require('restler');

function startAppAt(appName, targetURL) {
	rest.post(targetURL, {
		name : appName,
		headers : {
			'Content-Type' : 'application/json'
		}
	}
	).on('complete', function(data, response) {
		console.log('POST. Received response code ' + response.statusCode);
	});
}

function stopAppAt(appName, targetURL) {
	rest.delete(targetURL)).on('complete', function(data, response) {
		console.log('DELETE. Received response code ' + response.statusCode);
	});
}

// Create application at Pi
createAppAt('cpuMonitor', piURL);

// TODO Move application to Local

//TODO Move application back to Pi

// TODO CLI?