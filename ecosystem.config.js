module.exports = {
  apps: [{
    name: 'wefrenz',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-208-175-193.compute-1.amazonaws.com',
      key: '~/.ssh/wefrenz.pem',
      ref: 'origin/master',
      repo: 'https://github.com/alkm/wefrenz_angular_latest.git',
      path: '/home/ubuntu/server/wefrenz_angular_latest',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
