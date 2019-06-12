<?php
class classMember{

   
    public  $lastname;
    public  $coming;
    public  $name;
    public  $email;
    public  $idMember;
    public  $starter;
    public  $main;
    public  $desert;
    public  $idWedding;
    public  $familyId;
    public  $waiterId;
    public  $idTable;
    public  $guestType;
    public  $priceRange;
    public  $date;
     public function __construct($idMember,$email,$name,$coming,$starter,$main,$desert,$idWedding,$familyId,$waiterId,$idTable,$guestType,$priceRange,$date)
    {
        $this->idMember=$idMember;
        $this->email=$email;
        $this->name=$name;
        $this->coming=$coming;
        $this->starter=$starter;
        $this->main=$main;
        $this->desert=$desert;
        $this->idWedding=$idWedding;
        $this->familyId=$familyId;
        $this->waiterId=$waiterId;
        $this->idTable=$idTable;
        $this->guestType=$guestType;
        $this->priceRange=$priceRange;
        $this->date=$date;
    }

   

}
?>