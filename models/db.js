/**
 * This script creates an Indexeddb local database 
 * stored in the browser. 
 *
 * It is used to store/serve content when offline. 
 * The stored content will then be added to the 
 * server when connection resumes.
 *
 * As opening the database is an async operation 
 * this file exports a function that will get the 
 * latest version of the database connection. 
 * Therefore any file which uses this script needs 
 * to use the callback function in order to 
 * manipulate the database e.g:

dbExports(function(db) {
    // Use db
});

 */

var db, callback; // Define the empty db and callback var to populate

// Handle any error in connecting the the local database
function dbError() {
    if(typeof callback == 'function'){
        callback(false);
    }
}

// If the client supports indexedDB the use it
if(window.indexedDB) {
    // indexedDB.deleteDatabase('rememberwhen'); // Temp function to use when necessary

    var version = 1; // Increment every time the object store changes
    var request = indexedDB.open('rememberwhen', version); // Open the database

    // Run migrations if necessary
    request.onupgradeneeded = function(e) {
        db = e.target.result; // If the database has loaded then set the db var

        e.target.transaction.onerror = function() {
            dbError(event);
        };

        db.createObjectStore('saveToServer', { keyPath: 'id' }); // Define an object store
        db.createObjectStore('savedMemories', { keyPath: 'id' }); // Define an object store
    };

    // If the database has loaded then set the db var and call any callbacks that have been defined
    request.onsuccess = function(e) {
        db = e.target.result; 

        if(typeof callback == 'function'){
            callback(db);
        }
    };

    request.onerror = function(event) {
        dbError(event);
    };
} else {
    dbError();
}

/**
 * If the database has loaded then return it to the callback 
 * function. Otherwise wait until the database succeeds or 
 * fails in starting up and then run the callback
 */
module.exports = function(cb) {
    if(typeof db != 'undefined'){
        cb(db); // Pass the latest db value to the callback function
    } else {
        callback = cb;
    }
};
