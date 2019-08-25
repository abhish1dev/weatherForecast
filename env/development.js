const devConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8089,
  DOMAIN_IP: 'http://localhost:8089/v1.0/',
  APIVERSION: 'v1.0',
  TITLE: 'Weather Forecast',
  NAME: 'Weather Forecast Backend'
};

module.exports = devConfig;
