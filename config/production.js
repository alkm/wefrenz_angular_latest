// production configuration
// author: Kirk Austin
module.exports = {
    appName: 'wefrenz',
    developerEmails: [
        'alkmohanty@gmail.com'
    ],
    environment:'production',
    server:{
        port:3000,
        hostName:'wefrenz.com' 
    },
    socketServer:{
    	port:3000,
        hostName:'https://www.wefrenz.com' 	
    },
    ssl:{
        certificate:'/var/wefrenz/cert.pem',
        key:'/var/wefrenz/privkey.pem',
        port: 8000; 
    }
}
