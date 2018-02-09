<?php

require_once '../vendor/autoload.php';

use lotsofcode\TagCloud\TagCloud;

$cloud = new TagCloud();
$cloud->setOption('transliterate', false);

$cloud->addTag(array('tag' => 'PHP', 'level' => 5));
$cloud->addTag(array('tag' => 'Mysql', 'level' => 4));
$cloud->addTag(array('tag' => 'Redux', 'level' => 3));
$cloud->addTag(array('tag' => 'Webpack', 'level' => 3));
$cloud->addTag(array('tag' => 'Javascript', 'level' => 5));
$cloud->addTag(array('tag' => 'Composer', 'level' => 4));
$cloud->addTag(array('tag' => 'Maintainability', 'level' => 5));
$cloud->addTag(array('tag' => 'Jenkins', 'level' => 2));
$cloud->addTag(array('tag' => 'HTML5', 'level' => 5));
$cloud->addTag(array('tag' => 'RAML', 'level' => 4));
$cloud->addTag(array('tag' => 'Gitlab', 'level' => 2));
$cloud->addTag(array('tag' => 'Python', 'level' => 2));
$cloud->addTag(array('tag' => 'Interface', 'level' => 5));
$cloud->addTag(array('tag' => 'Redis', 'level' => 3));
$cloud->addTag(array('tag' => 'Consistency', 'level' => 4));
$cloud->addTag(array('tag' => 'CouchDB', 'level' => 2));
$cloud->addTag(array('tag' => 'Apache', 'level' => 4));
$cloud->addTag(array('tag' => 'FMS', 'level' => 4));
$cloud->addTag(array('tag' => 'Management', 'level' => 4));
$cloud->addTag(array('tag' => 'Saas', 'level' => 4));
$cloud->addTag(array('tag' => 'Contract', 'level' => 5));
$cloud->addTag(array('tag' => 'JSON Schema', 'level' => 5));
$cloud->addTag(array('tag' => 'API REST', 'level' => 5));
$cloud->addTag(array('tag' => 'Mentoring', 'level' => 5));
$cloud->addTag(array('tag' => 'Service Worker', 'level' => 3));
$cloud->addTag(array('tag' => 'Nagios', 'level' => 1));
$cloud->addTag(array('tag' => 'Yarn', 'level' => 3));
$cloud->addTag(array('tag' => 'ReactJS', 'level' => 4));
$cloud->addTag(array('tag' => 'Leadership', 'level' => 4));
$cloud->addTag(array('tag' => 'IndexedDB', 'level' => 4));
$cloud->addTag(array('tag' => 'Nginx', 'level' => 2));
$cloud->addTag(array('tag' => 'CSS', 'level' => 5));
$cloud->addTag(array('tag' => 'Dependency injection', 'level' => 5));
$cloud->addTag(array('tag' => 'HTTP', 'level' => 5));
$cloud->addTag(array('tag' => 'PouchDB', 'level' => 2));
$cloud->addTag(array('tag' => 'Loose coupling', 'level' => 5));
$cloud->addTag(array('tag' => 'S.O.L.I.D', 'level' => 5));
$cloud->addTag(array('tag' => 'AS3', 'level' => 5));
$cloud->addTag(array('tag' => 'Unit Test', 'level' => 5));
$cloud->addTag(array('tag' => 'NodeJS', 'level' => 3));
$cloud->addTag(array('tag' => 'Cordova', 'level' => 2));
$cloud->addTag(array('tag' => 'Code review', 'level' => 5));
$cloud->addTag(array('tag' => 'Continuous Integration', 'level' => 5));
$cloud->addTag(array('tag' => 'Continuous delivery', 'level' => 5));


$cloud->setHtmlizeTagFunction( function($tag, $size) {
    return "<span class=\"tag tag-level-{$tag['level']}\">{$tag['tag']}</span> ";
});

echo "\n";
echo $cloud->render();
echo "\n";
echo "\n";
