<?php
public class Table{
    private $shape;
    private $capacity;
    private $wedding;
    private $id;
    public function __construct($shape,$table_capacity,$wedding,$id)
    {
        $this->shape=$shape;
        $this->capacity=$table_capacity;
        $this->wedding=$wedding;
        $this->id=$id;
    }
   

}
?>