<?php
include_once 'dbOperations.php';
$baza=new DBOperation();
$res=null;
if(isset($_POST["login"]))
{
$res=$baza->validateHostess($_POST["password"],$_POST["name"]);
if($res!=null)
$pom=true;
else
$pom=false;
echo json_encode($pom);
}
if(isset($_POST["returnWeddingToday"]))
{
$res=$baza->returnWeddingToday($_POST["date"]);
echo json_encode($res);
}

if(isset($_POST["findTableNum"]))
{
$res=$baza->findTableNum($_POST["id"],$_POST["weddingId"]);
echo json_encode($res);
}
if(isset($_POST["returnFamiliesWhoCame"]))
{
$res=$baza->returnFamiliesWhoCame($_POST["idWedding"],$_POST["lastname"]);
echo json_encode($res);
}

?>