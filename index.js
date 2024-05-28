'use strict';

var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

//var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
//var app = expressAppConfig.getApp();

const app = express();

app.post('/mltw/v1/workflow/watson', (req, res) => {
  const usersList = req.body;

  // Save the data of user that was sent by the client

  // Send a response to client that will show that the request was successfull.
  const result = {
        	"data": {
        		"clientName": "Pepito Peres",
        		"Listas": [
        			{
        				"listName": "Amigos"
        			}
        		],
        		"inputName": {
        			"minLength": 2,
        			"maxLength": 30
        		},
        		"listaDestinos": {
        			"maxNumDestinos": 10,
        			"minNumDestinos": 1
        		},
        		"nombreValidacion": {
        			"minLength": 2,
        			"maxLength": 20
        		},
        		"bankId": {
        			"BankType": [
        				{
        					"textType": "Cuentas de terceros",
        					"id": "CDT",
        					"productType": {
        						"texto": "Cuenta de Ahorros",
        						"abreviacion": "CA"
        					},
        					"cuentaValidacion": {
        						"minLength": 9,
        						"maxLength": 12
        					},
        					"valorValidacion": {
        						"minLength": 4,
        						"maxLength": 15
        					}
        				},
        				{
        					"textType": "Cuentas de terceros",
        					"id": "CDT",
        					"productType": {
        						"texto": "Cuenta Corriente",
        						"abreviacion": "CC"
        					},
        					"cuentaValidacion": {
        						"minLength": 9,
        						"maxLength": 12
        					},
        					"valorValidacion": {
        						"minLength": 4,
        						"maxLength": 15
        					}
        				},
        				{
        					"textType": "Plata",
        					"id": "DP",
        					"productType": {
        						"texto": "Plata",
        						"abreviacion": "DP"
        					},
        					"cuentaValidacion": {
        						"minLength": 10,
        						"maxLength": 10
        					},
        					"valorValidacion": {
        						"minLength": 4,
        						"maxLength": 15
        					}
        				}
        			]
        		}
        	},
        	"errors": []
        }
  res.send(result);
});

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

