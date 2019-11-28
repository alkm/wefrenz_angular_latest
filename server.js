var express = require('express');
var serveStatic = require('serve-static')
var path = require('path');
//var app = express()						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
//var port = process.env.PORT || 3000; 
var database = require('./config/database'); // load the database config
const config = require('config');		
var routes = require('routes');
global.nodeEventer = require('node-eventer').init();
var bodyParser = require('body-parser');
// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();
//var fs = require('fs');
var easyrtc = require("easyrtc"); // EasyRTC external module
//var https = require('https');
const env = process.env.NODE_ENV || 'development';
var app = express();
app.set('port', config.server.port);
/*Settign ssl port****/
app.set('sslport', config.ssl.port);

//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // support encoded bodies

var session = require('express-session');
var ssn ;
app.use(session({secret:'0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK', resave: false, saveUninitialized: true}));

/*var clientSessions = require("client-sessions");
app.use(clientSessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK' // set this to a long random string!
}));
*/

// configuration ===============================================================
//mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io
//mongoose.connect(database.url, { useMongoClient: true }, function(err){
mongoose.connect(database.url, function(err){	
	mongoose.Promise = global.Promise;
	if(err){
		console.log(err);
	} else{
		console.log("Connected to mongodb!");
	}
})
	
	//app.listen(3000)
	//var httpsOptions = {};

	var https = require('https');
	var http = require('http');
	var fs = require('fs');
	var port = 3000;

	/*app.get('/', (req, res) => {
	  res.send('WORKING!')
	})*/

	app.use(serveStatic(__dirname + '/dist/wefrenz/'));
	
	//app.use(serveStatic(__dirname + '/dynamictable/'));
	//Setting the virtual path 'resources' as I don't want to show user the actual path of the images
	app.use('/data/', express.static(__dirname + '/media/images/coverpics/')); 
	app.use('/default/', express.static(__dirname + '/dist/wefrenz/assets/images/')); 
	app.use('/emotion/', express.static(__dirname + '/dist/wefrenz/assets/images/smileys/'));
	app.use('/video/', express.static(__dirname + '/media/videos/myvideos/'));
	app.use('/audio/', express.static(__dirname + '/media/audios/myaudios/'));
	app.use('/music/', express.static(__dirname + '/media/audios/feedaudios/original/'));
	app.use('/photo/', express.static(__dirname + '/media/photos/myphotos/'));

	/*var httpsOptions = {
	  key: fs.readFileSync('/etc/letsencrypt/live/wefrenz.com/privkey.pem'),
	  cert: fs.readFileSync('/etc/letsencrypt/live/wefrenz.com/cert.pem')
	}*/
	/*const server = https.createServer(httpsOptions, app).listen(port, () => {
	  	console.log('server running at ' + port)

	});*/
	//var server = https.createServer(httpsOptions, app).listen(port);
	var server;
	/*if (Object.keys(config.ssl).length > 0 && config.ssl.constructor === Object) {
	    server = https.createServer({
	      key: fs.readFileSync(config.ssl.key),
	      cert: fs.readFileSync(config.ssl.certificate)
	    }, app).listen(app.get('sslport'), (req, res) => {
	      //bunyanLog.info('secure server on port', app.get('sslport'));
	    	console.log('secure server on port', app.get('sslport'));
	    });
	}else{*/
		server = http.createServer(app).listen(app.get('port'));
	//}
	
	var io = require("socket.io").listen(server);
	var socketServer = io.listen(server, {"log level":1});
	// Start EasyRTC server
	var rtc = easyrtc.listen(app, socketServer);

	/*function setUpSSLServer() {
	    fs.readFile("./key.pem", "utf8", function(err, data) {
	        fs.readFile("./cert.pem", "utf8", function(err, _data) {
		        httpsOptions = {
				  key: data,
				  cert: _data
				}
				server = https.createServer(httpsOptions, app);
				io = require("socket.io").listen(server);
				socketServer = io.listen(server, {"log level":1});
				// Start EasyRTC server
				rtc = easyrtc.listen(app, socketServer);
				
				io.sockets.on('connection', function(socket){//Similar to document.ready when the socket initialized
					socket.on('ON_SOCKET_INIT', function(data){
						console.log(data);
					})
				})
	    	});
	    });
	}
	setUpSSLServer();*/


	
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With, authorization, Content-Type,Cache-Control");
   if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  } else {
    return next();
  }
});

// routes ======================================================================
	require('./datamodel/userinfohandler')(app);
	require('./datamodel/mediauploader')(app);
    require('./datamodel/GeneralDataSet')(app);
    require('./datamodel/profilehandler')(app);
	require('./datamodel/friendshandler')(app);
	require('./datamodel/searchhandler')(app);
	require('./datamodel/chathandler')(app);
	require('./datamodel/videohandler')(app);
	require('./datamodel/audiohandler')(app);
	require('./datamodel/photoshandler')(app);
	require('./datamodel/feedhandler')(app);
	require('./datamodel/commenthandler')(app);
	require('./datamodel/markethandler')(app);
	require('./datamodel/checkouthandler')(app);
	require('./datamodel/addresshandler')(app);
	require('./datamodel/notificationhandler')(app);
	require('./datamodel/sockethandler')(io);
	