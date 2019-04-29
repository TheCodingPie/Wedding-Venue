import React from 'react';
import { StyleSheet, Text, View,TextInput,CheckBox } from 'react-native';
import {Header,Left,Icon, DatePicker} from 'native-base';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';
import RNSmtpMailer from "react-native-smtp-mailer";
import { TouchableOpacity } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';


  
  
export default class CreateWeddingScreen extends React.Component {
  
  constructor(){
    super();

      this.state={
      id:"",
      cb:false,
      buffet:0,
      date:"",
      lastname:"",
      email:"",
      nameBride:"",
      nameGroom:"",
    }
  }
handleTextChangeNameGroom=(newText)=>this.setState({nameGroom:newText});
handleTextChangeNameBride=(newText)=>this.setState({nameBride:newText});
handleTextChangeLastname=(newText)=>this.setState({lastname:newText});
handleTextChangeEmail=(newText)=>this.setState({email:newText});
handleDateChange=(newText)=>this.setState({date:newText});
cbChange=()=>{
  this.setState({cb:!this.state.cb});
  if(this.state.cb)
  this.setState({buffet:1});
  else
  this.setState({buffet:0});
};
send=()=>{
  RNSmtpMailer.sendMail({
    mailhost: "smtp.gmail.com",
    port: "465",
    ssl: true,
    username:"jovananikolicdd98@gmail.com",
    password:"olalaelfak",
    from: "jovananikolicdd98@gmail.com",
    recipients: "jovananikolicdd98@gmail.com",
    subject: "subject",
    htmlBody: "<h1>J is a tatla</h1><p>body</p>",
    attachmentPaths: [],
    attachmentNames: [],
    attachmentTypes: []
  }).then(success => {this.props.navigation.navigate('ManagerTabNavigator')
alert('lala');
})
  .catch(err => alert(err));

}

createBrideAndGroom=()=>{
  
  const formData=new FormData();
  formData.append("createBrideAndGroom",1);
  formData.append("lastname",this.state.lastname);
  formData.append("nameBride",this.state.nameBride);
  formData.append("nameGroom",this.state.nameGroom);
  formData.append("email",this.state.email);

  const fetchData={
    method:"post",
    body:formData
  };
 
  fetch(FetchConstants.url+'/Manager.php',fetchData)
  .then((response)=>response.json())
  .then((response)=>{
   if(response==null)
   alert("BrideAndGroomNotAdded");
   else
   {
    this.setState({id:response});
    alert(this.state.id);
    alert("BrideAndGroomAdded");
   }
  })
  .catch((error)=>{alert(error);});
  
}

createWedding=()=>{
  const formData=new FormData();
  formData.append("createWedding",1);
  formData.append("password",this.createPassword());
  formData.append("date",this.state.date);
  formData.append("buffet",this.state.buffet);
  formData.append("BrideAndGroom_idBrideAndGroom",this.state.id);

  const fetchData={
    method:"post",
    body:formData
  };
 
  fetch(FetchConstants.url+'/Manager.php',fetchData)
  .then((response)=>response.json())
  .then((response)=>{
   if(response==null)
   alert("Wedding not created");
   else
   {
    alert("Wedding created");
   }
  })
  .catch((error)=>{alert(error);});
}
createPassword(){
  var length = 8;
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let n=charset.length;
  retVal = "";
  for (var i = 0; i < length; i++) {
  retVal += charset.charAt(parseInt(Math.random() * n));
  }
  return retVal;
  
}


render() {
    return (
     
        
  
<View style={styles.form}>
          <Text>forma za kreiranje vencanja</Text>
          <TextInput placeholder='Ime mlade' style={backgroundColor='#edd7f4'} placeholderTextColor='white' 
          onChangeText={this.handleTextChangeNameBride}></TextInput>
          <TextInput placeholder='Ime mladozenje' style={backgroundColor='#edd7f4'} placeholderTextColor='white'
          onChangeText={this.handleTextChangeNameGroom}></TextInput>
          <TextInput placeholder='Prezime' style={backgroundColor='#edd7f4'} placeholderTextColor='white'
          onChangeText={this.handleTextChangeLastname}></TextInput>
          <TextInput placeholder='Email' style={backgroundColor='#edd7f4'} placeholderTextColor='white'
          onChangeText={this.handleTextChangeEmail}></TextInput>
          <TouchableOpacity  onPress={this.createBrideAndGroom} ><Text>KreirajMladence</Text></TouchableOpacity>
          <Text>Kreiranje samog venacanja to bi trebalo na slledecoj stranici</Text>
          <CheckBox value={this.state.cb} onChange={this.cbChange}/>
          <DatePicker placeholder='Date and Time' onDateChange={this.handleDateChange}></DatePicker>
          <TouchableOpacity  onPress={this.createWedding} ><Text>KreirajVencanje</Text></TouchableOpacity>
</View>
  


       
      
    );
  }
}

