'use strict';


/**
 * GDPR DELETE
 * Permanently delete a contact and all associated content to follow GDPR. Use optional property 'idProperty' set to 'email' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
 *
 * body PublicGdprDeleteInput 
 * no response value expected for this operation
 **/
exports.post/crm/v3/objects/tickets/gdprDelete_purge = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

