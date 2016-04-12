var React = require('react');
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
        authorName: 'Charlie Jackson',
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

var MyComponent = React.createClass({
  render: function() {
    return (
        <MemoryLoop data={posts.posts}></MemoryLoop>
    )
  }
});

module.exports = MyComponent;
