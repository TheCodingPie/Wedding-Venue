import RNSmtpMailer from "react-native-smtp-mailer";

export default class EMail {
  static send=(email,sifra,poruka)=>{
    RNSmtpMailer.sendMail({
      mailhost: "smtp.gmail.com",
      port: "465",
      ssl: true,
      username:"jovananikolicdd98@gmail.com",
      password:"olalaelfak",
      from: "jovananikolicdd98@gmail.com",
      recipients: email,
      subject: "Restoran je kreirao Vas profil",
      htmlBody: "<h1>Vas profil je: "+poruka+"</h1><p>Vasa sifra je "+sifra+"</p><p>@SJP Team</p>",
      attachmentPaths: [],
      attachmentNames: [],
      attachmentTypes: []
    }).then(success => {
  })
    .catch(err => alert(err));
  
  }
    
}