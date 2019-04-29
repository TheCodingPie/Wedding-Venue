

import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';
import {Header,Left,Icon, DatePicker} from 'native-base';
import styles from '../../styles'
import stylesAppFirstPage from '../stylesAppFirstPage';
import FetchConstants from '../../Classes/fetchConstants';

export default class AddHostessScreen extends React.Component {

  constructor(){
    super();
    this.state={
      id:"",
      dateAndTime:"",
      name:""
    }
  }
  handleTextChangeId=(newText)=>this.setState({id:newText});
  handleTextChangeName=(newText)=>this.setState({name:newText});
  handleTextChangeDateAndTime=(newText)=>this.setState({dateAndTime:newText});
createHostess=()=>{
  const formData=new FormData();
  formData.append("createHostess",1);
  formData.append("id",this.state.id);
  formData.append("password",this.createPassword());
  formData.append("name",this.state.name);
  formData.append("dateAndTime",this.state.dateAndTime.toString());
  formData.append("restaurantId",this.props.navigation.getParam('restaurantId',1111));

  const fetchData={
    method:"post",
    body:formData
  };
 
  fetch(FetchConstants.url+'/Manager.php',fetchData)
  .then((response)=>response.json())
  .then((response)=>{
   if(response)
   alert("Hostess added");
   else
   {
    alert("Hostess not added please check your data");
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
      <View>
      <View style={styles.flex1} >
      <Header>
    <Left>
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />

  </Left>
</Header>
</View>

<View>
       <Text>Create Hostess</Text>
       <TextInput placeholder='Hostess id' style={stylesAppFirstPage.containerTextInput} placeholderTextColor='black' onChangeText={this.handleTextChangeId}></TextInput>
       <TextInput placeholder='Hostess name' style={stylesAppFirstPage.containerTextInput} placeholderTextColor='black' onChangeText={this.handleTextChangeName}></TextInput>
       <DatePicker placeholder='Date and Time' style={stylesAppFirstPage.containerTextInput} placeholderTextColor='black' onDateChange={this.handleTextChangeDateAndTime}></DatePicker>
       <TouchableOpacity onPress={this.createHostess} style={stylesAppFirstPage.containerTO}><Text>Create Hostess</Text></TouchableOpacity>
</View>  
</View>
    );
  }
}

