var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

getPosts(true);

function getPosts(query) {
    if(query) {

    }

    if(true) {
        var posts = getPostsFromLocal(query);
    } else {
        var posts = getPostsFromServer(query);
    }  

    renderPosts(posts.posts);     
}

function renderPosts(posts) {
    $(document).ready(function() {
        for(i = 0; i < posts.length; i++) {
            ReactDOM.render(
              <div>Hello, Viki Jay!</div>,
              document.getElementById('page')
            );
        }
    });
}

function returnDummyPosts(quantity) {
    var posts = {posts: []};

    for(i = 0; i < quantity; i++) {
        posts.posts.push({
            id: 1,
            date: '2016-03-12 12:00:00',
            dateString: 'Sat 12th March, 2016',
            content: '',
            author: '<a href="">Charlie Jackson</a>',
            authorProfilePic: '/media/123.jpg',
            privacy: 'friends',
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

    return posts;
}

function getPostsFromLocal(query) {
    return returnDummyPosts(10);
}

function getPostsFromServer(query) {
    $.ajax({
        url: '/action/get-posts',
        type: 'POST',
        dataType: 'json',
        data: {param1: 'value1'},
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
        return returnDummyPosts(10);
    }); 
}