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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaymentMethodData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentMethodData'));
  } else {
    // Browser globals (root is window)
    if (!root.NetlifysApiDefinition) {
      root.NetlifysApiDefinition = {};
    }
    root.NetlifysApiDefinition.PaymentMethod = factory(root.NetlifysApiDefinition.ApiClient, root.NetlifysApiDefinition.PaymentMethodData);
  }
}(this, function(ApiClient, PaymentMethodData) {
  'use strict';




  /**
   * The PaymentMethod model module.
   * @module model/PaymentMethod
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PaymentMethod</code>.
   * @alias module:model/PaymentMethod
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>PaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentMethod} obj Optional instance to populate.
   * @return {module:model/PaymentMethod} The populated <code>PaymentMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('method_name')) {
        obj['method_name'] = ApiClient.convertToType(data['method_name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = PaymentMethodData.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} method_name
   */
  exports.prototype['method_name'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/PaymentMethodData} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));


