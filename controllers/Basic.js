'use strict';
// Importa las dependencias necesarias
const express = require('express');

// Crea un nuevo enrutador de Express
const router = express.Router();

var utils = require('../utils/writer.js');
var Basic = require('../service/BasicService.js');

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports.getTicketsGetPage =  function getTicketsGetPage(req, res, next, limit, after, properties, propertiesWithHistory, associations, archived) {
  Basic.getTicketsPage(limit, after, properties, propertiesWithHistory, associations, archived)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};