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

alert(newX+" "+newY+" "+tableid);
//newX i newY su offset u odnosu na prethodno x i y znaci nova vrednost za x i y koja se pamti u bazi je
/*
npr table je sto koji je vracen iz baze sa tableid-om

  table.x+=newX
  table.y+=newY

i ide update DB(table)
*/
}
let stageAndWeddtable=[];
    stageAndWeddtable.push( <Draggable key={1}   renderSize={85} renderColor='black' offsetX={-110} offsetY={0} renderShape='image' imageSource={require('../Images/stozamladence.png')} pressDrag={()=>alert('touched!!')}/>);
    stageAndWeddtable.push( <Draggable key={2}   renderSize={70} renderColor='black' offsetX={195} offsetY={0} renderShape='image' imageSource={require('../Images/stozamladence.png')} pressDrag={()=>alert('touched!!')}/> );

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


export default class floorPlanSeeFPPageScreen extends React.Component {
  
  constructor(){
    super();
    this.state={
        firstPlan:false,//60
        secondPlan:false,//100
        thirdPlan:false,//150
        
    }
    //this.props.navigation.state.params.wedid  OVAKO SE PRISTUPA WEDINNG-ju AKO JE WEDDID -1 ZNACI DA SE RADI O NOVOM VENCANJU
        
}
   static navigationOptions={

    header:null
  }

  handleChangeTextCode=(newText)=>this.setState({weddingId:newText});

  
   render() {
   
    if(this.props.navigation.state.params.wedid!=-1)//znaci da trazi vec postojece vencanje
    {
        return(<View style={{backgroundColor: 'blue', flex: 1}} >
         {stageAndWeddtable}
         {tablestorender}
        
         </View>);

    }
      if(this.props.navigation.state.params.peoplenum==60)//vuce se raspored inicijalan za 60 ljudi
      {
        
        return(
          
        <View style={{backgroundColor: 'blue', flex: 1}} >
          {stageAndWeddtable}
         {tablestorender}
        
         </View>
        );
      }
      if(this.props.navigation.state.params.peoplenum==100)
      {
        return(
          <View style={{backgroundColor: 'blue', flex: 1}} >
         {stageAndWeddtable}
         {tablestorender}
         </View>
        );
      }
      if(this.props.navigation.state.params.peoplenum==150)
      {
        return(
          <View style={{backgroundColor: 'blue', flex: 1}} >
           {stageAndWeddtable}
         {tablestorender}
         </View>
        );
      }
   

 
   }
}

