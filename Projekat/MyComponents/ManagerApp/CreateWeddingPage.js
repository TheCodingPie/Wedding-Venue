import React from 'react';
import { StyleSheet, Text, View,TextInput,CheckBox,ImageBackground,Dimensions,TouchableOpacity, ScrollView,Alert } from 'react-native';
import {Header,Left,Icon, DatePicker} from 'native-base';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';
import RNSmtpMailer from "react-native-smtp-mailer";

import FetchConstants from '../../Classes/fetchConstants';
import LinearGradient from 'react-native-linear-gradient';


  
  
export default class CreateWeddingScreen extends React.Component {
  
  constructor(){
    super();

      this.state={
      lastname:"",
      email:"",
      nameBride:"",
      nameGroom:"",
      id:""
    }
  }
  static navigationOptions={

    header:null
  }
handleTextChangeNameGroom=(newText)=>this.setState({nameGroom:newText});
handleTextChangeNameBride=(newText)=>this.setState({nameBride:newText});
handleTextChangeLastname=(newText)=>this.setState({lastname:newText});
handleTextChangeEmail=(newText)=>this.setState({email:newText});

/*send=()=>{
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

}*/


createBrideAndGroom=()=>{


  if(this.state.lastname=="" || this.state.nameBride==""|| this.state.nameGroom==""|| this.state.email=="" )
  {
    Alert.alert("Obaveštenje","Proverite unete podatke.");
    this.setState({nameGroom:"",
  nameBride:"",
  lastname:"",
  email:"",
  
  })
    return;
  }
  if(this.state.email.indexOf("@gmail.com")==-1)
  {
    Alert.alert("Obaveštenje","Unesite validan gmail.");
    this.setState({nameGroom:"",
    nameBride:"",
    lastname:"",
    email:"",
    
    })
    return;
  }
  let pom=this.state.email;
  
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
   if(response==null){
   Alert.alert("Obaveštenje","Došlo je do greške prilikom kreiranja.");
   this.setState({nameGroom:"",
   nameBride:"",
   lastname:"",
   email:"",
   
   });
   }
   else
   {
   
  // alert(this.state.id);
    Alert.alert("Obaveštenje","Dodali ste mladence");
    this.props.navigation.navigate('CreateWeddingSecondPage',{id:response,email:pom})
   }
  
  })
  .catch((error)=>{alert(error);});

}


btnsledeca=()=>{
  this.props.navigation.navigate('CreateWeddingSecondPage',{id:this.state.id});//bez screen
 
}

render() {
    return (
      <ScrollView contentContainerStyle={{ height:Dimensions.get('window').height*0.9}}>
      <ImageBackground source={require('../Images/marble.jpg')} style={{width: '100%', height: '100%', display:"flex",flexDirection:"column"}}>
      <View style={{display:'flex',flexDirection:'column',flex:1}}>
        <View style={{flex:1}}></View>
        <View style={{display:'flex',flexDirection:'row',flex:15}}>
        <View style={{flex:1}}></View>
        <LinearGradient start={{x: 0, y: 0}} end={{x:0 , y: 1}} colors={['white','#F1F1F1']} style={{flex:10,display:'flex',flexDirection:'row',borderRadius:20,borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
        <View style={{flex:1}}></View>
        <View style={{flex:5,display:'flex',flexDirection:'column'}}>
        <View style={{flex:2, display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
        <Text style={{fontFamily:'news701i',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,alignItems:'center'}}>Kreiraj vencanje</Text>
        </View>
          <View style={{flex:1}}></View>
          <View style={{flex:2}}>
          <TextInput value={this.state.nameBride} placeholder='Ime mlade' style={{flex:1.5,borderBottomColor:'black',
                              borderBottomWidth:2,shadowColor:'pink'}} placeholderTextColor='#fbb0a9'
          onChangeText={this.handleTextChangeNameBride}></TextInput></View>
          <View style={{flex:2}}></View>
          <View style={{flex:2}}>
          <TextInput value={this.state.nameGroom} placeholder='Ime mladozenje' style={{flex:1.5,borderBottomColor:'black',
                              borderBottomWidth:2,shadowColor:'pink'}} placeholderTextColor='#fbb0a9'
          onChangeText={this.handleTextChangeNameGroom}></TextInput>
          </View>
          <View style={{flex:2}}></View>
          <View style={{flex:2}}><TextInput value={this.state.lastname} placeholder='Prezime' style={{flex:1.5,borderBottomColor:'black', borderBottomWidth:2,shadowColor:'pink'}}
           placeholderTextColor='#fbb0a9' onChangeText={this.handleTextChangeLastname}></TextInput></View>
          <View style={{flex:2}}></View>
          <View style={{flex:2}}><TextInput value={this.state.email} placeholder='Gmail' style={{flex:1.5,borderBottomColor:'black',
                              borderBottomWidth:2,shadowColor:'pink'}} placeholderTextColor='#fbb0a9'
          onChangeText={this.handleTextChangeEmail}></TextInput></View>
          <View style={{flex:2}}></View>

          <View style={{flex:2 }}>
       
            <TouchableOpacity  onPress={this.createBrideAndGroom}style={{flex:1,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}}  ><Text style={{color:'white',fontSize:20}}>Kreiraj mladence</Text></TouchableOpacity>
          
          
            </View>
          <View style={{flex:2}}></View>
        </View>
        <View style={{flex:1}}></View>
        
        
        </LinearGradient>
        <View style={{flex:1}}></View>
        </View>
        <View style={{flex:1}}></View>
      </View> 
      </ImageBackground>
      </ScrollView> 
  

  


       
      
    );
  }
}

