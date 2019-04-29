<?php
public class Table{
    private $shape;
    private $capacity;
    private $wedding;
    private $waiter;
    private $family;
    private $numberOfPeople;
    private $people;
    public function __construct($shape,$table_capacity,$wedding)
    {
        $this->shape=$shape;
        $this->capacity=$table_capacity;
        $this->wedding=$wedding;
        $this->waiter=null;
        $this->families=array();
        $this->numberOfPeople=0;
        $this->people=array();
    }
    public function addWaiter(Waiter $waiter)
    {
        $this->waiter=$waiter;
    }
    public function addFamily(Family $family)
    {
        $this->families[]=$family;
    }
    public function addPerson(Member $person)
    {
        $this->people[]$person;
        $this->numberOfPeople++;
    }
    public getNumberOfPeople(){
        return $this->numberOfPeople;
    }

}
?>