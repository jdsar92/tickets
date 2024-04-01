'use strict';


/**
 * Archive a batch of tickets by ID
 *
 * body BatchInputSimplePublicObjectId 
 * no response value expected for this operation
 **/
exports.post/crm/v3/objects/tickets/batch/archive_archive = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a batch of tickets
 *
 * body BatchInputSimplePublicObjectInputForCreate 
 * returns BatchResponseSimplePublicObject
 **/
exports.post/crm/v3/objects/tickets/batch/create_create = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "completedAt" : "2000-01-23T04:56:07.000+00:00",
  "requestedAt" : "2000-01-23T04:56:07.000+00:00",
  "startedAt" : "2000-01-23T04:56:07.000+00:00",
  "links" : {
    "key" : "links"
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
  } ],
  "status" : "PENDING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Read a batch of tickets by internal ID, or unique property values
 *
 * body BatchReadInputSimplePublicObjectId 
 * archived Boolean Whether to return only results that have been archived. (optional)
 * returns BatchResponseSimplePublicObject
 **/
exports.post/crm/v3/objects/tickets/batch/read_read = function(body,archived) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "completedAt" : "2000-01-23T04:56:07.000+00:00",
  "requestedAt" : "2000-01-23T04:56:07.000+00:00",
  "startedAt" : "2000-01-23T04:56:07.000+00:00",
  "links" : {
    "key" : "links"
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
  } ],
  "status" : "PENDING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a batch of tickets
 *
 * body BatchInputSimplePublicObjectBatchInput 
 * returns BatchResponseSimplePublicObject
 **/
exports.post/crm/v3/objects/tickets/batch/update_update = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "completedAt" : "2000-01-23T04:56:07.000+00:00",
  "requestedAt" : "2000-01-23T04:56:07.000+00:00",
  "startedAt" : "2000-01-23T04:56:07.000+00:00",
  "links" : {
    "key" : "links"
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
  } ],
  "status" : "PENDING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

