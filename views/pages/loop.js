var React = require('react');
var $ = require('jquery');
var MemoryLoop = require('../sublayouts/memory_loop.js');

var posts = {posts: []};
var backgrounds = ['red', 'green', 'orange', 'gray', 'blue', 'purple'];

for(i = 0; i < 10; i++) {
    var background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    posts.posts.push({
        id: i,
        background: background,
        date: '2016-03-12 12:00:00',
        dateString: 'Sat 12th March, 2016',
        content: 'Some content',
        authorName: 'Local Person',
        authorUrl: '/user/123',
        authorProfilePic: 'http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg',
        privacy: 'friends',
        stamps: [
            'http://colouringbook.org/Holidays/Christmas/benbois_christmas_tree_xmas_coloring_book_colouring_black_white_line_art-555px.png', 
            'http://colouringbook.org/Holidays/Christmas/benbois_christmas_tree_xmas_coloring_book_colouring_black_white_line_art-555px.png'
        ],
        tags: [
            '<a class="tag" href="/user/123">#geneva</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>'
        ],
        likes: [
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>',
            '<a class="tag" href="/user/123">Viki Bell</a>'
        ],
        comments: [
            {
                content: '',
                author: '<a class="" href="">Viki Bell</a>',
                date: '2016-03-12 12:00:00',
                dateString: 'Sat 12th March, 2016'
            }, {
                content: '',
                author: '<a class="" href="">Viki Bell</a>',
                date: '2016-03-12 12:00:00',
                dateString: 'Sat 12th March, 2016'
            }, {
                content: '',
                author: '<a class="" href="">Viki Bell</a>',
                date: '2016-03-12 12:00:00',
                dateString: 'Sat 12th March, 2016'
            }, {
                content: '',
                author: '<a class="" href="">Viki Bell</a>',
                date: '2016-03-12 12:00:00',
                dateString: 'Sat 12th March, 2016'
            },
        ]
    });
}

var Loop = React.createClass({ 
    getInitialState: function() {
        return {data: posts.posts};  
    },
    componentDidMount: function() {
        $.ajax({
            url: '/action.php',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data.posts});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <MemoryLoop data={this.state.data}></MemoryLoop>
        )
    }
});

module.exports = Loop;
