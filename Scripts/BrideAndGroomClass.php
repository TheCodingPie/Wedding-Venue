<?php
class BrideAndGroom{
    public $id;
    public $nameBride;
    public $nameGroom;
    public $lastname;
    public $email;
    public $date;
    public $idWedding;
    public function __construct($id,$nameBride,$nameGroom,$lastname,$email,$date,$idWedding)
    {
        $this->id=$id;
        $this->nameBride=$nameBride;
        $this->nameGroom=$nameGroom;
        $this->lastname=$lastname;
        $this->email=$email;
        $this->date=$date;
        $this->idWedding=$idWedding;
    }
   

}
?>