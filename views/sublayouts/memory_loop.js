var React = require('react');
var Memory = require('./memory');

var PostList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(data) {
      return (
        <Memory data={data} key={data.id}></Memory>
      );
    });
    return (
      <section className="memoryLoop">
        {commentNodes}
      </section>
    );
  }
});

module.exports = PostList;
