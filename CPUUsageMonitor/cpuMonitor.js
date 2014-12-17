var spawn = require('child_process').spawn;
var http = require('http');

var totalCurrentLoad = 0;
var prevNumbers;

function doGrep() {
	grep = spawn('grep', [ 'cpu ', '/proc/stat' ]);
	console.log('Spawned child pid: ' + grep.pid);

	grep.stdout.on('data', function (data) {
		grep.kill();
		numbers = data.toString().split(/[ ]+/);

//		 for (i = 0; i < numbers.length; i++) {
//			console.log(i + ": " + numbers[i]);
//		}

		if (prevNumbers === undefined) {
			prevNumbers = numbers;
			return;
		}
		
		prevIdle = parseFloat(prevNumbers[4]) + parseFloat(prevNumbers[5]);
		idle = parseFloat(numbers[4]) + parseFloat(numbers[5]);

		prevNonIdle = parseFloat(prevNumbers[1]) +
		parseFloat(prevNumbers[2]) +
		parseFloat(prevNumbers[3]) +
		parseFloat(prevNumbers[6]) + 
		parseFloat(prevNumbers[7]) + 
		parseFloat(prevNumbers[8]);

		nonIdle = parseFloat(numbers[1]) +
		parseFloat(numbers[2]) +
		parseFloat(numbers[3]) +
		parseFloat(numbers[6]) + 
		parseFloat(numbers[7]) + 
		parseFloat(numbers[8]);

		prevTotal = prevIdle + prevNonIdle;
		total = idle + nonIdle;
		
		totalCurrentLoad = ((total - prevTotal)-(idle - prevIdle)) / (total - prevTotal);

		// Update values
		prevNumbers = numbers;
	});

	grep.stderr.on('data', function (data) {
		console.log('grep stderr: ' + data);
	});

	grep.on('close', function (code) {
		console.log('grep process exited with code ' + code);
	});
}

function updateTotalLoad() {
	console.log('Updating...');
	doGrep();
	console.log('Load: ' + totalCurrentLoad);
	setTimeout(updateTotalLoad, 1000);
}

http.createServer(function handler(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end(totalCurrentLoad.toString());
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
updateTotalLoad();