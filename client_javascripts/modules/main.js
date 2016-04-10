console.log('main loaded');

// main.js
// var $ = require('jquery');
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Indexxeddb = require('indexeddbshim');
// require('es6-promise-polyfill');


// $(document).ready(function() {
//     ReactDOM.render(
//       <div>Hello, Viki Jay!</div>,
//       document.getElementById('example')
//     );
// });

// 'global' variable to store reference to the database
// var db;

// databaseOpen()
//     .then(function() {
//         // alert("The database has been opened");
//     });

// function databaseOpen() {
//     return new Promise(function(resolve, reject) {
//         var version = 1;
//         var request = indexedDB.open('todos', version);

//         // Run migrations if necessary
//         request.onupgradeneeded = function(e) {
//             db = e.target.result;
//             e.target.transaction.onerror = reject;
//             db.createObjectStore('todo', {keyPath: '_id'});
//         };

//         request.onsuccess = function(e) {
//             db = e.target.result;
//             resolve();
//         };
//         request.onerror = reject;
//     });
// }
