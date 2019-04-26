import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon} from 'native-base';
import styles from '../../styles'
import Draggable from 'react-native-draggable';
import Table from '../../Classes/classTable';
function prikaziGoste(tableid)
{
//iz baze se vuku ime za sto sa id-om
  //alert(tableid);

}
function updateXanY(newX,newY,tableid)
{
//ulazi se kad se duze drzi prst na stolu--long press

//alert(newX+" "+newY+" "+tableid);
//newX i newY su offset u odnosu na prethodno x i y znaci nova vrednost za x i y koja se pamti u bazi je
/*
npr table je sto koji je vracen iz baze sa tableid-om

  table.x+=newX
  table.y+=newY

i ide update DB(table)
*/
}
var table1=new Table('circle',10,1421,1,0,0,7);//ekran za telefon je za x=340 za y=530
var table2=new Table('circle',11,1421,2,0,50,10);
var table3=new Table('circle',12,1421,3,100,100,12);

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


export default class FloorPlanScreen extends React.Component {
  
  constructor(){
    super();
    this.state={
        form:true,
        firstPlan:false,//60
        secondPlan:false,//100
        thirdPlan:false,//150
        
    }
  }
   render() {

    if(this.state.form==true)

      return(
        <View style={styles.form} >
           
                <Text style={styles.text}>Unesite broj gostiju:</Text>
                <Button title='60' color="#260033" onPress={()=>this.setState({  firstPlan:true,form:false })}>  </Button>
                <Button title='100' color="#260033" onPress={()=>this.setState({   secondPlan:true,form:false })}>  </Button>
           <Button title='150' color="#260033" onPress={()=>this.setState({   thirdPlan:true,form:false })}>  </Button>
           
     </View>
      );
      else if(this.state.firstPlan)
      {
        
        return(
          
        <View style={{backgroundColor: 'blue', flex: 1}} >
         
         {tablestorender}
        
         </View>
        );
      }
      else{
        return(
          <View style={{backgroundColor: 'blue', flex: 1}} >
         {tablestorender}
         </View>
        );
      }
   

 
   }
}

