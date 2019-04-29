import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon} from 'native-base';

import {Calendar} from 'react-native-calendars';


let markedDates=[];
let newDaysObject= {};

export default class FreeDaysScreen extends React.Component {
  
  constructor(){
    super();  
    this.state={
      isLoading:false,
      dateSource:[],
      markedD:newDaysObject
    }
       
   returnMarkedDates=(markedDates)=>{ markedDates.forEach((day) => {
      newDaysObject = {
        ...newDaysObject,
        [day]: {
          selected: true,
          marked: true
        }
      };
    }); 
    this.setState({markedD:newDaysObject});
  }
  }  
  componentDidMount()
{
  const formData=new FormData();
      formData.append("getFreeDays",1);
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch("http://192.168.0.14/Scripts/Manager.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
        alert(response);
       this.setState({
         isLoading:false,
         dateSource:response
       })
       returnMarkedDates(response);
      })
      .catch((error)=>{alert(error);});
}

   onPressDate(day)
  {
    markedDates.push(day);
    /*markedDates.forEach((day) => {
      newDaysObject = {
        ...newDaysObject,
        [day]: {
          selected: true,
          marked: true
        }
      };
    });  */
    newDaysObject = {
      ...newDaysObject,
      [day]: {
        selected: true,
        marked: true
      }}; 

    this.setState({ markedD: newDaysObject});

  }
  
   render() {  

 




    return (
      <View style={styles.container} >
      <Header>
    <Left>
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />

   </Left>
  </Header>


   <View style={styles.calendar}>
   <Calendar
      onDayPress={(day)=>{this.onPressDate(day.dateString)}}
      markedDates={this.state.markedD}
       theme={{  backgroundColor: '#ffffff'}}
       />
       
   </View>
</View>   
    );
    
  }
}

//za drawer navigator se razlikuju stilovi 
/*
const styles = StyleSheet.create({
    form: {
        flex: 1,
        
      },

     textinput:{
      flex:0.6,
      backgroundColor: '#edd7f4',
     
      justifyContent: 'center',
      height:40,
      marginLeft:10,
      },
      text:{
        flex:0.3,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        height:20,
       },
      container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
        backgroundColor: '#ecb3ff',
      },
     
});*/
const styles=StyleSheet.create({

  container:{
    flex: 1,
  },
  calendar:{
    flex:1,
    borderTopWidth: 1,  
    borderBottomWidth:1,
    height:'100%',
    backgroundColor: 'green',
    

  },
  heder:{
    flex:0.5
  }


})