'use strict';

var assert   = require('assert');
var request  = require('request');
var rp       = require('request-promise');
var app      = require('./app');
var vcr      = require('../');

vcr.describe('describe', function() {
  before(function(done) {
    app.listen(4007, done);
  });

  it('saves a cassette - callback', function(done) {
    request('http://localhost:4007/test', done);
  });

  it('saves a cassette - promise', function() {
    return rp('http://localhost:4007/test');
  });

  it('doesnt save with no requests', function() {
    assert.ok(true);
  });

  after(function() {
    assertCassette('describe/saves a cassette - callback');
    assertCassette('describe/saves a cassette - promise');
    assertNotCassette('describe/doesnt save with no requests');
  });
});
