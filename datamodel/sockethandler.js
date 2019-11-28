var userInfo = require('./model/userinfo');
var chatInfo = require('./model/chatinfo');
var friendRelationInfo = require('./model/friendsrelationship');
//var easyRTCHandler = require('./shared/easyrtchandler');
var chatBuddiesConnected = [];
var chatClients = {};
var chatBuddies = [];
// list of socket ids
var clients = [];
var usedSockets = {};

module.exports = (io) => {
	//Handling the chat on socket
	io.sockets.on('connection', function(socket){//Similar to document.ready when the socket initialized
		socket.on('ON_SOCKET_INIT', function(data){
			console.log('socket data'+JSON.stringify(data));
			socket.userid = data.userid;
			handleActiveUsers(socket, data.userid, data.easyrtcid);
		});
		socket.on('ON_SEND_MSG', function(data){
			//Emitting the info back to client 
			//io.sockets.emit("ON_NEW_MSG", data);//To all users connected in socket
			
			var receiverSocket = usedSockets[data.chatid];
			var senderSocket = usedSockets[data.item.username];
			//console.log('receiverSocket'+receiverSocket+'msg'+data.msg);
			console.log('receiver is offline'+receiverSocket);
				console.log(usedSockets+'sender'+senderSocket);
			if(!receiverSocket){
				try{
					senderSocket.emit("ON_RECEIVER_OFFLINE", data)
				}catch(err){
					console.log('Socket Error'+err);
				}
			}else{
				try{
					receiverSocket.emit("ON_NEW_MSG", data);//To specific user to whom message is sent
				}catch(err){
					console.log('socket error');
				}
			}
		});


		socket.on('disconnect', function(data){
			if(socket.userid !== undefined){
				handleClientDisconnected(socket, socket.userid);
				console.log(socket.userid+' is disconnected');
			}
			
			
			//Set user appearance status in db
			/*userInfo.update({_id : socket.userid}, { $set: {appearance: "offline"}}, function(error, docs){
				if(error){
					console.log("Error"+error);
				}else{
					io.sockets.emit("UPDATE_CHAT_LIST", "");
				}
			});*/
		});
	});

	function handleActiveUsers(socket, userid, easyrtcid){
		console.log('easyrtcid'+easyrtcid);
		//Saving all the users connected in socket
		for(var i = 0; i < chatBuddiesConnected.length ; i++){
			if(userid === chatBuddiesConnected[i]){
				console.log("Looks like you are already connected");
				return;
			}
		}
		
		chatBuddiesConnected.push(userid);
		chatClients[socket.userid] = userid;
		usedSockets[userid] = socket;

		var obj = {};
		obj.email = userid;
		obj.easyrtcid = easyrtcid;
		updateEasyRTCIdToDB(obj);

		var _obj = {};
		_obj.email = userid;
		_obj.appearance = "online";
		console.log('_obj'+_obj);
		updateSocketStatusToDB(_obj);
		//chatHandler.updateEasyRTCIdToDB(obj);
	}

	function handleClientDisconnected(socket, userid){
		console.log("disconnected");
		//chatBuddiesConnected.splice(0,chatClients[socket.userid]); 
		var indx = chatBuddiesConnected.indexOf(chatClients[socket.userid]);
		if(indx !== -1){
			chatBuddiesConnected.splice(indx, 1);
			delete usedSockets[userid];
			delete chatClients[socket.userid];
			var obj = {};
			obj.email = userid;
			obj.easyrtcid = '';
			updateEasyRTCIdToDB(obj);

			var _obj = {};
			_obj.email = userid;
			_obj.appearance = "offline";
			var onlineFriendsInfo = updateSocketStatusToDB(_obj);
		}
	}

	function updateEasyRTCIdToDB(data) {
		userInfo.update({username: data.email}, {$set: {easyrtcid: data.easyrtcid}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				console.log("update easyrtc id  to db"+data.email+'/'+data.easyrtcid);
			}
		});
	}

	function updateSocketStatusToDB(data) {
		var username = data.email;
		var onlineFriendsInfo = {};
		userInfo.update({username: username}, {$set: {appearance: data.appearance}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{

				friendRelationInfo.find({requeststatus : "confirmed", $or: [ { userid: username }, { friendid: username }]}, function(err, docs){
					if(error){
						console.log("Error"+error);
					}else{
						var reqIdArr = [];
						for(var i in docs){
							//console.log('ssn.email'+ssn.username+'****'+infos[i].userid+'*****'+infos[i].friendid);
							if(docs[i].userid !== username){
								reqIdArr.push(docs[i].userid);	
							}
							if(docs[i].friendid !== username){
								reqIdArr.push(docs[i].friendid);	
							}
						}
						userInfo.find({username: {$in : reqIdArr}, appearance: "online"}, function(er, dcs){
						//userInfo.find({username: {$in : reqIdArr}}, function(error, docs){
							if(er){
								console.log("Error"+er);
							}else{
								console.log('dcs'+dcs);
							}
						});
					}
				});
			}
		});
	}
}


