<?php
class Meal{

    public  $name;
    public  $vegeterian;
    public  $price;
  
     public function __construct($name,$vegeterian,$price)
    {
        $this->vegeterian=$vegeterian;
        $this->price=$price;
        $this->name=$name;
      
    }

   

}
?>