import FetchConstants from "./fetchConstants";

export class Member{

    constructor(member_name,member_family)
    {
        this.name=member_name;
        this.family=member_family;
        this.comming=false;
    }
    static async login(email,pass){
        //this.props.navigation.navigate('UserAppSecondPage')
       
  
        const formData=new FormData();
        formData.append("login",1);
        formData.append("email",email);
        formData.append("password",pass);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
       return response;
        })
        .catch((error)=>{alert(error);});
    }
    
}