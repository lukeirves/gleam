<?php

echo json_encode(unserialize(file_get_contents('prefs.bin')));

?>