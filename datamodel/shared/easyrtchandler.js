var userInfo = require('../model/userinfo');
var chatInfo = require('../model/chatinfo');
var friendRelationInfo = require('../model/friendsrelationship');

module.exports ={
	updateEasyRTCIdToDB: function(data) {
		userInfo.update({username: data.email}, {$set: {easyrtcid: data.easyrtcid}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				console.log("update easyrtc id  to db"+data.email+'/'+data.easyrtcid);
			}
		});
	},
	updateSocketStatusToDB: function(data) {
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
								onlineFriendsInfo =  dcs;
								return onlineFriendsInfo;
							}
						});
					}
				});
			}
		});
	},
};
