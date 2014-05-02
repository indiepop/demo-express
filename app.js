
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , ejs = require('ejs');
var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);//websocket



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.engine('.html', ejs.__express);
app.set('view engine', 'html');//app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);



app.get('/users', user.list);

var users= [];

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


io.sockets.on('connection', function (socket) {

  console.log("Connection,the ID "+socket.id+" is accepted");
  
/* socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log("Second from server Josh:"+ data);
  });
*/ 
  socket.on('message',function (message){
    console.log("Received message: "+message+" __from"+socket.id);
  });
  
  socket.on('disconnect',function(){
    console.log("Connection "+ socket.id + "terminated.");
  });

//预定义事件

  socket.on('setName', function (nickname){
      socket.nickname = nickname;
      users.push(nickname);
      io.sockets.emit('ready',nickname);
  
  });

  socket.on('msg', function (message){
    console.log('I received a private message  saying ', message);
      io.sockets.emit('chatMessage',[socket.nickname,message]);
  });







});