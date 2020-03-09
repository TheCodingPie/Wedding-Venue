
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button ,Dimensions} from 'react-native';
import styles from '../../styles'
import Draggable from 'react-native-draggable';
import Table from '../../Classes/classTable';
import FetchConstants from '../../Classes/fetchConstants';

function prikaziGoste(tableid)
{
//iz baze se vuku ime za sto sa id-om
  alert(tableid);

}
function updateXanY(newX,newY,table,index)//table ce da sadrzi staro x i y
{
//ulazi se kad se duze drzi prst na stolu--long press

novox=table.x+newX;
novoy= table.y+newY;
table.x=novox;
table.y=novoy;
alert(table.x);
const formData=new FormData();
formData.append("saveTable",1);
formData.append("Tables_idTable",table.id);
formData.append("numberTable",index);
formData.append("numberPeople",table.peopleontable);
formData.append("Wedding_idWedding",table.wedding);
formData.append("x",table.x);
formData.append("y",table.y);
const fetchData={
  method:"post",
  body:formData
};
alert(formData);
fetch(FetchConstants.url+"/Manager.php",fetchData)
.then((response)=>response.json())
.then((response)=>{
alert(response);
})
.catch((error)=>{alert(error);});


}


export default class floorPlanSeePlanScreen extends React.Component {//ZA PREGLED RASPOREDA
  
  constructor(props){
    
    super(props);
  
    this.state={
    
        tr:[],
        wedid:this.props.navigation.state.params.wedid,
        stageAndWeddtable:[],
        
    }
    
    if(Dimensions.get('window').width<500)
    {
    this.state.stageAndWeddtable.push( <Draggable key={1}   renderSize={85} renderColor='black' offsetX={-100} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
    this.state.stageAndWeddtable.push( <Draggable key={2}   renderSize={70} renderColor='black' offsetX={180} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );
    }
    else
    {
      this.state.stageAndWeddtable.push( <Draggable key={1}   renderSize={100} renderColor='black' offsetX={-290} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
    this.state.stageAndWeddtable.push( <Draggable key={2}   renderSize={85} renderColor='black' offsetX={390} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );
    
    }

    let radius=30;
    /*if(parseInt(Dimensions.get('window').width)>415)
    {
      radius=radius*(parseInt(Dimensions.get('window').width)/411);
    }
    radius=45;*/
    const formData=new FormData(); 
    formData.append("TableWed",1);
    formData.append("wedId",this.state.wedid);
    const fetchData={
      method:"post",
      body:formData
    };
    
    fetch(FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
      var tablestorender=[];
      var arr=[];
      var tablespom=[];
      let radius=25;
      if(parseInt(Dimensions.get('window').width)>415)
      {
        radius=radius*(parseInt(Dimensions.get('window').width)/411);
        radius=35;
      }
    response.forEach((x,i)=>{
      let posX=parseInt(parseInt(Dimensions.get('window').width)*parseInt(x.x)/411);
      let posY=parseInt(parseInt(Dimensions.get('window').height)*parseInt(x.y)/683);
      tablespom.push(new Table(x.shape,x.capacity,this.state.wedid,x.idTable,posX,posY,0))});
    tablespom
  .forEach((table,index)=>//nije optimizovana al nece radi drugacije
  {
    tablestorender
    .push( <Draggable key={index}  renderSize={radius} ref={(draggable) => {arr[index] = draggable;}} longPressDrag={()=>updateXanY(arr[index].state._value.x,arr[index].state._value.y,table,index)} reverse={true} renderColor='black' renderShape={table.shape} x={table.x} y={table.y} renderText={table.capacity+"\n"+table.id} />);
  });
    this.setState({tr:tablestorender});
    }) 
    .catch((error)=>{alert(error);});

    
  
         
}
   static navigationOptions={

    header:null
  }
  





  
  saveAllTables=()=>{
     this.state.tr.forEach((x,i)=>this.saveATable(x,i));
  }
  saveATable(table,index)
  {
    alert(x.id+" "+x.x);
    const formData=new FormData();
formData.append("saveTable",1);
formData.append("Tables_idTable",table.id);
formData.append("numberTable",index);
formData.append("numberPeople",table.peopleontable);
formData.append("Wedding_idWedding",table.wedding);
formData.append("x",table.x);
formData.append("y",table.y);
const fetchData={
  method:"post",
  body:formData
};
fetch(FetchConstants.url+"/Manager.php",fetchData)
.then((response)=>response.json())
.then((response)=>{
})
.catch((error)=>{alert(error);});
  }



     render() {
     
 
        
        return(
          
        <View style={{backgroundColor: 'white', flex: 1}} >
          {this.state.stageAndWeddtable}
         {this.state.tr}
        
         </View>
        );
      }
     
      
   

 
   
}

