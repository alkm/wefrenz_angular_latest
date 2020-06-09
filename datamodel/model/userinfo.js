var mongoose = require('mongoose');

module.exports = mongoose.model('userinfo', {
	username: String,
	fullname : {type: [String], text: true},
	profilepic : Object,
	wallpicpath : String,
	wallpicpos : String, 
	appearance : String,
	easyrtcid : String,
	done : Boolean
});