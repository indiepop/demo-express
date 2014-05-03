function setMyName(){
	var	myName = document.getElementById('nickname').value;
	socket.emit('setName', myName);
	document.getElementById('setAName').style.display="none";
	document.getElementById('speak').style.display="";
	document.getElementById('logout').style.display="";
};


function chatSend(){
	var message = document.getElementById('chatMessage').value;
	document.getElementById('chatMessage').value='';
	socket.emit('msg', message);

};

function chatUpdate(text){
	document.getElementById('chat').innerHTML += (text+'\n');
};


function setServerMsg(text){
	document.getElementById('serverMsg').innerHTML +=('<br>'+text);
};

function logout(){
	
	document.getElementById('setAName').style.display="";
	document.getElementById('speak').style.display="none";
	document.getElementById('logout').style.display="none";
	socket.disconnect();
	location.reload();
}