module.exports = {
  apps: [{
    name: 'wefrenz_angular_latest',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-202-7-252.compute-1.amazonaws.com',
      key: '~/.ssh/wefrenz_keypair.pem',
      ref: 'origin/master',
      repo: 'https://github.com/alkm/wefrenz_angular_latest.git',
      path: '/home/ubuntu/wefrenz_angular_latest',
      'pre-deploy': 'git reset --hard',
      'post-deploy': 'npm install && npm audit fix && export NODE_ENV=production && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
