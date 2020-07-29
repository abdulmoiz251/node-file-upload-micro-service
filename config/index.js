const constants = require('./constants.js');


let config = {
  port: process.env.PORT || '1337',
}



//-- Set environment wise config (if any)
switch (process.env.NODE_ENV) {
  case 'production':
    config.port = process.env.PORT || '1338'
    break;

  case 'staging':
    break;
  
  default: //-- development
    break;
}

module.exports = { ...config, constants };