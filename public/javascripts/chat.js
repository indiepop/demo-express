$(document).ready(function (){
	var socket = io.connect();	

	var from = $.cookie('user');//从 cookie 中读取用户名，存于变量 from
	var to = 'all';//设置默认接收对象为"所有人"
//发送用户上线信号
socket.emit('online', {user: from});
socket.on('online', function (data) {
  //显示系统消息
  if (data.user != from) {
    var sys = '<div style="color:#f00">系统(' + now() + '):' + '用户 ' + data.user + ' 上线了！</div>';
  } else {
    var sys = '<div style="color:#f00">系统(' + now() + '):你进入了聊天室！</div>';
  }
  $("#contents").append(sys + "<br/>");
  //刷新用户在线列表
  flushUsers(data.users);
  //显示正在对谁说话
  showSayTo();
});
});