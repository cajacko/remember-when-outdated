var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

console.log('loop loaded');



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

function returnDummyPosts(quantity) {
    var posts = {posts: []};

    for(i = 0; i < quantity; i++) {
        posts.posts.push({
            id: i,
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

function renderPosts(posts) {
    $(document).ready(function() {

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
                    <ul className="actions">
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
                    var postImages = this.props.data.map(function(data) {
                        return (
                            <li><img className="memoryStamp" src={data} alt="Stamp image" /></li>
                        );
                    });
                    return (
                        <ul>
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
                    <article className="memory">
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

        ReactDOM.render(
          <PostList data={posts} />,
          document.getElementById('page')
        );

    });
}
