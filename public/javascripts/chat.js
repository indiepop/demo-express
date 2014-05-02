function setMyName(){
	var	myName = document.getElementById('nickname').value;
	socket.emit('setName', myName);
};


function chatSend(){
	var message = document.getElementById('chatMessage').value;
	socket.emit('msg', message);
};

function chatUpdate(text){
	document.getElementById('chat').innerHTML += (text+'\n');
};


function setServerMsg(text){
	document.getElementById('serverMsg').innerHTML+=('<br>'+text);
};