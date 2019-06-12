import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
//import {Left,Icon} from 'native-base';
import {Header, Icon,Left} from 'native-base';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CalendarList,LocaleConfig} from 'react-native-calendars';
import FetchConstants from '../../Classes/fetchConstants';



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
    LocaleConfig.locales['sr'] = {
      monthNames: ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
      monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
      dayNames: ['Ponedeljak','Utorak','Sreda','Mercredi','Jeudi','Vendredi','Samedi'],
      dayNamesShort: ['Pon','Uto','Sre','Cet','Pet','Sub','Ned'],
      today: 'Danas\'hui'
    };   
    //PAVLE
    //dodati onDayLongPress={(day) => {na kreiraj Vencanje}}
    LocaleConfig.defaultLocale = 'sr';
   returnMarkedDates=(markedDates)=>{ markedDates.forEach((day) => {
      newDaysObject = {
        ...newDaysObject,
        [day]: {
          selected: true,
          marked: true,
          selectedColor:'#49beb7'
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
     
      fetch(FetchConstants.url+"/Manager.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{

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

 


   // <View >

    return (
      <View style={styles.container} >
     
       <Header style={{flexDirection:'column',backgroundColor:'#fbb0a9'}} >
     
       
      <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}}/>
    
     
      </Header>
   



   <CalendarList
       pastScrollRange={1}
      futureScrollRange={24}
       scrollEnabled={true}
      onDayPress={(day)=>{this.onPressDate(day.dateString)}}
      markedDates={this.state.markedD}
      theme={{
        calendarBackground: 'white',
        textSectionTitleColor: '#B23242',// ovo je naziv dana
        dayTextColor: 'black',//brojka dana
        todayTextColor: '#B23242',//danasnji dan
        selectedDayTextColor: 'white',
        monthTextColor: '#B23242',
        indicatorColor: 'red',// ne znam sta je 
        selectedDayBackgroundColor: '#fbb0a9',
        textDayHeaderFontSize: 16,//font dana
        textMonthFontSize: 25,
        
        
      
      }}
       />
       
  
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
    backgroundColor: '#ddc6ad',
    

  },
  heder:{
    flex:0.5
  }


})
