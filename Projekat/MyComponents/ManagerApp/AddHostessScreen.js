import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';
import {Header,Left,Icon, DatePicker} from 'native-base';
import styles from '../../styles'
import stylesAppFirstPage from '../stylesAppFirstPage';
import FetchConstants from '../../Classes/fetchConstants';

export default class AddHostessScreen extends React.Component {
  
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
    alert("uneli ste hostesu");
    //logika da se unese u bazu

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

