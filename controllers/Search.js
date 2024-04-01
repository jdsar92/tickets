'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.post/crm/v3/objects/tickets/search_doSearch = function post/crm/v3/objects/tickets/search_doSearch (req, res, next, body) {
  Search.post/crm/v3/objects/tickets/search_doSearch(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
