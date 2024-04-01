'use strict';


/**
 *
 * body PublicObjectSearchRequest 
 * returns CollectionResponseWithTotalSimplePublicObjectForwardPaging
 **/
exports.post/crm/v3/objects/tickets/search_doSearch = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 0,
  "paging" : {
    "next" : {
      "after" : "NTI1Cg%3D%3D",
      "link" : "?after=NTI1Cg%3D%3D"
    }
  },
  "results" : [ {
    "id" : "512",
    "properties" : {
      "createdate" : "2019-10-30T03:30:17.883Z",
      "hs_lastmodifieddate" : "2019-12-07T16:50:06.678Z",
      "hs_pipeline" : "support_pipeline",
      "hs_pipeline_stage" : "open",
      "hs_ticket_priority" : "HIGH",
      "hubspot_owner_id" : "910901",
      "subject" : "troubleshoot report"
    },
    "createdAt" : "2019-10-30T03:30:17.883Z",
    "updatedAt" : "2019-12-07T16:50:06.678Z",
    "archived" : false
  }, {
    "id" : "512",
    "properties" : {
      "createdate" : "2019-10-30T03:30:17.883Z",
      "hs_lastmodifieddate" : "2019-12-07T16:50:06.678Z",
      "hs_pipeline" : "support_pipeline",
      "hs_pipeline_stage" : "open",
      "hs_ticket_priority" : "HIGH",
      "hubspot_owner_id" : "910901",
      "subject" : "troubleshoot report"
    },
    "createdAt" : "2019-10-30T03:30:17.883Z",
    "updatedAt" : "2019-12-07T16:50:06.678Z",
    "archived" : false
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

