<?php

/**
 * Get the url string and server the correct page based of this.
 */
if(isset($_GET['url'])) { // If there is a page request
    $request = $_GET['url']; // Get the request
    $request = explode('/', $request); // Get all parts to the request

    /**
     * Tansform all the request paramaters to lowercase so 
     * we can compare them and identify the right page 
     * template to serve.
     */
    $request_array = array();

    foreach($request as $value) {
        $request_array[] = strtolower($value);
    }

    /**
     * Serve the correct template based on the request
     */
    switch($request_array[0]) {
        case 'page': // Show the login page
            require_once('page.php');
            break;

        default: // 404 eorr page
            echo $twig->render('pages/404.twig');
    }
} else {
    require_once('home.php');
}