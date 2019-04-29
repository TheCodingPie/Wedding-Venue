<?php
class DbConnect{
    private $con;
    function __construct(){

    }
    function connect(){
        include_once dirname(__FILE__).'./constants.php';
        $this->con=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
            if ($this->con->connect_errno) {
        print ("Connection error (" . $this->con->connect_errno . "): $con->connect_error");
			}
        return $this->con;
    }
}