'use strict';

var utils = require('../utils/writer.js');
var PublicObject = require('../service/PublicObjectService_.js');

module.exports.post/crm/v3/objects/tickets/merge_merge = function post/crm/v3/objects/tickets/merge_merge (req, res, next, body) {
  PublicObject.post/crm/v3/objects/tickets/merge_merge(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
