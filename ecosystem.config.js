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
      path: '/home/ubuntu/wefrenz_angular_latest/source',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
