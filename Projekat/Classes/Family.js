export class Family{

    constructor(family_password,family_lastname,family_number_of_invited)
    {
        this.password=family_password;
        this.lastname=family_lastname;
        this.numberOfInvited=family_number_of_invited;
        this.memberArray=[];//sadzri one inicijalno pozvane i na kraju samo one koji dolaze
    }

    addMember(member)
    {
        if(this.numberOfInvited>this.memberArray.length)
        {
        this.memberArray.push(member);
            return true;
        }
        else
        {
            return false;
        }
    }
    removeMember(member)
    {
       let index=this.family_array_members.indexOf(member);
        if(index > -1) 
        {
        this.family_array_members.splice(index,1);
         number_added--;
        }
    }
    get numberComing(){
        return this.memberArray.length;
    }

}