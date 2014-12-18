var spawn = require('child_process').spawn;

var currentAppName;

function listen(handlePostedEvent) {
	var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
	
	port = 8080;
	
	var app = express();
	
	app.use(bodyParser.urlencoded({
	    extended: true
	}));
	
	app.use(bodyParser.json());
	
	app.all('/', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	});
	
	app.all('/app', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	});
	
	app.get("/", function(req, res) {
		console.log("Received a request at main endpoint.");
		res.send('To find out which application is running, GET to /app.\n' +
				'To start an application, POST to /app, e.g. { "name" : "application_name" }\n' +
				'To kill a running application, DELETE to /app.');
	});
	
	app.get("/app", function(req, res) {
		console.log("Received a request at /app endpoint.");
		if (typeof child !== 'undefined') {
			res.send('Application "' + currentAppName + '" is running at the moment.');
		} else {
			res.send("No process running at the moment.");
		}
	});
	
	app.post("/app", function(req, res) {
		
		if (typeof req.body.name === 'undefined') {
			console.log('Client error: no or invalid app name specified.');
			res.send('Client error: no or invalid app name specified.');
			return;
		}
		
		console.log(req.body);
		
		applicationToStart = 'apps/' + req.body.name;
		console.log('Attempting to spawn: ' + applicationToStart);
		
		if (typeof child === 'undefined') {
			child = spawn('node', [ applicationToStart ]);
			child.stdout.on('data', function (data) { console.log(data.toString()); });
			child.stderr.on('data', function (data) { console.log(data.toString()); });
			console.log('Spawned child pid: ' + child.pid);
			
			currentAppName = req.body.name;
			
			res.send('Successfully spawned child: ' + currentAppName);	
		} else {
			res.send("A child process is already running.");
		}			
	});
	
	app.delete("/app", function(req, res) {
		if (typeof child !== 'undefined') {
			console.log('Exiting child ' + currentAppName);
			child.kill();
			delete child;
			res.send('Successfully exited child');
		} else {
			res.send("No process running at the moment.");
		}
	});

	app.listen(port);
	console.log('Listening on port ' + port);
}

module.exports = listen;