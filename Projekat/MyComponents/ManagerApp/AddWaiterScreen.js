import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon, DatePicker} from 'native-base';
import styles from '../../styles'
import stylesAppFirstPage from '../stylesAppFirstPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';

export default class AddWaiterScreen extends React.Component {
<<<<<<< HEAD
  
  constructor(){
    super()
    this.state={
      name:"",
      lastname:"",
      code:""

      }

 }

 handleChangeTextName=(newText)=>this.setState({name:newText});
 handleChangeTextLastname=(newText)=>this.setState({lastname:newText});
 handleChangeTextCode=(newText)=>this.setState({code:newText});

 btnUnesiPress=()=>{
    alert("uneli ste konobara");
    //logika da se unese u bazu

}
=======
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
>>>>>>> master

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


<<<<<<< HEAD
<View style={styles.form} >
           <View style={styles.container}> 
                <Text style={styles.text}>Unesite ime:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextName} /> 
            </View>
            <View style={styles.container}> 
                <Text style={styles.text}>Unesite prezime:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextLastname} /> 
             </View>
             <View style={styles.container}> 
                <Text style={styles.text}>Unesite sifru:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextCode} /> 
             </View>


           <Button title='Unesi' color="#260033" onPress={this.btnUnesiPress}>  </Button>
           
     </View>
  </View>
=======
<View >
       <Text style={color='red'}>Kreirajte Konobara</Text>
       <TextInput placeholder='Waiter' style={color='#edd7f4'} placeholderTextColor='black' onChangeText={this.handleTextChangeId}></TextInput>
       <TextInput placeholder='Waiter name' style={color='#edd7f4'}  placeholderTextColor='black' onChangeText={this.handleTextChangeName}></TextInput>
       <DatePicker placeHolder='Date and Time' style={color='#edd7f4'}  placeholderTextColor='black' onDateChange={this.handleTextChangeDateAndTime}></DatePicker>
       <TouchableOpacity onPress={this.createHostess} style={stylesAppFirstPage.containerTO}><Text>Create Hostess</Text></TouchableOpacity> 
</View>
</View>   
>>>>>>> master
    );
  }
}
