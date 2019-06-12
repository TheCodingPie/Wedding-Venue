<?php
class TableWedding{
    public $shape;
    public $capacity;
    public $wedding;
    public $idTable;
    public $numberTable;
    public $numberPeople;
    public $x;
    public $y;
    public function __construct($shape,$capacity,$wedding,$idTable,$numberTable,$numberPeople,$x,$y)
    {
        $this->shape=$shape;
        $this->capacity=$capacity;
        $this->wedding=$wedding;
        $this->idTable=$idTable;
        $this->numberTable=$numberTable;
        $this->numberPeople=$numberPeople;
        $this->x=$x;
        $this->y=$y;
    }
   

}
?>