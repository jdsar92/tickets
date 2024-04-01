'use strict';


/**
 * List
 * Read a page of tickets. Control what is returned via the `properties` query param.
 *
 * limit Integer The maximum number of results to display per page. (optional)
 * after String The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results. (optional)
 * properties List A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored. (optional)
 * propertiesWithHistory List A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request. (optional)
 * associations List A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored. (optional)
 * archived Boolean Whether to return only results that have been archived. (optional)
 * returns CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
 **/
exports.getTicketsPage = function(limit,after,properties,propertiesWithHistory,associations,archived) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "paging" : {
        "next" : {
          "after" : "NTI1Cg%3D%3D",
          "link" : "?after=NTI1Cg%3D%3D"
        }
      },
      "results" : [ {
          "properties" : {
            "name": "Ticket name 1",
            "createdate" : "2019-10-30T03:30:17.883Z",
            "hs_lastmodifieddate" : "2019-12-07T16:50:06.678Z",
            "hs_pipeline" : "support_pipeline",
            "hs_pipeline_stage" : "open",
            "hs_ticket_priority" : "CLOSED",
            "hubspot_owner_id" : "910901",
            "subject" : "troubleshoot report"
          }
        }, {
          "properties" : {
            "name": "Ticket name 2",
            "createdate" : "2019-10-30T03:30:17.883Z",
            "hs_lastmodifieddate" : "2019-12-07T16:50:06.678Z",
            "hs_pipeline" : "support_pipeline",
            "hs_pipeline_stage" : "open",
            "hs_ticket_priority" : "HIGH",
            "hubspot_owner_id" : "910901",
            "subject" : "troubleshoot report"
          }
        } ]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}