
<?php
include_once './classTable.php';
include_once './classTableWedding.php';
include_once './Family.php';
include_once './TableFamily.php';
include_once './TableStarter.php';
include_once './FamilyJ.php';
include_once './BrideAndGroomClass.php';
include_once './classMember.php';
include_once './Meal.php';
include_once './classWaiter.php';

class DbOperation{
    private $con;
    function __construct()
    {
        require_once dirname(__FILE__).'./dbConnect.php';
        $db=new DbConnect();
        $this->con=$db->connect();
		$this->con->set_charset('utf8');
    }
    function validateManager($code,$restaurantId)
    {
		$la="SELECT * FROM `manager` where password='$code' and Restaurant_idRestaurant=$restaurantId";
        $res=$this->con->query($la) or die($this->con->error);
		$row=$res->fetch_assoc();
		$res->close();
       return $row;
        
    }
	function returnTakenWeddingDates($now)
	{
		$la="SELECT 'date' FROM `wedding` where date>'$now'";
		$arr=array();
        $res=$this->con->query($la);
		$row=$res->fetch_assoc();
		while($ow!=null)
		{
			array_push($arr,$row);
			$row=$res->fetch_assoc();
		}
		$res->close();
       return $arr;
        
	}
	function addHostess($email,$password,$name,$restaurantId)
	{
		$la="INSERT INTO `hostess` (`idHostess`, `name`, `password`, `Restaurant_idRestaurant`, `email`) VALUES (NULL, '$name', '$password', '1111', '$email')";
		$res=$this->con->query($la);
		$provera="SELECT * from `hostess` where `email`='$email' and `password`='$password' ";
		$res=$this->con->query($provera);
		if ($res)
		{
		$row = $res->fetch_assoc();
 		$resArray = $row["idHostess"];
		return $resArray;
		}
		else
		return null;
	}
	function addWaiter($email,$password,$name,$restaurantId)
	{
		$la="INSERT INTO `waiter` (`idWaiter`, `name`, `password`, `Restaurant_idRestaurant`, `email`) VALUES (NULL, '$name', '$password', '1111', '$email');";
		$res=$this->con->query($la);
		$provera="SELECT * from `waiter` where `email`='$email' and `password`='$password' ";
		$res=$this->con->query($provera);
		if ($res)
		{
		$row = $res->fetch_assoc();
 		$resArray = $row["idWaiter"];
		return $resArray;
		}
		else
		return null;
	}
	function createNewlyweds($nameBride,$nameGroom,$lastname,$email)
	{
		$la="INSERT INTO `brideandgroom` (`idBrideAndGroom`, `nameBride`, `nameGroom`, `lastname`, `email`,`password`) VALUES (NULL, '$nameBride', '$nameGroom', '$lastname', '$email','poat')";
		$res=$this->con->query($la);
		$provera="SELECT * from `brideandgroom` where `email`='$email' and `nameGroom`='$nameGroom' and `lastname`='$lastname'";
		$respom=$this->con->query($provera);
		if ($respom) {
                if ($row = $respom->fetch_assoc()) {
                    $toReturn = $row['idBrideAndGroom'];
					}
		return $toReturn;
		}
		else
		return $respom;
	}
	
	function createWedding($password,$date,$buffet,$BrideAndGroom_idBrideAndGroom,$priceRange)
	{
	 $la="INSERT INTO `wedding` (`idWedding`, `password`, `date`, `buffet`, `BrideAndGroom_idBrideAndGroom`, `Hostess_idHostess`, `priceRange`) VALUES (NULL, '$password', '$date', $buffet,$BrideAndGroom_idBrideAndGroom,NULL,'$priceRange')";
	 $res=$this->con->query($la);
	$provera="SELECT * from `wedding` where `password`='$password' and `BrideAndGroom_idBrideAndGroom`=$BrideAndGroom_idBrideAndGroom";
	$respom=$this->con->query($provera);
	return $respom;
	if ($respom) {
                if ($row = $respom->fetch_assoc()) {
                    $toReturn = $row['idWedding'];
					}
		return $toReturn;
		}
		else
		return $respom;
	}
	function getFreeDays()
	{
	$la="SELECT * FROM `wedding`";
	$res=$this->con->query($la);
		if ($res)
		{
		$resArray=array();
                while ($row = $res->fetch_assoc())
				    {
                    $resArray[] = $row['date'];
					}
		return $resArray;
		}
		else
		return $res;
	}
	function createStarter($name,$vegeterian,$Restaurant_idRestaurant,$price)
	{
	 $la="INSERT INTO `starter` (`name`, `vegeterian`, `Restaurant_idRestaurant`, `price`) VALUES ('$name', $vegeterian, $Restaurant_idRestaurant, '$price')";
	 $res=$this->con->query($la);
	$provera="SELECT * from `starter` where `name`='$name'";
	$respom=$this->con->query($provera);
	return $respom;
	}
	function createMainCourse($name,$vegeterian,$Restaurant_idRestaurant,$price)
	{
	 $la="INSERT INTO `maincourse` (`name`, `vegeterian`, `Restaurant_idRestaurant`, `price`) VALUES ('$name', $vegeterian, $Restaurant_idRestaurant, '$price')";
	 $res=$this->con->query($la);
	$provera="SELECT * from `maincourse` where `name`='$name'";
	$respom=$this->con->query($provera);
	return $respom;
	}
	function createDesert($name,$vegeterian,$Restaurant_idRestaurant,$price)
	{
	 $la="INSERT INTO `desert` (`name`, `vegeterian`, `Restaurant_idRestaurant`, `price`) VALUES ('$name', $vegeterian, $Restaurant_idRestaurant, '$price')";
	 $res=$this->con->query($la);
	$provera="SELECT * from `desert` where `name`='$name'";
	$respom=$this->con->query($provera);
	return $respom;
	}
	  function validateHostess($password,$name)
    {
		$la="SELECT * FROM `hostess` where password='$password' and name='$name';";
        $res=$this->con->query($la);
        $row=$res->fetch_assoc();
		$res->close();
       return $row;
        
    }
	  function validateNewlyweds($password,$email)
    {
		$la="SELECT idBrideAndGroom,nameBride,nameGroom,lastname,email,wedding.date,idWedding FROM `brideandgroom` INNER JOIN wedding on brideandgroom.idBrideAndGroom=wedding.BrideAndGroom_idBrideAndGroom  WHERE brideandgroom.PASSWORD='$password' and email='$email'";
        $res=$this->con->query($la);
        $row=$res->fetch_assoc();
        if($row)
        {
		$r= new BrideAndGroom($row["idBrideAndGroom"],$row["nameBride"],$row["nameGroom"],$row["lastname"],$row["email"],$row["date"],$row["idWedding"]);
		$res->close();
        return $r;
    	}
    	return $row;
     	    
    }
	function returnTables($Restaurant_idRestaurant)
	{
	$la="SELECT * FROM `tables` WHERE Restaurant_idRestaurant=$Restaurant_idRestaurant";
	 $res=$this->con->query($la);
	 if($res){
	    $tables=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		
		$tabl=new Table($row["shape"],$row["capacity"],$row["Restaurant_idRestaurant"],$row["idTable"]);
		$tables[]=$tabl;
		$row=$res->fetch_assoc();
		
		}
		return $tables;
	 }
	 return $res;
	}
	function validateWaiter($password,$name)
    {
		$la="SELECT * FROM `waiter` where password='$password' and name='$name';";
        $res=$this->con->query($la);
        $row=$res->fetch_assoc();
        $rez=$row['idWaiter'];
		$res->close();
       return $rez;
        
    }
	function saveTable($Tables_idTable,$numberTable,$numberPeople,$Wedding_idWedding,$x,$y)
	{
	    $la="INSERT INTO `tables_has_wedding` (`Tables_idTable`, `numberTable`, `numberPeople`, `Waiter_idWaiter`, `Wedding_idWedding`, `x`, `y`)  VALUES ($Tables_idTable, $numberTable, $numberPeople, NULL, $Wedding_idWedding, $x, $y)";
		$res=$this->con->query($la);
		$provera="SELECT * from `tables_has_wedding` where `Tables_idTable`=$Tables_idTable and `Wedding_idWedding`=$Wedding_idWedding ";
		$respom=$this->con->query($provera);
		return $respom;
	}
	function TablesWedding($Restaurant_idRestaurant,$wedId)
	{
	$la="SELECT * FROM tables_has_wedding INNER JOIN tables ON tables_has_wedding.Tables_idTable=tables.idTable where Wedding_idWedding=$wedId ";
	 $res=$this->con->query($la);
	 if($res){
	    $tables=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$tabl=new TableWedding($row["shape"],$row["capacity"],$row["Wedding_idWedding"],$row["Tables_idTable"],$row["numberTable"],$row["numberPeople"],$row["x"],$row["y"]);
		$tables[]=$tabl;
		$row=$res->fetch_assoc();
		
		}
		return $tables;
	 }
	 return $res;
	 }
	 function addFamily($lastname,$numOfMembers,$guestType,$idWedding)
	{
		$la="INSERT INTO `family` (`id`, `lastname`, `numOfMembers`, `guestType`, `coming`, `numComing`, `Tables_has_Wedding_Tables_idTable`, `Tables_has_Wedding_Wedding_idWedding`, `Wedding_idWedding`) VALUES (NULL, '$lastname', $numOfMembers, '$guestType', '0', '0', NULL, $idWedding, $idWedding);";
		$res=$this->con->query($la);
		$provera="SELECT * FROM `family` WHERE `Wedding_idWedding`=$idWedding AND lastname='$lastname' AND `guestType`='$guestType' AND numOfMembers=$numOfMembers";
		$pompr="SELECT * FROM `family` ORDER BY `id` DESC ";
		$respom=$this->con->query($provera);
		$t=$this->con->query($pompr);
		if ($respom) {
		$toReturn=null;
                if ($row = $respom->fetch_assoc()) {
                    $toReturn = $row['id'];
					}
				$row1 = $t->fetch_assoc();
		if($toReturn==$row1['id'])
		return $toReturn;
		}
		else
		return null;
	}
	function returnWaiters()
	{
		$la="SELECT * FROM `waiter`";
	  $res=$this->con->query($la);
	 if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=new classWaiter($row["name"],$row["idWaiter"]);
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function returnFamiliesAtTable($idWedding)
	{
	  $la="select name,lastname,numberTable,idTable,id,coming FROM(SELECT name,lastname,Wedding_idWedding as wedid,Tables_has_Wedding_Tables_idTable as idTable,id,member.coming from member INNER JOIN family on member.FamilyMemberId=family.id AND family.Wedding_idWedding=member.Family_Wedding_idWedding where family.Wedding_idWedding=$idWedding) AS x INNER JOIN tables_has_wedding on x.idTable=tables_has_wedding.Tables_idTable and x.wedid=tables_has_wedding.Wedding_idWedding ";
	 $res=$this->con->query($la);
	 if($res){
	    $tables=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$tabl=new Family($row["name"],$row["lastname"],$row["numberTable"],$row["idTable"],$row["id"],$row["coming"]);
		$tables[]=$tabl;
		$row=$res->fetch_assoc();
		
		}
		return $tables;
	 }
	 return $res;
	}
	
	function returnFamiliesWhoCame($idWedding,$lastname)
	{
		$la="select name,lastname,numberTable,idTable,id,coming FROM(SELECT name,lastname,Wedding_idWedding as wedid,Tables_has_Wedding_Tables_idTable as idTable,id,member.coming from member INNER JOIN family on member.FamilyMemberId=family.id AND family.Wedding_idWedding=member.Family_Wedding_idWedding where family.Wedding_idWedding=$idWedding) AS x INNER JOIN tables_has_wedding on x.idTable=tables_has_wedding.Tables_idTable and x.wedid=tables_has_wedding.Wedding_idWedding and lastname='$lastname' ";
	 $res=$this->con->query($la);
	 if($res){
	    $tables=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
			//($name,$lastname,$numberTable,$idTable,$id)
		$tabl=new Family($row["name"],$row["lastname"],$row["numberTable"],$row["idTable"],$row["id"],$row["coming"]);
		$tables[]=$tabl;
		$row=$res->fetch_assoc();
		
		}
		return $tables;
	 }
	 return $res;
	}

		function validateMember($password,$email)
    {
		$la="SELECT * from (SELECT * from (SELECT idMember,email,name,member.coming,MainCourse_name,Desert_name,Starter_name,Family_Wedding_idWedding,FamilyMemberId,family.guestType,family.Tables_has_Wedding_Tables_idTable FROM `member` INNER JOIN family on member.FamilyMemberId=family.id WHERE password='$password' AND email='$email') AS la INNER JOIN tables_has_wedding on tables_has_wedding.Tables_idTable=Tables_has_Wedding_Tables_idTable AND Family_Wedding_idWedding=tables_has_wedding.Wedding_idWedding) as tra INNER JOIN wedding on 	Wedding_idWedding=wedding.idWedding ";

		$res=$this->con->query($la);
        $row=$res->fetch_assoc();
        if($row)
        {
		$r=new classMember($row['idMember'],$row['email'],$row['name'],$row['coming'],$row['Starter_name'],$row['MainCourse_name'],$row['Desert_name'],$row['Family_Wedding_idWedding'],$row['FamilyMemberId'],$row['Waiter_idWaiter'],$row['Tables_has_Wedding_Tables_idTable'],$row['guestType'],$row['priceRange'],$row['date']);
		$res->close();
        return $r;
     }
    return $row;
     }
	function ComingOrNot($coming,$idMember,$wedid)
	{
	   $la="UPDATE `member` SET `coming`=$coming WHERE idMember=$idMember AND Family_Wedding_idWedding=$wedid";
        $res=$this->con->query($la);
		return  $res;
	}
	function returnStarters($priceRange)
	{
	    $la="SELECT name FROM `starter` WHERE price='$priceRange'";
        $res=$this->con->query($la);
       if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=$row["name"];
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function updateStarter($idMember,$starter)
	{
		$la="UPDATE `member` SET `Starter_name`='$starter' WHERE idMember=$idMember";
        $res=$this->con->query($la);
		return  $res;
	}
	function returnMains($priceRange)
	{
	    $la="SELECT name FROM `maincourse` WHERE price='$priceRange'";
        $res=$this->con->query($la);
       if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=$row["name"];
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function updateMainCourse($idMember,$mainCourse)
	{
		$la="UPDATE `member` SET `MainCourse_name`='$mainCourse' WHERE idMember=$idMember";
        $res=$this->con->query($la);
		return  $res;
	}
	function returnDeserts($priceRange)
	{
	    $la="SELECT name FROM `desert`  WHERE price='$priceRange'";
        $res=$this->con->query($la);
       if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=$row["name"];
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function updateDesserts($idMember,$desert)
	{
		$la="UPDATE `member` SET `Desert_name`='$desert' WHERE member.idMember=$idMember";
        $res=$this->con->query($la);
		return  $res;
	}
	function returnWeddingToday($date)
	{
		$la="SELECT idWedding FROM wedding where wedding.date='$date'";
        $res=$this->con->query($la);
        $row=$res->fetch_assoc();
		$r=$row['idWedding'];
		$res->close();
        return $r;
	}
	function findTableNum($id,$weddingId)
	{
		$la="SELECT id,lastname,Tables_has_Wedding_Tables_idTable,numberTable,x,y FROM family INNER JOIN tables_has_wedding on family.Tables_has_Wedding_Tables_idTable=tables_has_wedding.Tables_idTable AND family.Wedding_idWedding=tables_has_wedding.Wedding_idWedding where family.Wedding_idWedding=$weddingId AND family.id=$id";
        $res=$this->con->query($la);
        $row=$res->fetch_assoc();
		$r=new TableFamily($row["x"],$row["y"],$row["lastname"],$row["numberTable"],$row["Tables_has_Wedding_Tables_idTable"],$row["id"]);
		$res->close();
        return $r;
	}
	function returnStartersWaiter($date,$waiterId)
	{
	    $la="SELECT member.Starter_name,idMember,family.Tables_has_Wedding_Tables_idTable FROM member INNER JOIN family on member.FamilyMemberId=family.id WHERE family.Wedding_idWedding IN (SELECT wedding.idWedding FROM wedding WHERE date='$date') and family.id in (SELECT id from family INNER join tables_has_wedding on family.Tables_has_Wedding_Tables_idTable=tables_has_wedding.Tables_idTable AND family.Wedding_idWedding=tables_has_wedding.Wedding_idWedding WHERE tables_has_wedding.Waiter_idWaiter=$waiterId) and StarterSeen IS NULL";
		$res=$this->con->query($la);
        if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=new TableStarter($row["Tables_has_Wedding_Tables_idTable"],$row["Starter_name"],$row["idMember"]);
		if($waiter->starter!=null)
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function returnMainsWaiter($date,$waiterId)
	{
	    $la="SELECT member.MainCourse_name,family.Tables_has_Wedding_Tables_idTable,idMember FROM member INNER JOIN family on member.FamilyMemberId=family.id WHERE family.Wedding_idWedding IN (SELECT wedding.idWedding FROM wedding WHERE date='$date') and family.id in (SELECT id from family INNER join tables_has_wedding on family.Tables_has_Wedding_Tables_idTable=tables_has_wedding.Tables_idTable AND family.Wedding_idWedding=tables_has_wedding.Wedding_idWedding WHERE tables_has_wedding.Waiter_idWaiter=$waiterId) and MainSeen IS NULL";
		$res=$this->con->query($la);
        if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=new TableStarter($row["Tables_has_Wedding_Tables_idTable"],$row["MainCourse_name"],$row["idMember"]);
		if($waiter->starter!=null)
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function returnDessertsWaiter($date,$waiterId)
	{
		$la="SELECT member.Desert_name,family.Tables_has_Wedding_Tables_idTable,idMember FROM member INNER JOIN family on member.FamilyMemberId=family.id WHERE family.Wedding_idWedding IN (SELECT wedding.idWedding FROM wedding WHERE date='$date') and family.id in (SELECT id from family INNER join tables_has_wedding on family.Tables_has_Wedding_Tables_idTable=tables_has_wedding.Tables_idTable AND family.Wedding_idWedding=tables_has_wedding.Wedding_idWedding WHERE tables_has_wedding.Waiter_idWaiter=$waiterId) and DesertSeen IS NULL";
		$res=$this->con->query($la);
        if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=new TableStarter($row["Tables_has_Wedding_Tables_idTable"],$row["Desert_name"],$row["idMember"]);
		if($waiter->starter!=null)
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function returnFamilies($weddingId)
	{
		$la="SELECT id,lastname,numOfMembers,guestType,coming FROM family WHERE Wedding_idWedding=$weddingId";
		$res=$this->con->query($la);
        if($res)
        {
	    $waiters=array();
	    $row=$res->fetch_assoc();
	    $waiter=null;
		while($row)
		  {
		$waiter=new FamilyJ($row["lastname"],$row["numOfMembers"],$row["guestType"],$row["coming"],$row["id"]);
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		   }
		return $waiters;
	   }
	 return $res;
	}
	function updateTableFamily($id,$idTable)
	{
 		$la="UPDATE `family` SET `Tables_has_Wedding_Tables_idTable`=$idTable where family.id=$id";
        $res=$this->con->query($la);
		return  $res;
	}
	function saveGuest($email,$name,$idWedding,$familyId,$pass)
	{
		 $la="INSERT INTO `member` (`idMember`, `email`, `name`, `coming`, `MainCourse_name`, `Desert_name`, `Starter_name`, `Family_Wedding_idWedding`, `FamilyMemberId`, `password`) VALUES (NULL, '$email', '$name', NULL, NULL, NULL, NULL, '$idWedding', '$familyId', '$pass')";
		$res=$this->con->query($la);
		$provera="SELECT * from `member` where `email`=$email and password='$pass' ";
		$respom=$this->con->query($provera);
		return $respom;
	}
	function saveTablesHasWedding($tables)
	{
		 $la="INSERT INTO `tables_has_wedding`(`Tables_idTable`, `numberTable`, `numberPeople`, `Waiter_idWaiter`, `Wedding_idWedding`, `x`, `y`) VALUES ";
		 for ($i = 0; $i < count($tables); $i++)
		 {
		 	$pom=$i+1;$x=(int)$tables[$i]["x"];$y=(int)$tables[$i]["y"];$id=$tables[$i]["id"];$wedId=$tables[$i]["wedding"];
		 	$index=count($tables)-1;
		 	if($i!=$index)
		 	$la= $la . " (" . $id . "," . $pom . ",0,NULL," . $wedId . "," . $x . "," . $y . ")," ;         
		    else
		    $la= $la . " (". $id . "," . $pom . ",0,NULL," . $wedId . "," . $x . "," . $y . ")" ;  
		 	
		 }
		 $res=$this->con->query($la);
		 return $res;
	}
	function returnStartersToChange()
	{
		$la="SELECT * FROM `starter`";
        $res=$this->con->query($la);
       if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=new Meal($row["name"],$row["vegeterian"],$row["price"]);
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function returnMainsToChange()
	{
		$la="SELECT * FROM `maincourse`";
        $res=$this->con->query($la);
       if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=new Meal($row["name"],$row["vegeterian"],$row["price"]);
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function returnDessertsToChange()
	{
		$la="SELECT * FROM `desert`";
        $res=$this->con->query($la);
       if($res){
	    $waiters=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
		$waiter=new Meal($row["name"],$row["vegeterian"],$row["price"]);
		$waiters[]=$waiter;
		$row=$res->fetch_assoc();
		
		}
		return $waiters;
	 }
	 return $res;
	}
	function returnGuestsForWedding($idWedding)
	{
	$la="select name,lastname,numberTable,idTable,id,coming FROM(SELECT name,lastname,Wedding_idWedding as wedid,Tables_has_Wedding_Tables_idTable as idTable,id,member.coming from member INNER JOIN family on member.FamilyMemberId=family.id AND family.Wedding_idWedding=member.Family_Wedding_idWedding where family.Wedding_idWedding=$idWedding) AS x INNER JOIN tables_has_wedding on x.idTable=tables_has_wedding.Tables_idTable and x.wedid=tables_has_wedding.Wedding_idWedding  ";
	 $res=$this->con->query($la);
	 if($res){
	    $tables=array();
	    $row=$res->fetch_assoc();
		while($row)
		{
			//($name,$lastname,$numberTable,$idTable,$id)
		$tabl=new Family($row["name"],$row["lastname"],$row["numberTable"],$row["idTable"],$row["id"],$row["coming"]);
		$tables[]=$tabl;
		$row=$res->fetch_assoc();
		
		}
		return $tables;
	 }
	 return $res;
	}
	function updateDessertManager($name,$vegeterian,$priceRange)
	{
		$la="UPDATE `desert` SET `vegeterian`=$vegeterian,`Restaurant_idRestaurant`=1111,`price`='$priceRange' WHERE name='$name'";
        $res=$this->con->query($la);
	  return $res;
	}

	function updateMainManager($name,$vegeterian,$priceRange)
	{
		$la="UPDATE `maincourse` SET `vegeterian`=$vegeterian,`Restaurant_idRestaurant`=1111,`price`='$priceRange' WHERE name='$name'";
        $res=$this->con->query($la);
	  return $res;
	}

	function updateStarterManager($name,$vegeterian,$priceRange)
	{
		$la="UPDATE `starter` SET `vegeterian`=$vegeterian,`Restaurant_idRestaurant`=1111,`price`='$priceRange' WHERE name='$name'";
        $res=$this->con->query($la);
	  return $res;
	}
	function deleteWedding($date)
	{
		$la="SELECT * FROM `wedding` WHERE date='$date'";
        $res=$this->con->query($la);
	    $row=$res->fetch_assoc();
	    $idWedding=null;$idBrideAndGroom=null;
		if($row)
		{
		$idWedding=$row["idWedding"];
		$idBrideAndGroom=$row["BrideAndGroom_idBrideAndGroom"];
		$la="DELETE from member where member.Family_Wedding_idWedding=$idWedding";
        $res=$this->con->query($la);
        $la="DELETE from family where family.Wedding_idWedding=$idWedding";
        $res=$this->con->query($la);
         $la="DELETE FROM tables_has_wedding WHERE tables_has_wedding.Wedding_idWedding=$idWedding";
        $res=$this->con->query($la);
          $la="DELETE from wedding WHERE wedding.idWedding=$idWedding";
        $res=$this->con->query($la);
         $la="DELETE FROM `brideandgroom` WHERE idBrideAndGroom=$idBrideAndGroom";
        $res=$this->con->query($la);
        return true;

		
		}
		return "Nema trazenog vencanja";
	 
	}
	function updateWaiterTable($idTable,$idWaiter,$idWedding)
	{
		$la="UPDATE `tables_has_wedding` SET `Waiter_idWaiter`=$idWaiter WHERE `Tables_idTable`=$idTable AND tables_has_wedding.Wedding_idWedding=$idWedding";
        $res=$this->con->query($la);
        return true;

	}
	function changeFamiliesTable($idFam1,$idFam2,$idTable1,$idTable2)
	{
		$la="UPDATE `family` SET `Tables_has_Wedding_Tables_idTable`=$idTable1 WHERE id=$idFam1";
        $res=$this->con->query($la);
    $la="UPDATE `family` SET `Tables_has_Wedding_Tables_idTable`=$idTable2 WHERE id=$idFam2";
        $res=$this->con->query($la);
        return true;
	}
	function createManager($uniqueId,$id,$password)
	{
		$la="SELECT * from manager";
		$res=$this->con->query($la);
		$row=$res->fetch_assoc();
		if($uniqueId==$row["uniqueId"]&&$id=$row["Restaurant_idRestaurant"])
		{
			$la="SELECT * from manager where `password`='$password'";
			$res=$this->con->query($la);
			$row=$res->fetch_assoc();
			if($row)
			return "Sifra nije validna";
    $la="INSERT INTO `manager`(`password`, `Restaurant_idRestaurant`) VALUES ('$password',1111)";
	$res=$this->con->query($la);
	return "Uspesno ste kreirali svoj profil";
		}
        return null;
	}
	
	function updateMemberStarter($tables)
	{
		$la="UPDATE `member` SET `StarterSeen`=1 WHERE ";
        for ($i = 0; $i < count($tables); $i++)
		{
			$x=(int)$tables[$i];
			$index=count($tables)-1;
			if($i!=$index)
			$la= $la . " idMember=" . $x. " OR " ;         
		   else
           $la=$la . " idMember=" . $x  ;  
			
		}
	
		$res=$this->con->query($la);
        return true;

	}
	function updateMemberMain($tables)
	{
		$la="UPDATE `member` SET `MainSeen`=1 WHERE ";
		for ($i = 0; $i < count($tables); $i++)
		{
			$x=(int)$tables[$i];
			$index=count($tables)-1;
			if($i!=$index)
			$la= $la . " idMember=" . $x. " OR " ;         
		   else
           $la=$la . " idMember=" . $x  ;  
			
		}
	
		$res=$this->con->query($la);
        return true;
	}
	function updateMemberDesert($tables)
	{
		$la="UPDATE `member` SET `DesertSeen`=1 WHERE ";
		for ($i = 0; $i < count($tables); $i++)
		{
			$x=(int)$tables[$i];
			$index=count($tables)-1;
			if($i!=$index)
			$la= $la . " idMember=" . $x. " OR " ;         
		   else
           $la=$la . " idMember=" . $x  ;  
			
		}
	
		$res=$this->con->query($la);
        return true;

	}


	

	
}
?>

