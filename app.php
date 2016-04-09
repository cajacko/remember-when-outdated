<?php

require_once '../config.php';
require_once('../models/db.php');
require_once '../vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('../views');
$twig = new Twig_Environment($loader);

require_once '../routes/index.php';

?>