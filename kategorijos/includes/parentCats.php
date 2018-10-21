<?php

$json = file_get_contents('../package.json');
$data = json_decode($json, 1);

echo "<option value='0'>Pasirinkti kategoriją</option>";
foreach ($data as $parentCat) {
    echo "<option value='".$parentCat['ID']."'>".$parentCat['NAME']."</option>";
}