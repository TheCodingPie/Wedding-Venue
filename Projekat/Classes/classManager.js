import RNSmtpMailer from "react-native-smtp-mailer";
export default class Manager{
    constructor(manager_name,manager_lastname,email,id)
    {
        this.id=id;
        this.name=manager_name;
        this.lastname=manager_lastname;
        this.password=this.createPassword();
        this.email=email;
        this.sendEmail(this.email,this.password,this.name);
        const formData=new FormData();
        formData.append("id",id);
        formData.append("password",password);

        const fetchData={
         method:"post",
         body:formData
        };
     
       fetch('http://192.168.0.19/Scripts/Manager.php',fetchData)
       .then((response)=>response.text())
       .then((response)=>{
       
        if(response=='true')
        return true;
       else{
         alert('Nevalidno');
        return false;
       }
      })
      .catch((error)=>alert(error));

    }
  sendEmail(email,password,name)
  {
    RNSmtpMailer.sendMail({
      mailhost: "smtp.gmail.com",
      port: "465",
      ssl: true,
      username:"jovananikolicdd98@gmail.com",
      password:"olalaelfak",
      from: "jovananikolicdd98@gmail.com",
      recipients: email,
      subject: "subject",
      htmlBody: "<h1>Dear Mrs/Mr "+name+" You have created a Manager account</h1><p>Your password is "+password+".\nThank you so much for using WV mobile application.\nYour SJP team   </p>",
      attachmentPaths: [],
      attachmentNames: [],
      attachmentTypes: []
    }).then(success => {this.props.navigation.navigate('ManagerTabNavigator')
  alert('lala');
  })
    .catch(err => alert(err));
  

}
  

  createPassword()
  {
      var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
      return retVal;
  }
  return retVal;
    }
  static login(password,id)
  {
    const formData=new FormData();
    formData.append("id",id);
    formData.append("code",password);
    const fetchData={
      method:"post",
      body:formData
    };
   
    fetch('http://192.168.0.19/Scripts/man.php',fetchData)
    .then((response)=>response.text())
    .then((response)=>{
     return response;
     
    })
    .catch((error)=>{return 0;});
   
  }

    static changePassword(oldpassword,newpassword,id)
    {
        if(this.password===oldpassword)
        {
            this.password=newpassword;
     
                const formData=new FormData();
                formData.append("change",1);
                formData.append("id",id);
                formData.append("newpassword",newpassword);
                const fetchData={
                  method:"post",
                  body:formData
                };
               
                fetch('http://192.168.0.19/Scripts/Manager.php',fetchData)
                .then((response)=>response.text())
                .then((response)=>{
                 
                  if(response=='true')
                  return true;
                 else{
                  return false;
                 }
                })
                .catch((error)=>alert(error));
                          
        }
        else
        {
            return "Nevalidan je password";
        }
    }
    static returnManager(password,id)
    {
      const formData=new FormData();
                formData.append("return",1);
                formData.append("id",id);
                formData.append("password",password);
                const fetchData={
                  method:"post",
                  body:formData
                };
               
                fetch('http://192.168.0.19/Scripts/Manager.php',fetchData)
                .then((response)=>response.text())
                .then((response)=>{
                 
                  if(response)
                  return response;
                 else{
                  return null;
                 }
                })
                .catch((error)=>alert(error));
    }
    
}