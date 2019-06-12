<?php
class Family{
    public $name;
    public $lastname;
    public $numberTable;
    public $idTable;
    public $id;
    public $coming;
    public function __construct($name,$lastname,$numberTable,$idTable,$id,$coming)
    {
        $this->name=$name;
        $this->lastname=$lastname;
        $this->numberTable=$numberTable;
        $this->idTable=$idTable;
        $this->id=$id;
        $this->coming=$coming;
    }
   

}
?>