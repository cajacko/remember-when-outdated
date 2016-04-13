var React = require('react');

var MemoryActionsFavourites = React.createClass({
    render: function() {
        return(
            <a>Favourite</a>
        );
    }
});

var MemoryActionsComments = React.createClass({
    render: function() {
        return(
            <a>Comments</a>
        );
    }
});

var MemoryActionsTags = React.createClass({
    render: function() {
        return(
            <a>Tags</a>
        );
    }
});

var MemoryActionsShares = React.createClass({
    render: function() {
        return(
            <a>Shares</a>
        );
    }
});

var MemoryActions = React.createClass({
    render: function() {
        return (
            <ul className="memoryActions">
                <li><MemoryActionsFavourites></MemoryActionsFavourites></li>
                <li><MemoryActionsComments></MemoryActionsComments></li>
                <li><MemoryActionsTags></MemoryActionsTags></li>
                <li><MemoryActionsShares></MemoryActionsShares></li>
            </ul>
        );
    }
});

var MemoryStamps = React.createClass({     
    render: function() {
        if(this.props.data) {
            var postImages = this.props.data.map(function(data, i) {
                return (
                    <li key={i} className="memoryStampWrap"><img className="memoryStamp" src={data} alt="Stamp image" /></li>
                );
            });
            return (
                <ul className="memoryStamps">
                    {postImages}
                </ul>
            );
        } else {
            return false;
        }
    }
})


var Memory = React.createClass({
    render: function() {
        return (
            <article className={'memory ' + this.props.data.background}>
                <a className="memoryProfilePic" href={this.props.data.authorUrl}>
                    <img className="memoryUserPic" src={this.props.data.authorProfilePic} alt={this.props.data.authorName + 'Profile Pic'} />
                </a>
                <time className="memoryDate"><a>{this.props.data.dateString}</a></time>
                <a className="memoryAuthor" href={this.props.data.authorUrl}>{this.props.data.authorName}</a>
                <p className="memoryContent">{this.props.data.content}</p>

                <MemoryStamps data={this.props.data.stamps}></MemoryStamps>

                <MemoryActions></MemoryActions>

            </article>
        );
    }
});

module.exports = Memory;
