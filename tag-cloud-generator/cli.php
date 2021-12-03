<?php

require_once '../vendor/autoload.php';

use lotsofcode\TagCloud\TagCloud;

$cloud = new TagCloud();
$cloud->setOption('transliterate', false);

$cloud->addTag(array('tag' => 'PHP', 'level' => 5));
$cloud->addTag(array('tag' => 'Mysql', 'level' => 4));
$cloud->addTag(array('tag' => 'Redux', 'level' => 5));
$cloud->addTag(array('tag' => 'Webpack', 'level' => 3));
$cloud->addTag(array('tag' => 'Jest', 'level' => 5));
$cloud->addTag(array('tag' => 'TypeScript', 'level' => 4));
$cloud->addTag(array('tag' => 'React Native', 'level' => 5));
$cloud->addTag(array('tag' => 'Javascript', 'level' => 5));
$cloud->addTag(array('tag' => 'Composer', 'level' => 4));
$cloud->addTag(array('tag' => 'Maintainability', 'level' => 5));
$cloud->addTag(array('tag' => 'Gitlab CI', 'level' => 4));
$cloud->addTag(array('tag' => 'HTML5', 'level' => 5));
$cloud->addTag(array('tag' => 'RAML', 'level' => 4));
$cloud->addTag(array('tag' => 'Docker', 'level' => 2));
$cloud->addTag(array('tag' => 'Python', 'level' => 2));
$cloud->addTag(array('tag' => 'Interface', 'level' => 5));
$cloud->addTag(array('tag' => 'Redis', 'level' => 3));
$cloud->addTag(array('tag' => 'Consistency', 'level' => 4));
$cloud->addTag(array('tag' => 'Apache', 'level' => 4));
$cloud->addTag(array('tag' => 'Management', 'level' => 4));
$cloud->addTag(array('tag' => 'SaaS', 'level' => 4));
$cloud->addTag(array('tag' => 'Contract', 'level' => 5));
$cloud->addTag(array('tag' => 'Firebase platform', 'level' => 4));
$cloud->addTag(array('tag' => 'JSON Schema', 'level' => 5));
$cloud->addTag(array('tag' => 'REST API', 'level' => 5));
$cloud->addTag(array('tag' => 'Mentoring', 'level' => 5));
$cloud->addTag(array('tag' => 'Service Worker', 'level' => 2));
$cloud->addTag(array('tag' => 'Node', 'level' => 4));
$cloud->addTag(array('tag' => 'React', 'level' => 5));
$cloud->addTag(array('tag' => 'React Testing Library', 'level' => 4));
$cloud->addTag(array('tag' => 'Leadership', 'level' => 4));
$cloud->addTag(array('tag' => 'Nginx', 'level' => 3));
$cloud->addTag(array('tag' => 'CSS', 'level' => 5));
$cloud->addTag(array('tag' => 'Dependency injection', 'level' => 5));
$cloud->addTag(array('tag' => 'HTTP', 'level' => 5));
$cloud->addTag(array('tag' => 'Loose coupling', 'level' => 5));
$cloud->addTag(array('tag' => 'S.O.L.I.D', 'level' => 5));
$cloud->addTag(array('tag' => 'AS3', 'level' => 5));
$cloud->addTag(array('tag' => 'Unit Test', 'level' => 5));
$cloud->addTag(array('tag' => 'Detox', 'level' => 5));
$cloud->addTag(array('tag' => 'Code review', 'level' => 5));
$cloud->addTag(array('tag' => 'Continuous Integration', 'level' => 5));
$cloud->addTag(array('tag' => 'Continuous Dxelivery', 'level' => 5));
$cloud->addTag(array('tag' => 'Serverless', 'level' => 1));
$cloud->addTag(array('tag' => 'OpenAPI', 'level' => 4));
$cloud->addTag(array('tag' => 'SAML SSO', 'level' => 4));
$cloud->addTag(array('tag' => 'Cocoapods', 'level' => 3));
$cloud->addTag(array('tag' => 'XCode', 'level' => 3));
$cloud->addTag(array('tag' => 'Android Studio', 'level' => 3));
$cloud->addTag(array('tag' => 'Gradle', 'level' => 3));
$cloud->addTag(array('tag' => 'Hiring', 'level' => 5));

$cloud->setHtmlizeTagFunction( function($tag, $size) {
    return "<span class=\"tag tag-level-{$tag['level']}\">{$tag['tag']}</span> ";
});

echo "\n";
echo $cloud->render();
echo "\n";
echo "\n";
