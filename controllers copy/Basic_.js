'use strict';

var utils = require('../utils/writer.js');
var Basic = require('../service/BasicService_.js');

module.exports.delete/crm/v3/objects/tickets/{ticketId}_archive = function delete/crm/v3/objects/tickets/{ticketId}_archive (req, res, next, ticketId) {
  Basic.delete/crm/v3/objects/tickets/{ticketId}_archive(ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get/crm/v3/objects/tickets/{ticketId}_getById = function get/crm/v3/objects/tickets/{ticketId}_getById (req, res, next, ticketId, properties, propertiesWithHistory, associations, archived, idProperty) {
  Basic.get/crm/v3/objects/tickets/{ticketId}_getById(ticketId, properties, propertiesWithHistory, associations, archived, idProperty)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get/crm/v3/objects/tickets_getPage = function get/crm/v3/objects/tickets_getPage (req, res, next, limit, after, properties, propertiesWithHistory, associations, archived) {
  Basic.get/crm/v3/objects/tickets_getPage(limit, after, properties, propertiesWithHistory, associations, archived)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patch/crm/v3/objects/tickets/{ticketId}_update = function patch/crm/v3/objects/tickets/{ticketId}_update (req, res, next, body, idProperty, ticketId) {
  Basic.patch/crm/v3/objects/tickets/{ticketId}_update(body, idProperty, ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post/crm/v3/objects/tickets_create = function post/crm/v3/objects/tickets_create (req, res, next, body) {
  Basic.post/crm/v3/objects/tickets_create(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
