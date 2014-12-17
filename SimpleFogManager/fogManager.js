piURL = 'http://128.32.211.227:8080/app';
localURL = 'http://127.0.0.1:8080/app';

var http = require('http');
var rest = require('restler');

function startAppAt(appName, targetURL) {
	rest.post(targetURL, { 
		data : { 
			name : appName 
		}, headers : {
			'Content-Type' : 'application/json'
		}
	}
	).on('complete', function(data, response) {
		console.log('Response: "' + response.rawEncoded + '" (code ' + response.statusCode + ')');
	});
}

function stopAppAt(targetURL) {
	rest.del(targetURL).on('complete', function(data, response) {
		console.log('Response: "' + response.rawEncoded + '" (code ' + response.statusCode + ')');
	});
}

function checkContainer(containerURL) {
	rest.get(containerURL).on('complete', function(data, response) {
		console.log('Checked ' + containerURL);
		console.log('Response: "' + response.rawEncoded + '" (code ' + response.statusCode + ')');
	});
}

function checkContainers() {
	console.log('\n-------- Checking Containers --------');
	checkContainer(piURL);
	checkContainer(localURL);	
}

function stopApps() {
	console.log('\n------- Stopping Running Apps -------');
	stopAppAt(piURL);
	stopAppAt(localURL);	
}

function startCPUMonitorAtPI() {
	console.log('\n--- Deploying App cpuMonitor to PI ---');
	startAppAt('cpuMonitor', piURL);
}

function moveToLocal() {
	console.log('\n--- Moving App cpuMonitor to Local ---');
	startAppAt('cpuMonitor', localURL);
	stopAppAt(piURL);
}

function moveToPi() {
	console.log('\n--- Moving App cpuMonitor to Local ---');
	startAppAt('cpuMonitor', piURL);
	stopAppAt(localURL);
}

function moveAround() {
	setTimeout(moveToLocal, 5000);
	setTimeout(moveToPi, 10000);
	setTimeout(moveAround, 15000);
}

setTimeout(checkContainers, 0);
setTimeout(stopApps, 1000);
setTimeout(checkContainers, 2000);
setTimeout(startCPUMonitorAtPI, 3000);
setTimeout(moveAround, 6000);


//TODO CLI?