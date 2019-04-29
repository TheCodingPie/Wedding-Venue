<?php
include_once 'dbOperations.php';
$baza=new DBOperation();
$res=null;
if(isset($_POST["login"]))
{
$res=$baza->validateManager($_POST["password"],$_POST["id"]);
if($res!=null)
$pom=true;
else
$pom=false;
echo json_encode($pom);
}
if(isset($_POST["createHostess"]))
{
$res=$baza->addHostess($_POST["id"],$_POST["password"],$_POST["name"],$_POST["dateAndTime"],$_POST["restaurantId"]);
if($res)
	$pom=true;
else
	$pom=false;
echo json_encode($res);
}
if(isset($_POST["createWaiter"]))
{
$res=$baza->addWaiter($_POST["id"],$_POST["password"],$_POST["name"],$_POST["dateAndTime"],$_POST["restaurantId"]);
if($res)
	$pom=true;
else
	$pom=false;
echo json_encode($res);
}
if(isset($_POST["createBrideAndGroom"]))
{
$res=$baza->createNewlyweds($_POST["nameBride"],$_POST["nameGroom"],$_POST["lastname"],$_POST["email"]);
echo json_encode($res);
}
if(isset($_POST["createWedding"]))
{
$res=$baza->createWedding($_POST["password"],$_POST["date"],$_POST["buffet"],$_POST["BrideAndGroom_idBrideAndGroom"]);
if($res)
	$pom=true;
else
	$pom=false;
echo json_encode($res);
}
if(isset($_POST["getFreeDays"]))
{
$res=$baza->getFreeDays();
echo json_encode($res);
}


?>

