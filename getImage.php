<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once "vendor/autoload.php";
try {
    \Crew\Unsplash\HttpClient::init(['applicationId' => 'c2aa42695c13cb9facee79d87151d91f8927837668c5f99796cd2f7d1ca6ffcf', 'utmSource' => 'Random Adv']);
    $k = isset($_REQUEST["k"])?$_REQUEST["k"]:"";
    if (!is_null($k) && $k!==""){
    $filters = ['query' => $k,'w'=>"1000",'h'=>"1000"];
    $result = Crew\Unsplash\Photo::random($filters);
    $urls = $result->__get("urls");
    echo json_encode(array("status"=>200,"url"=>$urls["custom"]));//custom,thumb,small,regular,full,raw
    }
    else echo json_encode(array("status"=>400));
}
catch (Exception $e) {
    echo json_encode(array("status"=>402));
}