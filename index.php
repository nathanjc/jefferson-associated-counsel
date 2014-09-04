<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

$app->get('/', function () {
  render 'home.html';
});

$app->run();

?>
