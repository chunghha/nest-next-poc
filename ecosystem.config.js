module.exports = {
    apps: [{
      name: 'nest-next-poc',
      script: '.next/production-server/main.js',
      node_args: '--require reflect-metadata',
  
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      env_develop: {
        NODE_ENV: 'develop'
      },
      env_local: {
        NODE_ENV: 'local'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      env_qa: {
        NODE_ENV: 'qa'
      }
    }]
  };
  