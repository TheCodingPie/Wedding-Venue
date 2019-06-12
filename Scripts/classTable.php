<?php
class Table{
    public $shape;
    public $capacity;
    public $Restaurant_id;
    public $id;
    public function __construct($shape,$table_capacity,$Restaurant_id,$id)
    {
        $this->shape=$shape;
        $this->capacity=$table_capacity;
        $this->Restaurant_id=$Restaurant_id;
        $this->id=$id;
    }
   

}
?>
