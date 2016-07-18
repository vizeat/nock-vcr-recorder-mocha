'use strict';

var assert  = require('assert');
var request = require('request');
var rp      = require('request-promise');
var app     = require('./app');
var vcr     = require('../');

describe('it', function() {
  before(function(done) {
    app.listen(4006, done);
  });

  vcr.it('saves a cassette - callback', function(done) {
    request('http://localhost:4006/test', done);
  });

  vcr.it('saves a cassette - promise', function() {
    return rp('http://localhost:4006/test');
  });

  it('doesnt save with no requests', function() {
    assert.ok(true);
  });

  after(function() {
    assertCassette('it/saves a cassette - callback');
    assertCassette('it/saves a cassette - promise');
    assertNotCassette('it/doesnt save with no requests');
  });
});
