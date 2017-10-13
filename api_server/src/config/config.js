const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    env,
    port: 4000,
    domain: 'http://localhost:4000',
  },
};

module.exports = config[env];