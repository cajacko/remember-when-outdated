/**
 * This script renders the main loop page
 */

var React = require('react'); // Import react
var MemoryLoop = require('../sublayouts/memory_loop'); // Get the memory loop sub layout
var MemoryDb = require('../../models/memory'); // Get the memory model

// Define the loop page content
var Loop = React.createClass({ 
    // Set the initial state of the content before the memories are loaded
    getInitialState: function() {
        // TODO: Display some blank content like the facebook app does
        return {data: []};  
    },
    // Add memories when they are loaded
    componentDidMount: function() {
        // Get the loop and update the state unless there is an error
        // TODO: Customise the query based on the params given
        MemoryDb.getLoop(this, 'query', function(constructor, data) {
            // Success
            constructor.setState({data: data.posts}); // Update the loop with the latest posts
        }, function(xhr, status, err) {
            // TODO: Error - indicate to the user that no posts could be fetched        
        });
    },
    // Output the content
    render: function() {
        return (
            <MemoryLoop data={this.state.data}></MemoryLoop>
        )
    }
});

module.exports = Loop; // Export this react class
