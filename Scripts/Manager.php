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
$res=$baza->addHostess($_POST["email"],$_POST["password"],$_POST["name"],$_POST["restaurantId"]);
echo json_encode($res);
}
if(isset($_POST["createWaiter"]))
{
$res=$baza->addWaiter($_POST["email"],$_POST["password"],$_POST["name"],$_POST["restaurantId"]);
echo json_encode($res);
}
if(isset($_POST["createBrideAndGroom"]))
{
$res=$baza->createNewlyweds($_POST["nameBride"],$_POST["nameGroom"],$_POST["lastname"],$_POST["email"]);
echo json_encode($res);
}
if(isset($_POST["createWedding"]))
{
$res=$baza->createWedding($_POST["password"],$_POST["date"],$_POST["buffet"],$_POST["BrideAndGroom_idBrideAndGroom"],$_POST["tipMenija"]);
echo json_encode($res);
}
if(isset($_POST["getFreeDays"]))
{
$res=$baza->getFreeDays();
echo json_encode($res);
}
if(isset($_POST["createStarter"]))
{
$res=$baza->createStarter($_POST["name"],$_POST["vegeterian"],$_POST["Restaurant_idRestaurant"],$_POST["price"]);
if($res)
	$pom=true;
else
	$pom=false;
echo json_encode($pom);
}
if(isset($_POST["createMain"]))
{
$res=$baza->createMainCourse($_POST["name"],$_POST["vegeterian"],$_POST["Restaurant_idRestaurant"],$_POST["price"]);
if($res)
	$pom=true;
else
	$pom=false;
echo json_encode($pom);
}
if(isset($_POST["createDesert"]))
{
$res=$baza->createDesert($_POST["name"],$_POST["vegeterian"],$_POST["Restaurant_idRestaurant"],$_POST["price"]);
if($res)
	$pom=true;
else
	$pom=false;
echo json_encode($pom);
}
if(isset($_POST["rt"]))
{
$res=$baza->returnTables(1111);
echo json_encode($res);
}
if(isset($_POST["saveTable"]))
{
$tables=json_decode($_POST["Tables_idTable"],true);
$la=$baza->saveTablesHasWedding($tables);

echo json_encode($la);
}
if(isset($_POST["TableWed"]))
{
$res=$baza->TablesWedding(1111,$_POST["wedId"]);
echo json_encode($res);
}
if(isset($_POST["returnWaiters"]))
{
$res=$baza->returnWaiters();
echo json_encode($res);
}
if(isset($_POST["returnStartersToUpdate"]))
{
$res=$baza->returnStartersToChange();
echo json_encode($res);
}
if(isset($_POST["returnMainsToUpdate"]))
{
$res=$baza->returnMainsToChange();
echo json_encode($res);
}
if(isset($_POST["returnDessertsToUpdate"]))
{
$res=$baza->returnDessertsToChange();
echo json_encode($res);
}
if(isset($_POST["updateDessertManager"]))
{
$res=$baza->updateDessertManager($_POST["name"],$_POST["vegeterian"],$_POST["priceRange"]);
echo json_encode($res);
}
if(isset($_POST["updateMainManager"]))
{
$res=$baza->updateMainManager($_POST["name"],$_POST["vegeterian"],$_POST["priceRange"]);
echo json_encode($res);
}
if(isset($_POST["updateStarterManager"]))
{
$res=$baza->updateStarterManager($_POST["name"],$_POST["vegeterian"],$_POST["priceRange"]);
echo json_encode($res);
}
if(isset($_POST["deleteWedding"]))
{
 $res=$baza->deleteWedding($_POST["date"]);
echo json_encode($res);
}
if(isset($_POST["updateTableWaiter"]))
{
 $res=$baza->updateWaiterTable($_POST["idTable"],$_POST["idWaiter"],$_POST["idWedding"]);
echo json_encode($res);
}
if(isset($_POST["createManager"]))
{
 $res=$baza->createManager($_POST["uniqueId"],$_POST["id"],$_POST["password"]);
echo json_encode($res);
}
if(isset($_POST["findWeddingToAddWaiters"]))
{
	$res=$baza->returnWeddingToday($_POST["date"]);
	echo json_encode($res);
}



?>
