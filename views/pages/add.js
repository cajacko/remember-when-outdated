/**
 * This script renders the add new memory page.
 */

var React = require('react'); // Import react
var memoryDb = require('../../models/memory'); // Get the memory model

// Define the add page content
var AddPage = React.createClass({
    // Save the memory when the form is submitted
    handleSubmit: function(event) {
        event.preventDefault(); // Prevent form submitting

        // Get the data to save
        var data = {
            content: this.state.content, // Get the memory content
            tags: this.state.tags // Get the memory tags
        };

        // Save the memory and handle the response
        memoryDb.addMemory(data, function() {
            // TODO: Indicate post saved on the server
            alert('Memory saved to server');
        }, function() {
            // TODO: Indicate post saved locally
            alert('Memory saved locally, connect to the internet to sync your posts');
        }, function() {
            // TODO: Error  
            alert('Could not save memory');
        });
    },
    // Updated the state with new content
    handleChangeContent: function(e) {
        this.setState({content: e.target.value});
    },
    // Update the state with new tag content
    handleChangeTag: function(e) {
        this.setState({tags: e.target.value});
    },
    // Render the add page content
    render: function() {
        return (
            <form onSubmit={this.handleSubmit} method="POST">
                <textarea name="content" placeholder="Content area" onChange={this.handleChangeContent}></textarea>
                <input type="text" name="tags" placeholder="tags" onChange={this.handleChangeTag} />
                <input type="text" name="date" placeholder="date" />
                <input type="hidden" name="roughDate" value="false" />
                <select>
                    <option defaultValue>Friends</option>
                    <option>Public</option>
                    <option>Private</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        )
    }
});

module.exports = AddPage; // Export the react class
