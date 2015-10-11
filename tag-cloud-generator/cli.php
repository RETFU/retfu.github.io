<?php
include "TagCloud.php";

$cloud = new TagCloud();
$cloud->setOption('transliterate', false);

$cloud->addTag(array('tag' => 'PHP', 'level' => 5));
$cloud->addTag(array('tag' => 'Mysql', 'level' => 4));
$cloud->addTag(array('tag' => 'Reflux', 'level' => 3));
$cloud->addTag(array('tag' => 'Gulp', 'level' => 3));
$cloud->addTag(array('tag' => 'Javascript', 'level' => 5));
$cloud->addTag(array('tag' => 'Composer', 'level' => 4));
$cloud->addTag(array('tag' => 'Jenkins', 'level' => 2));
$cloud->addTag(array('tag' => 'HTML5', 'level' => 5));
$cloud->addTag(array('tag' => 'RAML', 'level' => 4));
$cloud->addTag(array('tag' => 'Python', 'level' => 2));
$cloud->addTag(array('tag' => 'Compass', 'level' => 4));
$cloud->addTag(array('tag' => 'Memcache', 'level' => 3));
$cloud->addTag(array('tag' => 'CouchDB', 'level' => 2));
$cloud->addTag(array('tag' => 'Apache', 'level' => 4));
$cloud->addTag(array('tag' => 'Flash Media Server', 'level' => 4));
$cloud->addTag(array('tag' => 'Saas', 'level' => 4));
$cloud->addTag(array('tag' => 'JSON Schema', 'level' => 2));
$cloud->addTag(array('tag' => 'API REST', 'level' => 5));
$cloud->addTag(array('tag' => 'App cache', 'level' => 4));
$cloud->addTag(array('tag' => 'Nagios', 'level' => 1));
$cloud->addTag(array('tag' => 'NPM', 'level' => 3));
$cloud->addTag(array('tag' => 'ReactJS', 'level' => 3));
$cloud->addTag(array('tag' => 'IndexedDB', 'level' => 4));
$cloud->addTag(array('tag' => 'Nginx', 'level' => 2));
$cloud->addTag(array('tag' => 'CSS', 'level' => 5));
$cloud->addTag(array('tag' => 'Express', 'level' => 3));
$cloud->addTag(array('tag' => 'HTTP', 'level' => 5));
$cloud->addTag(array('tag' => 'PouchDB', 'level' => 2));
$cloud->addTag(array('tag' => 'Browserify', 'level' => 3));
$cloud->addTag(array('tag' => 'AS3', 'level' => 5));
$cloud->addTag(array('tag' => 'NodeJS', 'level' => 3));
$cloud->addTag(array('tag' => 'Cordova', 'level' => 2));

$cloud->setHtmlizeTagFunction( function($tag, $size) {
    return "<span class=\"tag tag-level-{$tag['level']}\">{$tag['tag']}</span> ";
});

echo "\n";
echo $cloud->render();
echo "\n";
echo "\n";