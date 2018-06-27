/**
 * Netlify's API definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetlifysApiDefinition);
  }
}(this, function(expect, NetlifysApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetlifysApiDefinition.Ticket();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ticket', function() {
    it('should create an instance of Ticket', function() {
      // uncomment below and update the code to test Ticket
      //var instane = new NetlifysApiDefinition.Ticket();
      //expect(instance).to.be.a(NetlifysApiDefinition.Ticket);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new NetlifysApiDefinition.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new NetlifysApiDefinition.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property authorized (base name: "authorized")', function() {
      // uncomment below and update the code to test the property authorized
      //var instane = new NetlifysApiDefinition.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new NetlifysApiDefinition.Ticket();
      //expect(instance).to.be();
    });

  });

}));
