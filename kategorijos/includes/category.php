<?php

printCat(0);

function printCat($parentID) {
    $json = file_get_contents('../package.json');
    $data = json_decode($json, 1);

    echo '<ul>';
    foreach ($data as $cat) {
        if ($cat['PARENT'] == $parentID) {
            echo '<li>'.$cat['NAME'].'</li>';
            printCat($cat['ID']);
        }
    }
    echo '</ul>';
}

