<?php
class TableFamily{
    public $x;
	public $y;
    public $lastname;
    public $numberTable;
    public $idTable;
    public $id;
    public function __construct($x,$y,$lastname,$numberTable,$idTable,$id)
    {
        $this->x=$x;
		$this->y=$y;
        $this->lastname=$lastname;
        $this->numberTable=$numberTable;
        $this->id=$id;
        $this->idTable=$idTable;
    }
   

}
?>