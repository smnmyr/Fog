var spawn = require('child_process').spawn;

function listen(handlePostedEvent) {
	var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
	
	port = 9090;
	
	var app = express();
	app.use(bodyParser.urlencoded({
	    extended: true
	}));
	app.use(bodyParser.json());
	
	app.get("/", function(req, res) {
		console.log("Received a request.");
		if (typeof child !== 'undefined') {
			res.send("Process running, PID: " + child.pid);
		} else {
			res.send("No process running at the moment.");
		}
	});
	
	app.post("/", function(req, res) {
		console.log("Attempting to spawn: " + req.body.path);
		// res.writeHead(200, {'Content-Type': 'text/plain'});
		
		if (typeof child === 'undefined') {
			child = spawn('node', [ req.body.path ]);
			child.stdout.on('data', function (data) { console.log(data.toString()); });
			child.stderr.on('data', function (data) { console.log(data.toString()); });
			console.log('Spawned child pid: ' + child.pid);
			res.send('Successfully spawned child');	
		} else {
			res.send("Child process already running.");
		}			
	});
	
	app.delete("/", function(req, res) {
		// res.writeHead(200, {'Content-Type': 'text/plain'});
		
		if (typeof child !== 'undefined') {
			console.log('Exiting child pid: ' + child.pid);
			child.kill();
			delete child;
			res.send('Successfully exited child');
		} else {
			res.send("No process running at the moment.");
		}
	});

	app.listen(port);
	console.log('Listening...');
}

module.exports = listen;