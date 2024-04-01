'use strict';


/**
 * Archive
 * Move an Object identified by `{ticketId}` to the recycling bin.
 *
 * ticketId String 
 * no response value expected for this operation
 **/
exports.delete/crm/v3/objects/tickets/{ticketId}_archive = function(ticketId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Read
 * Read an Object identified by `{ticketId}`. `{ticketId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
 *
 * ticketId String 
 * properties List A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored. (optional)
 * propertiesWithHistory List A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. (optional)
 * associations List A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored. (optional)
 * archived Boolean Whether to return only results that have been archived. (optional)
 * idProperty String The name of a property whose values are unique for this object type (optional)
 * returns SimplePublicObjectWithAssociations
 **/
exports.get/crm/v3/objects/tickets/{ticketId}_getById = function(ticketId,properties,propertiesWithHistory,associations,archived,idProperty) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "properties" : {
    "createdate" : "2019-10-30T03:30:17.883Z",
    "hs_lastmodifieddate" : "2019-12-07T16:50:06.678Z",
    "hs_pipeline" : "support_pipeline",
    "hs_pipeline_stage" : "open",
    "hs_ticket_priority" : "HIGH",
    "hubspot_owner_id" : "910901",
    "subject" : "troubleshoot report"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


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
exports.get/crm/v3/objects/tickets_getPage = function(limit,after,properties,propertiesWithHistory,associations,archived) {
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
      "createdate" : "2019-10-30T03:30:17.883Z",
      "hs_lastmodifieddate" : "2019-12-07T16:50:06.678Z",
      "hs_pipeline" : "support_pipeline",
      "hs_pipeline_stage" : "open",
      "hs_ticket_priority" : "HIGH",
      "hubspot_owner_id" : "910901",
      "subject" : "troubleshoot report"
    }
  }, {
    "properties" : {
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


/**
 * Update
 * Perform a partial update of an Object identified by `{ticketId}`. `{ticketId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
 *
 * body SimplePublicObjectInput 
 * idProperty String The name of a property whose values are unique for this object type (optional)
 * ticketId String 
 * returns SimplePublicObject
 **/
exports.patch/crm/v3/objects/tickets/{ticketId}_update = function(body,idProperty,ticketId) {
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


/**
 * Create
 * Create a ticket with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard tickets is provided.
 *
 * body SimplePublicObjectInputForCreate 
 * returns SimplePublicObject
 **/
exports.post/crm/v3/objects/tickets_create = function(body) {
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

