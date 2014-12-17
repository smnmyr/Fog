sensorURL = 'http://128.32.211.227:9999';
actuatorURL = '';

function processLoad(cpuLoad) {
	if (cpuLoad > 0.95) console.log('Very high load on ASBase!');
	else if (cpuLoad > 0.8) console.log('High load on ASBase!');
	else if (cpuLoad > 0.3) console.log('Medium load on ASBase.');
	else if (cpuLoad > 0.1) console.log('Low load on ASBase.');
	else console.log('No load on ASBase.');
	
	// TODO Talk to actuator
}

function getCPULoad() {
	var rest = require('restler');
	
	rest.get(sensorURL).on('complete', function(data, response) {
		if (response.statusCode === 200) {
			processLoad(parseFloat(response.rawEncoded));
		}
		else console.log('Received response code ' + response.statusCode);
	});
}

function monitorCPULoad() {
	getCPULoad();
	setTimeout(monitorCPULoad, 2000);
}

// Main Control Loop
monitorCPULoad();
