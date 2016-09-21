var boastConsole = require('boast-console');
var Promise = require('bluebird');

var logStringOrObject = function(message) {
  if(typeof message === 'object') {
    boastConsole.error(JSON.stringify(message));
  } else {
    boastConsole.error(message);
  }
}

var logToConsole = function(message) {
  if(message !== null) {
    if(message.message) {
      logStringOrObject(message.message);
    } else {
      logStringOrObject(message);
    }

  } else {
    boastConsole.error('\'message\' is null in boast-errors.logToConsole()');
  }
};

module.exports = {
  logToConsole: logToConsole,
};
