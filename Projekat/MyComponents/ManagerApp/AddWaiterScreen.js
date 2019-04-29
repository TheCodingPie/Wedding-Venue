import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon, DatePicker} from 'native-base';
import styles from '../../styles'
import stylesAppFirstPage from '../stylesAppFirstPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';

export default class AddWaiterScreen extends React.Component {
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
  formData.append("createWaiter",1);
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
   if(response==null)
   alert("Waiter not added please check your data");
   else
   {
    alert("Waiter added");
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
      <View style={styles.flex1} >
      <Header>
    <Left>
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />

  </Left>
</Header>


<View >
       <Text style={color='red'}>Kreirajte Konobara</Text>
       <TextInput placeholder='Waiter' style={color='#edd7f4'} placeholderTextColor='black' onChangeText={this.handleTextChangeId}></TextInput>
       <TextInput placeholder='Waiter name' style={color='#edd7f4'}  placeholderTextColor='black' onChangeText={this.handleTextChangeName}></TextInput>
       <DatePicker placeHolder='Date and Time' style={color='#edd7f4'}  placeholderTextColor='black' onDateChange={this.handleTextChangeDateAndTime}></DatePicker>
       <TouchableOpacity onPress={this.createHostess} style={stylesAppFirstPage.containerTO}><Text>Create Hostess</Text></TouchableOpacity> 
</View>
</View>   
    );
  }
}
