<?php
class TableStarter{
 
    public $starter;
    public $idTable;
    public $idMember;

    public function __construct($idTable,$starter,$idMember)
    {
		$this->starter=$starter;
        $this->idTable=$idTable;
        $this->idMember=$idMember;
    }
   

}
?>