<?php
include_once 'dbOperations.php';
$baza=new DBOperation();
$res=null;
if(isset($_POST["login"]))
{
$res=$baza->validateNewlyweds($_POST["password"],$_POST["email"]);
echo json_encode($res);
}
if(isset($_POST["addFamily"]))
{
$res=$baza->addFamily($_POST["lastname"],$_POST["numOfMembers"],$_POST["guestType"],$_POST["idWedding"]);
echo json_encode($res);
}
if(isset($_POST["rft"]))
{
$res=$baza->returnFamiliesAtTable($_POST["idWedding"]);
echo json_encode($res);
}
if(isset($_POST["saveGuest"]))
{
$res=$baza->saveGuest($_POST["email"],$_POST["name"],$_POST["idWedding"],$_POST["familyId"],$_POST["pass"]);
echo json_encode($res);
}
if(isset($_POST["returnGuestsForWedding"]))
{
$res=$baza->returnGuestsForWedding($_POST["idWedding"]);
echo json_encode($res);
}
if(isset($_POST["returnFamilies"]))
{
$res=$baza->returnFamilies($_POST["weddingId"]);
echo json_encode($res);
}
if(isset($_POST["updateTableFamily"]))
{
$res=$baza->updateTableFamily($_POST["id"],$_POST["idTable"]);
echo json_encode($res);
}
if(isset($_POST["changeFamiliesTable"]))
{
$res=$baza->changeFamiliesTable($_POST["idFam1"],$_POST["idFam2"],$_POST["idTable1"],$_POST["idTable2"]);
echo json_encode($res);
}


?>
