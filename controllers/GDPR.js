'use strict';

var utils = require('../utils/writer.js');
var GDPR = require('../service/GDPRService');

module.exports.post/crm/v3/objects/tickets/gdprDelete_purge = function post/crm/v3/objects/tickets/gdprDelete_purge (req, res, next, body) {
  GDPR.post/crm/v3/objects/tickets/gdprDelete_purge(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
