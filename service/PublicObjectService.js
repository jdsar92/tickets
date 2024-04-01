'use strict';


/**
 * Merge two tickets with same type
 *
 * body PublicMergeInput 
 * returns SimplePublicObject
 **/
exports.post/crm/v3/objects/tickets/merge_merge = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

