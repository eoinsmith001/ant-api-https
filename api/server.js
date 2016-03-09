var express = require('express');
var cors = require('cors');
var fs = require('fs');
var socketio = require('socket.io');
var https = require('https');
var http  = require('http');
var app = express();
var port = 3000;
var apiRouter = express.Router();
apiRouter.route('/')
  .get(function(req, res) {
    res.status(200).json({
      message: 'Welcome'
    });
  });

var corsOptions = {
  origin: 'https://192.168.99.100:4430',
  credentials: true
};
app.use(cors(corsOptions));
var key = fs.readFileSync('./certs/nginx.key');
var crt = fs.readFileSync('./certs/nginx.crt');
var options = {
  key: key,
  cert: crt,
  requestCert: false, 
  rejectUnauthorized: false
};
app.use('/api', apiRouter);
var http  =  http.createServer(app);
// var https = https.createServer(options, app);
var daplie = require('localhost.daplie.com-certificates');
console.log(daplie);
var https = https.createServer(daplie, app);
var httpsPort = port + 1000;
http.listen(port, function() {
  console.log('http api:',port);
});
https.listen(httpsPort, function() {
  console.log('https api:', httpsPort);
});
var io = socketio(https);
io.on('connection', function (socket) {
  socket.emit('news', {hello:'world'});
  socket.on('event', function(data) {
    console.log(data);
  });
});
