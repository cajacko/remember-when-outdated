<?php

require_once '../config.php';

global $mysqli;

/**
 * Connect to the database
 */
$mysqli = new mysqli( HOST, USER, PASSWORD, DATABASE );
