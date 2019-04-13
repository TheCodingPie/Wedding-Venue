export class Wedding{

    constructor(newlyweds,wedding_id,wedding_number_of_member,wedding_date)
    {
         this.newlyweds=newlyweds;
         this.id=wedding_id;
         this.numberOfGuests=wedding_number_of_member;
         //promeni u bazi da se zove guests
         this.date=wedding_date;
         this.password="";      


         this.waiterArray=[];
         this.hostess=null;
         this.tableArray=[];
         this.desertArray=[];
         this.starterArray=[];
         this.mainCourseArray=[];
         //izmeniti u bazi za jelovnik itd;
         this.familyArray=[];
    }

    setPassword(newPassword)
    {
            this.password=newPassword;
    }
    checkPassword(password){
        return this.password===password;
    }
    
    addTable(table)
    {
     this.tableArray.push(table);

    }

    addDesert(desert)
    {
        this.desertArray.push(desert);

    }
    addStarter(starter)
    {
        this.starterArray.push(starter);

    }
    addMainCourse(mainCourse)
    {
        this.mainCourseArray.push(mainCourse);

    }
    addFamily(family)
    {
        this.familyArray.push(family);

    }


    


}