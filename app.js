import app from './config/express';
import config from './env';

const debug = require('debug')('weatherForecast:app');

const port = process.env.PORT || config.PORT;

const appStartMessage = () => {
  const env = process.env.NODE_ENV;
  debug('%0', { 'API is Initialized App Name': config.TITLE, 'Server Name': config.NAME, Environment: env || config.NODE_ENV, 'App Port': port, 'Process Id': process.pid, 'App Version': config.APIVERSION });
};


app.listen(port, appStartMessage);
