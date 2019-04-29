
export default class Hostess{
    constructor(hostess_id,hostess_name,hostess_lastname, hostess_password)
    {
        this.id=hostess_id;
        this.name=hostess_name;
        this.lastname=hostess_lastname;
        this.password=hostess_password;
        //this.array_wedding= {};
    }

    static createPassword(){
        var length = 8;
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let n=charset.length;
        retVal = "";
        for (var i = 0; i < length; i++) {
        retVal += charset.charAt(parseInt(Math.random() * n));
        }
        return retVal;
        
      }

    

}