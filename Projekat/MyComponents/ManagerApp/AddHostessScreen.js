import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,Dimensions,ImageBackground,TouchableOpacity } from 'react-native';
import {Header,Left,Icon, DatePicker} from 'native-base';
import styles from '../../styles'
import stylesAppFirstPage from '../stylesAppFirstPage';
import FetchConstants from '../../Classes/fetchConstants';
import firebase from 'react-native-firebase';
import RNSmtpMailer from 'react-native-smtp-mailer';
import EMail from '../../Classes/EMail';

export default class AddHostessScreen extends React.Component {

  constructor(){
    super();
    this.state={
      email:"",
      dateAndTime:"",
      name:""
    }
  }
  handleTextChangeId=(newText)=>this.setState({email:newText});
  handleTextChangeName=(newText)=>this.setState({name:newText});
  handleTextChangeDateAndTime=(newText)=>this.setState({dateAndTime:newText});
createHostess=()=>{
  const formData=new FormData();
  formData.append("createHostess",1);
  formData.append("email",this.state.email);
  formData.append("password",this.createPassword());
  formData.append("name",this.state.name);
  formData.append("restaurantId",this.props.navigation.getParam('restaurantId',1111));

  const fetchData={
    method:"post",
    body:formData
  };
 
  fetch(FetchConstants.url+'/Manager.php',fetchData)
  .then((response)=>response.json())
  .then((response)=>{
   if(response==null)
   alert("Hostess not added please check your data");
   else
   {
    alert(response);
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
      
      <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}}>
      <Header style={{display:'flex',flexDirection:'column',backgroundColor:'#fbb0a9'}} >
      <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}} />
      </Header>
      
      <View style={{display:"flex",flexDirection:"column",width:'100%', height: '100%',backgroundColor:'#F1F1F1'}}>
      
         
          <View style={{flex:0.1, display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
          <Text style={{fontFamily:'fantasy',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,textShadowOffset:{width:2,height:2},textShadowRadius:4}}>Kreirajte Hostesu</Text>
          </View>
      
      
      
         <View style={{flex:0.65,display:'flex',flexDirection:'row'}}>
           
         <View style={{flex:1}}></View>
         <View style={{flex:10,display:'flex',borderRadius:25,backgroundColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
          <View style={{flex:10,display:'flex',flexDirection:'column',borderRadius:25}}>
      
         <View style={{flex:6,display:'flex',flexDirection:'column',alignItems:'center'}}>
         <View style={{flex:1}}></View>
         <View style={{flexDirection:'row', display:'flex',alignItems:'center',justifyContent:'center'}}>
         <View style={{flex:0.3}}></View>
           <TextInput placeholder='Hostesa email' style={{flex:1.5,borderBottomColor:'black',borderBottomWidth:2,shadowColor:'pink'}} placeholderTextColor='#fbb0a9' onChangeText={this.handleTextChangeId}></TextInput>
           <View style={{flex:0.3}}></View>
         </View>
           <View style={{flex:1}}></View>
           <View style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center'}}>
           <View style={{flex:0.3}}></View>
          
           <TextInput placeholder='Hostesa ime' style={{flex:1.5,borderBottomColor:'black',borderBottomWidth:2,shadowColor:'pink'}}  placeholderTextColor='#fbb0a9' onChangeText={this.handleTextChangeName}></TextInput>
         
           <View style={{flex:0.3}}></View>
           </View>
           <View style={{flex:1}}></View>
           </View>
           <View style={{flex:0.4}}></View>
           <View style={{flex:1,flexDirection:'row'}}>
           <View style={{flex:0.3,flexDirection:'row'}}></View>
           <View style={{flex:1.5}}><TouchableOpacity style={{flex:1,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.createHostess}><Text style={{color:'white'}}>Kreiraj hostesu</Text></TouchableOpacity></View>
           <View style={{flex:0.3,flexDirection:'row'}}></View>
           </View>
      <View style={{flex:0.7}}></View>
      </View>
        </View>
      <View style={{flex:1}}></View>
      
      </View>
      
       
      
      
      <View style={{flex:0.1,display:'flex',flexDirection:'column',alignItems:'center'}}></View>
      
      
      </View>
      
      
      
      
      </ScrollView>  
    );
  }
}

