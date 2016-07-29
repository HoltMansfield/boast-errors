// Test dependencies
var chai = require('chai');
var sinon = require('sinon');
var proxyquire = require('proxyquire');

var expect = chai.expect;
var assert = chai.assert;


// Proxyquire fakery setup
// var chalkPassThrough = function(message) { return message };  // simulate chalk functionality
// var redBoldSpy = sinon.spy(chalkPassThrough);                 // color red and font bold
// var yellowBoldSpy = sinon.spy(chalkPassThrough);              // color yellow and font bold
// var greenSpy = sinon.spy(chalkPassThrough);                   // color green and defaults
// var bgRedSpy = sinon.spy(chalkPassThrough);                   // background color red and defaults
//
// var chalkProxy = {
//   red: {
//     bold: redBoldSpy
//   },
//   yellow: {
//     bold: yellowBoldSpy
//   },
//   green: greenSpy,
//   bgRed: bgRedSpy
// };

// System Under Test
var fixture = require('../index');
//var consoleStub;
//var consolePassThrough = function(message) { console.log(message); };

// require so we can spy
var boastConsole = require('boast-console');

describe('boast-errors', function() {
  describe('logToConsole', function(done) {

    it('will display a string when passed a string', sinon.test(function() {
      var boastConsoleStub = this.spy(boastConsole, 'log');
      var message = 'masma'
      fixture.logToConsole(message);

      sinon.assert.callCount(boastConsoleStub, 1);
      sinon.assert.calledWith(boastConsoleStub, message);
    }));

    it('will display an object string when passed an object', sinon.test(function() {
      var boastConsoleStub = this.spy(boastConsole, 'log');
      var message = { message: 'message' };
      fixture.logToConsole(message);

      sinon.assert.callCount(boastConsoleStub, 1);
      sinon.assert.calledWith(boastConsoleStub, JSON.stringify(message));
    }));
  });
});
