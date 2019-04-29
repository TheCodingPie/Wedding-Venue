<?php
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
	function addHostess($id,$password,$name,$dateAndTime,$restaurantId)
	{
		$la="INSERT INTO `hostess` (`idHostess`, `name`, `dateAndTime`, `password`, `Restaurant_idRestaurant`) VALUES ($id, '$name', '2019-04-02', '$password', $restaurantId)";
		$res=$this->con->query($la);
		$provera="SELECT * from `hostess` where `idHostess`=$id";
		$respom=$this->con->query($provera);
		return $respom;
	}
	function addWaiter($id,$password,$name,$dateAndTime,$restaurantId)
	{
		$la="INSERT INTO `waiter` (`idWaiter`, `name`, `dateandtime`, `password`, `Restaurant_idRestaurant`) VALUES  ($id, '$name', '2019-04-02', '$password', $restaurantId)";
		$res=$this->con->query($la);
		$provera="SELECT * from `waiter` where `idWaiter`=$id";
		$respom=$this->con->query($provera);
		return $respom;
	}
	function createNewlyweds($nameBride,$nameGroom,$lastname,$email)
	{
		$la="INSERT INTO `brideandgroom` (`idBrideAndGroom`, `nameBride`, `nameGroom`, `lastname`, `email`) VALUES (NULL, '$nameBride', '$nameGroom', '$lastname', '$email')";
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
	
	function createWedding($password,$date,$buffet,$BrideAndGroom_idBrideAndGroom)
	{
	 $la="INSERT INTO `wedding` (`idWedding`, `password`, `date`, `buffet`, `BrideAndGroom_idBrideAndGroom`, `Hostess_idHostess`) VALUES (NULL, '$password', '2019-04-02', $buffet,$BrideAndGroom_idBrideAndGroom,NULL)";
	 $res=$this->con->query($la);
	$provera="SELECT * from `wedding` where `password`='$password'";
	$respom=$this->con->query($provera);
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
	
}
?>