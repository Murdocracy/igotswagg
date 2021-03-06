/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var origin = params.origin,
        realm = params.realm,
        locale = params.locale || '';

    battleNetApiRequest({
      origin: origin,
      path: '/wow/auction/data/' + realm,
      qs: {
        locale: locale
      }
    }, callback);

  };

})();
