/**
 * This file handles the saving and loading of 
 * everything relating to memories
 */

var $ = require('jquery'); // Load jquery
var dbExports = require('./db'); // Get the local db function

// Save exisiting posts to local storage to load offline if necessary
function saveExistingMemoryToLocal(db, transaction, store, id, data) {
    var request = store.put({data: data, id: id}); // Save the memory

    transaction.oncomplete = function() {
        // Saved all posts
        // TODO
    };

    request.onerror = function() {
        // Error saving all posts
        // TODO
    };
}

// Get the posts for a given query and return them or return an error
exports.getLoop = function(constructor, query, success, error) {
    $.ajax({
        url: '/action.php', // URL to get posts at
        dataType: 'json', // Type of data to retrive
        cache: false, // Never cache these results as they may change all the time
        success: function(data) {
            dbExports(function(db) {
                if(db) { 
                    var transaction = db.transaction('savedMemories', 'readwrite');
                    var store = transaction.objectStore('savedMemories');

                    for(var i = 0; i < data.posts.length; i++) {
                        saveExistingMemoryToLocal(db, transaction, store, data.posts[i].id, data.posts[i]);
                    }
                } else {
                    // TODO: Coudln't save to local
                }
            });

            success(constructor, data); // Success callback
        }.bind(constructor),
        error: function(xhr, status, err) {
            // error(xhr, status, err); // Error callback

            dbExports(function(db) {
                if(db) {     
                    var transaction = db.transaction('savedMemories', 'readonly');
                    var store = transaction.objectStore('savedMemories');

                    // Get everything in the store
                    var keyRange = IDBKeyRange.lowerBound(0);
                    var cursorRequest = store.openCursor(keyRange);

                    // This fires once per row in the store, so for simplicity collect the data
                    // in an array (data) and send it pass it in the resolve call in one go
                    var data = {posts: []};

                    cursorRequest.onsuccess = function(e) {
                        var result = e.target.result;

                        // If there's data, add it to array
                        if (result) {
                            data.posts.push(result.value.data);
                            result.continue();

                            // Reach the end of the data
                        } else {
                            // Finished looping through the results
                            // If there are results then display them
                            if(data.posts.length) {
                                success(constructor, data); // Success callback
                            } else {
                                error(); // No results
                            }
                        }
                    };
                } else {
                    error(); // Couldn't get the local database
                }
            });
        }.bind(constructor)
    });
};

// Add the memory to the local database
function saveNewMemoryToLocal(data, success, error) {
    // Get the latest connection to the database
    dbExports(function(db) {
        if(db) {
            alert('Got export');
            
            var transaction = db.transaction('saveToServer', 'readwrite');

            var store = transaction.objectStore('saveToServer');
            var request = store.put({ data: data, id: String(Date.now()) });
            transaction.oncomplete = success;
            request.onerror = error;
        } else {
            error(); // Couldn't get database
        }
    });
}

exports.addMemory = function(data, addedToServer, addedToLocal, error) {
    // TODO: Validate data

     $.ajax({
        url: '/error.php', // URL to get posts at
        dataType: 'json', // Type of data to retrive
        cache: false, // Never cache these results as they may change all the time
        success: function(data) {
            addedToServer(); // Success callback
        },
        error: function(xhr, status, err) {
            // Could not save the post to the server, so try and save locally
            saveNewMemoryToLocal(data, function() {
                // Success adding to local database
                addedToLocal(); // Success callback
            }, function() {
                // Error adding to local database
                error(); // Error callback
            });
        }
    });
};
