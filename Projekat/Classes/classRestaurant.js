export class Restaurant{

    constructor(name,max_members,min_members,id)
    {
        this.name=name;
        this.maxMembers=max_members;
        this.minMembers=min_members;
        //this.id=id

         this.waiterArray=[];
         this.hostessArray=[];
         this.tableArray=[];
         this.desertsArray=[];
         this.starterArray=[];
         this.mainCourseArray=[];
         this.weddingArray=[];
         this.manager=null;
         //izmeniniti fje

    }
    addManager(manager){
        this.manager=manager;
    }
    addWaiter(waiter){
        this.waiters.push(waiter);
    }
    addHostess(hostess){
        this.hostesses.push(hostess);
    }
    addTables(table){
        this.tables.push(table);
    }
    addDesert(desert){
        this.deserts.push(desert);
    }
    addStarter(starter){
        this.starters.push(starter);
    }
    addMainCourse(mainCourse){
        this.mainCourses.push(mainCourse)
    }
    addWedding(wedding){
        this.weddings.push(wedding);
    }
    set name(ime){
        this.name=ime;
    }
    get name(){
        return this.name;
    }
    set minMembers(x){
        this.minMembers=x;
    }
    get minMembers(){
        return this.minMembers;
    }
    set maxMembers(x){
        this.maxMembers=x;
    }
    get maxMembers(){
        return this.maxMembers;
    }
}