<?php
$json = file_get_contents('../package.json');
$data = json_decode($json, 1);

$id = rand(100,999);
$name = $_GET['name'];
$parentCat = $_GET['parentCat'];

$data[$id]['ID'] = $id;
$data[$id]['NAME'] = $name;
$data[$id]['PARENT'] = $parentCat;


$json = json_encode($data);
$file = fopen('../package.json', 'w');
fwrite($file,$json);




