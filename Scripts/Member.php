<?php
include_once 'dbOperations.php';
$baza=new DBOperation();
$res=null;
if(isset($_POST["login"]))
{
$res=$baza->validateMember($_POST["password"],$_POST["email"]);
echo json_encode($res);
}
if(isset($_POST["MemberComing"]))
{
$res=$baza->ComingOrNot($_POST["coming"],$_POST["idMember"],$_POST["wedid"]);
echo json_encode($res);
}
if(isset($_POST["returnStarters"]))
{
$res=$baza->returnStarters($_POST["priceRange"]);
echo json_encode($res);
}
if(isset($_POST["updateStarter"]))
{
$res=$baza->updateStarter($_POST["idMember"],$_POST["starter"]);
echo json_encode($res);
}
if(isset($_POST["returnMains"]))
{
$res=$baza->returnMains($_POST["priceRange"]);
echo json_encode($res);
}
if(isset($_POST["updateMainCourse"]))
{
$res=$baza->updateMainCourse($_POST["idMember"],$_POST["mainCourse"]);
echo json_encode($res);
}
if(isset($_POST["returnDesserts"]))
{
$res=$baza->returnDeserts($_POST["priceRange"]);
echo json_encode($res);
}
if(isset($_POST["updateDessert"]))
{
$res=$baza->updateDesserts($_POST["idMember"],$_POST["desert"]);
echo json_encode($res);
}

?>