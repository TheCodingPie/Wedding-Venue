<?php
include_once 'dbOperations.php';
$baza=new DBOperation();
$res=null;
if(isset($_POST["login"]))
{
$res=$baza->validateWaiter($_POST["password"],$_POST["name"]);
echo json_encode($res);
}
if(isset($_POST["returnStarters"]))
{
$res=$baza->returnStartersWaiter($_POST["date"],$_POST["waiterId"]);
echo json_encode($res);
}
if(isset($_POST["returnMains"]))
{
$res=$baza->returnMainsWaiter($_POST["date"],$_POST["waiterId"]);
echo json_encode($res);
}
if(isset($_POST["returnDesserts"]))
{
$res=$baza->returnDessertsWaiter($_POST["date"],$_POST["waiterId"]);
echo json_encode($res);
}
if(isset($_POST["updateMemberMain"]))
{
$mains=json_decode($_POST["idMember"],true);
$res=$baza->updateMemberMain($mains);
echo json_encode($res);
}
if(isset($_POST["updateMemberStarter"]))
{
$mains=json_decode($_POST["idMember"],true);
$res=$baza->updateMemberStarter($mains);
echo json_encode($res);
}
if(isset($_POST["updateMemberDesert"]))
{
$mains=json_decode($_POST["idMember"],true);
$res=$baza->updateMemberDesert($mains);
echo json_encode($res);
}
?>
