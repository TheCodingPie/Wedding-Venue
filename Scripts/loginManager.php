<?php
include_once 'dbOperations.php';
$baza=new DBOperation();
$res=null;

if($res!=null)
$pom=true;
else
$pom=false;


echo json_encode($pom);


