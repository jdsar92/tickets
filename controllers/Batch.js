'use strict';

var utils = require('../utils/writer.js');
var Batch = require('../service/BatchService');

module.exports.post/crm/v3/objects/tickets/batch/archive_archive = function post/crm/v3/objects/tickets/batch/archive_archive (req, res, next, body) {
  Batch.post/crm/v3/objects/tickets/batch/archive_archive(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post/crm/v3/objects/tickets/batch/create_create = function post/crm/v3/objects/tickets/batch/create_create (req, res, next, body) {
  Batch.post/crm/v3/objects/tickets/batch/create_create(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post/crm/v3/objects/tickets/batch/read_read = function post/crm/v3/objects/tickets/batch/read_read (req, res, next, body, archived) {
  Batch.post/crm/v3/objects/tickets/batch/read_read(body, archived)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post/crm/v3/objects/tickets/batch/update_update = function post/crm/v3/objects/tickets/batch/update_update (req, res, next, body) {
  Batch.post/crm/v3/objects/tickets/batch/update_update(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
