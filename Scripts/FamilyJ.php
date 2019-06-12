<?php
class FamilyJ{

   
    public  $lastname;
    public  $numOfMembers;
    public  $guestType;
    public  $coming;
    public  $id;
     public function __construct($lastname,$numOfMembers,$guestType,$coming,$id)
    {
        $this->lastname=$lastname;
        $this->numOfMembers=$numOfMembers;
        $this->guestType=$guestType;
        $this->coming=$coming;
        $this->id=$id;
    }

   

}
?>