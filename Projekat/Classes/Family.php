<?php
public class Family{
    private $name;
    private $lastname;
    private $numberTable;
    private $idTable;
    private $id;
    public function __construct($name,$lastname,$numberTable,$idTable,$id)
    {
        $this->name=$name;
        $this->lastname=$lastname;
        $this->numberTable=$numberTable;
        $this->id=$id;
        $this->idTable=$idTable;
    }
   

}
?>