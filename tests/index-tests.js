// Test dependencies
var chai = require('chai');
var sinon = require('sinon');
var proxyquire = require('proxyquire');

var expect = chai.expect;
var assert = chai.assert;

// System Under Test
var fixture = require('../index');

// require so we can spy
var boastConsole = require('boast-console');

describe('boast-errors', function() {
  describe('logToConsole', function(done) {

    it('will display a string when passed a string', sinon.test(function() {
      var boastConsoleStub = this.spy(boastConsole, 'error');
      var message = 'masma'
      fixture.logToConsole(message);

      sinon.assert.callCount(boastConsoleStub, 1);
      sinon.assert.calledWith(boastConsoleStub, message);
    }));

    it('will display the message property of a given object', sinon.test(function() {
      var boastConsoleStub = this.spy(boastConsole, 'error');
      var message = { message: 'message' };
      fixture.logToConsole(message);

      sinon.assert.callCount(boastConsoleStub, 1);
      sinon.assert.calledWith(boastConsoleStub, message.message);
    }));

    it('will display an object string when passed an object', sinon.test(function() {
      var boastConsoleStub = this.spy(boastConsole, 'error');
      var message = { error: 'message' };
      fixture.logToConsole(message);

      sinon.assert.callCount(boastConsoleStub, 1);
      sinon.assert.calledWith(boastConsoleStub, JSON.stringify(message));
    }));
  });
});
