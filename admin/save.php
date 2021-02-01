<?php

$vimeo = $_POST['vimeo'];
$slido = $_POST['slido'];
$captions = $_POST['captions'];
$emails = $_POST['emails'];
$videos = $_POST['videos'];
$array = array($vimeo , $slido, $captions, $emails, $videos);
echo file_put_contents('prefs.bin', serialize($array));

?>