var boastConsole = require('boast-console');
var Promise = require('bluebird');

var logToConsole = function(message) {
  if(message !== null && typeof message === 'object') {
    boastConsole.log(JSON.stringify(message));
  } else {
    boastConsole.log(message);
  }
};

module.exports = {
  logToConsole: logToConsole,
};
