
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Dimensions } from 'react-native';
import styles from '../../styles'
import Draggable from 'react-native-draggable';
import Table from '../../Classes/classTable';
import FetchConstants from '../../Classes/fetchConstants';
import { TouchableOpacity } from 'react-native-gesture-handler';

let tablespom=[];
let tables=[];
let tablespita=[];
function prikaziGoste(tableid)
{
//iz baze se vuku ime za sto sa id-om
  alert(tableid);

}
function updateXanY(newX,newY,table,index)//table ce da sadrzi staro x i y
{
//alert(newX);
 //let novox=tables[index].x+newX;
//let novoy= tables[index].y+newY;
let novox=tablespita[index].x+newX;
let novoy= tablespita[index].y+newY;
//table.x=novox;
//table.y=novoy;
tables[index].x=novox;
tables[index].y=novoy;

}

let pomniz="";
export default class floorPlanSeeFPPageScreen extends React.Component {//ZA NOVU SVADBU
  
  constructor(props){
    
    super(props);
    
    this.state={
        firstPlan:false,//60
        secondPlan:false,//100
        thirdPlan:false,//150
        tr:[],
        wedid:this.props.navigation.state.params.wedid,
        stageAndWeddtable:[],
    }
    tables=[];
    tablespom=[];
    tablespita=[];
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

    
    
      this.praviRaspored();//ova fja vraca sve stolove iz baze
    //this.props.navigation.state.params.wedid  OVAKO SE PRISTUPA WEDINNG-ju AKO JE WEDDID -1 ZNACI DA SE RADI O NOVOM VENCANJU
        
}
   static navigationOptions={

    header:null
  }
  
  saveAllTables=(tab,i)=>{
    tables.forEach((table,i)=>{
      
     let bazaX=parseInt(parseInt(table.x)*411/parseInt(Dimensions.get('window').width));
     let bazaY=parseInt(parseInt(table.y)*683/parseInt(Dimensions.get('window').height));
     table.x=bazaX;
     table.y=bazaY;
    });
    this.saveTables(tables);
    
 }
 saveTables=(tablespompom)=>{
  const formData=new FormData();
  formData.append("saveTable",1);
  formData.append("Tables_idTable",JSON.stringify(tablespompom));
  const fetchData={
   method:"post",
   body:formData
  };
  fetch(FetchConstants.url+"/Manager.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
   alert(response);
  })
  .catch((error)=>{alert(error);});
 }

 

  praviRaspored=()=>{
    tables=[];
    tablespom=[];
    tablespita=[];
    const formData=new FormData();
  formData.append("rt",1);

  const fetchData={
    method:"post",
    body:formData
  };
 
  fetch(FetchConstants.url+"/Manager.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
    var tablestorender=[];
    var arr=[];
  response.forEach((x,i)=>{
    
    tablespom.push(new Table(x.shape,x.capacity,this.state.wedid,x.id,15*(i+1),20*(i+1),0))
  });
  
  tablespom.sort((a, b)=> b.capacity - a.capacity);//sortira stolove u opadajuci redosled po kapacitetu
  
  let brGostiju=this.props.navigation.state.params.peoplenum;
 
  
    let pomx=280;
    let pomy=200;
    let pomx8=300;
    let pomx14=200;
    
  switch(true) {
    case brGostiju<=240://tj do 20 stolova
        let i=0;
        let staroy1=200;
        let staroy2=300;
        let staroy1preko8=420;
        let staroy2preko8=135;
        let staroy1preko14=340;
        let staroy2preko14=215;
      while(brGostiju>0)//voditi racuna da u bazi uvek ima puno stolova da ne bi puklo
      {
        tablespom[i].x=pomx;
        tablespom[i].y=pomy;
        brGostiju-=tablespom[i].capacity;
        //tablespom[i].id=i;
        
        i++;
        if(i<8)
        {

        if(i%2==0)
          {
            pomx-=50;
            pomy=staroy1-50;
            staroy1=pomy;
          }
          else{
            pomy=staroy2+50;
            staroy2=pomy;
          }
      }
      else if(i<14){
        if(i%2==0)
        {
        pomx=pomx8;
      pomy=staroy1preko8;
      staroy1preko8+=45;

      }
      else{
        pomy=staroy2preko8;
        staroy2preko8-=45;
        pomx8-=40;
      }

      }
      else{
        if(i%2==0)
        {
          pomx=pomx14;
          pomy=staroy1preko14;
          staroy1preko14+=50;
        }
        else{
          pomy=staroy2preko14;
          staroy2preko14-=50;
          pomx14-=50;

        }

      }
    }
    let radius=25;
    if(parseInt(Dimensions.get('window').width)>415)
    {
      radius=radius*(parseInt(Dimensions.get('window').width)/411);
      radius=35;
    }
      tablespom
  .forEach((table,index)=>//nije optimizovana al nece radi drugacije
  {
    if(i>0)
    {
     // tables[index]=table;alert(tables[index].id);
     let posX=parseInt(parseInt(Dimensions.get('window').width)*parseInt(table.x)/411);
    let posY=parseInt(parseInt(Dimensions.get('window').height)*parseInt(table.y)/683);
    tablespita.push(new Table(table.shape,table.capacity,this.state.wedid,table.id,posX,posY,table.peopleomtable)) ;
     tables.push(new Table(table.shape,table.capacity,this.state.wedid,table.id,posX,posY,table.peopleomtable)) ;
    tablestorender
    .push( <Draggable key={index}  renderSize={radius} ref={(draggable) => {arr[index] = draggable;}} pressDragRelease={()=>updateXanY(arr[index].state._value.x,arr[index].state._value.y,table,index)}  pressDrag={()=>prikaziGoste(table.id)} reverse={false} renderColor='black' renderShape={table.shape} x={posX} y={posY} renderText={index} />);
    }
    i--;
  });
      break;
    case y:
      // code block
      break;
    default:
      // code block
  } 


    this.setState({tr:tablestorender});
  })
  .catch((error)=>{alert(error);});
 
}

     render() {
     
    
      {
        
        return(
          
        <View style={{backgroundColor: 'white', flex: 1}} >
          <TouchableOpacity onPress={()=>this.saveAllTables(tables[0],0)}><Text>Sacuvaj sve</Text></TouchableOpacity>
          {this.state.stageAndWeddtable}
         {this.state.tr}
        
         </View>
        );
      }
     
      }
   

 
   
}

