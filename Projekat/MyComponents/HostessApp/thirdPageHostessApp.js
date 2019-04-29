import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import Draggable from 'react-native-draggable';
import Table from '../../Classes/classTable';
import styles from '../../styles'
//FLOOR PLAN

//wedid-ju se pristupa preko this.props.navigation.state.params.wedid
//famid-ju se pristupa preko this.props.navigation.state.params.famid

var table1=new Table('circle',10,1421,1,340,500,7);//ekran za telefon je za x=340 za y=530
var table2=new Table('circle',11,1421,2,0,50,10);
var table3=new Table('circle',12,1421,3,200,140,12);

var tablespom=[];//OVDE TREBA IZ BAZE DA SE STAVE STOLOVI


tablespom.push(table1);
tablespom.push(table2);
tablespom.push(table3);
var tablestorender=[];
var arr=[];

tablespom
.forEach((table,index)=>
  tablestorender
  .push( <Draggable key={index} ref={(draggable) => {arr[index] = draggable;}} longPressDrag={()=>updateXanY(arr[index].state._value.x,arr[index].state._value.y,table.id)}  pressDrag={()=>prikaziGoste(table.id)/*alert(arr[index].state._value.x+" "+arr[index].state._value.y)*/} reverse={false} renderColor='black' renderShape={table.shape} x={table.x} y={table.y} renderText={table.peopleontable} />));


  export default class ThirdPageScreenHostessApp extends React.Component {
 
 
  static navigationOptions={

    header:null
  }
    
    render() {
  return (
    <View style={{backgroundColor: 'blue', flex: 1}} >
         
    {tablestorender}
   
    </View>
      );
    }
  }


  