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
        certificate:'/etc/letsencrypt/live/wefrenz.com/cert.pem',
        key:'privkey.pem',
        port: 8443 
    }
}
