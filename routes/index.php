<?php
$posts = array('posts' => array());
$backgrounds = ['red', 'green', 'orange', 'gray', 'blue', 'purple'];

for($i = 0; $i < 10; $i++) {
    $background = $backgrounds[rand(0,5)];

    $posts['posts'][] = array(
        'id' => $i,
        'background' => $background,
        'date' => '2016-03-12 12:00:00',
        'dateString' => 'Sat 12th March, 2016',
        'content' => 'Some content',
        'authorName' => 'Server Person',
        'authorUrl' => '/user/123',
        'authorProfilePic' => 'http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg',
        'privacy' => 'friends',
        'stamps' => array(
              'http://colouringbook.org/Holidays/Christmas/benbois_christmas_tree_xmas_coloring_book_colouring_black_white_line_art-555px.png', 
              'http://colouringbook.org/Holidays/Christmas/benbois_christmas_tree_xmas_coloring_book_colouring_black_white_line_art-555px.png'
        ),
        'tags' => array(
              '<a class="tag" href="/user/123">#geneva</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>'
        ),
        'likes' => array(
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>',
              '<a class="tag" href="/user/123">Viki Bell</a>'
        ),
        'comments' => array(
              array(
                  'content' => '',
                  'author' => '<a class="" href="">Viki Bell</a>',
                  'date' => '2016-03-12 12:00:00',
                  'dateString' => 'Sat 12th March, 2016'
              ), 
              array(
                  'content' => '',
                  'author' => '<a class="" href="">Viki Bell</a>',
                  'date' => '2016-03-12 12:00:00',
                  'dateString' => 'Sat 12th March, 2016'
              ), 
              array(
                  'content' => '',
                  'author' => '<a class="" href="">Viki Bell</a>',
                  'date' => '2016-03-12 12:00:00',
                  'dateString' => 'Sat 12th March, 2016'
              ), 
              array(
                  'content' => '',
                  'author' => '<a class="" href="">Viki Bell</a>',
                  'date' => '2016-03-12 12:00:00',
                  'dateString' => 'Sat 12th March, 2016'
              ),
        ),
    );
}

echo json_encode($posts);
?>