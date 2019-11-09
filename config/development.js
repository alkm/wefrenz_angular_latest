// production configuration
// author: Kirk Austin
module.exports = {
    appName: 'wefrenz',
    developerEmails: [
        'alkmohanty@gmail.com'
    ],
    environment:'development',
    server:{
        port:3000,
        //hostName:'project.gensler.com'
        hostName:'localhost' 
    },
    socketServer:{
        port:3000,
        hostName:'localhost'     
    },

    ssl:{
    }
}
