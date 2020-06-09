module.exports = {
  apps: [{
    name: 'wefrenz_angular_latest',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-152-45-163.compute-1.amazonaws.com',
      key: '~/.ssh/wefrenz_keypair.pem',
      ref: 'origin/master',
      repo: 'https://github.com/alkm/wefrenz_angular_latest.git',
      path: '/home/ubuntu/wefrenz_angular_latest',
      'pre-deploy': 'git reset --hard',
      //'post-deploy': 'npm install && npm audit fix && pm2 startOrRestart ecosystem.config.js'
      'post-deploy': 'pm2 startOrRestart ecosystem.config.js'
    }
  }
}
