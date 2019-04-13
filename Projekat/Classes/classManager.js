export default class Manager{
    constructor(manager_name,manager_lastname)
    {
        this.name=manager_name;
        this.lastname=manager_lastname;
        this.password=null;

    }

    changePassword(old_password,new_password)
    {
        if(this.manager_password===old_password)
        {
            this.manager_password=new_password;
        }
        else
        {
            //neka obrada
        }
    }
    
}