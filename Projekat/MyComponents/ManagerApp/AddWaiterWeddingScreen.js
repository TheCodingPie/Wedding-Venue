import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity ,Image,Dimensions,Alert  } from 'react-native';
import styles from '../../styles'
import Draggable from 'react-native-draggable';
import Table from '../../Classes/classTable';
import FetchConstants from '../../Classes/fetchConstants';
import {Dialog , Portal,Button} from "react-native-paper";
import {Header,Left,Icon, DatePicker} from 'native-base';

function prikaziGoste(tableid)
{


}
var rdbtns=[];

let stageAndWeddtable=[];
if(Dimensions.get('window').width<500)
{
stageAndWeddtable.push( <Draggable key={1}   renderSize={85} renderColor='black' offsetX={-100} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
stageAndWeddtable.push( <Draggable key={2}   renderSize={70} renderColor='black' offsetX={180} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );
}
else
{
  stageAndWeddtable.push( <Draggable key={1}   renderSize={100} renderColor='black' offsetX={-290} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
stageAndWeddtable.push( <Draggable key={2}   renderSize={85} renderColor='black' offsetX={390} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );

}
var toRender=[];

export default class AddWaiterWeddingScreen extends React.Component {
  
  constructor(props){
    super(props);
  
    this.state={
        tr:[],
        wedid:this.props.navigation.state.params.wedid,
        waiters:[],
        visible:false,
        radioBtnsData: [],
        checked: 0,
        tableId:-1
    }
        this.vratiStolove();
        this.returnWaiters();
       

    
        
}

showDialog = (tableid,index) => this.setState({ visible: true,tableId:tableid });

  hideDialog = () => this.setState({ visible: false });

   static navigationOptions={

    header:null
  }
  
  vratiStolove=()=>{
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
      tablespom.push(new Table(x.shape,x.capacity,this.state.wedid,x.idTable,posX,posY,0));
    });
    tablespom
  .forEach((table,index)=>//nije optimizovana al nece radi drugacije
  {
    tablestorender
    .push( <Draggable key={index}  renderSize={radius} ref={(draggable) => {arr[index] = draggable;}} pressInDrag={()=>this.showDialog(table.id,index)} reverse={false} renderColor='black' renderShape={table.shape} x={table.x} y={table.y} renderText={table.capacity+"\n"+table.id} />);
  });
    this.setState({tr:tablestorender});
    }) 
    .catch((error)=>{alert(error);});
    
  }
  dodeliKonobara=()=>{
   
    this.hideDialog();
    const formData=new FormData();
    formData.append("updateTableWaiter",1);
    formData.append("idWedding",this.state.wedid);
    formData.append("idTable",this.state.tableId);
    formData.append("idWaiter",this.state.radioBtnsData[this.state.checked].id);
    const fetchData={
      method:"post",
      body:formData
    };
    fetch(FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
      Alert.alert("Obaveštenje","Dodelili ste stolu "+this.state.tableId+" konobara: "+this.state.radioBtnsData[this.state.checked].name);
     
    }) 
    .catch((error)=>{alert(error);});
  }

  returnWaiters=()=>{
    const formData=new FormData();
    formData.append("returnWaiters",1);
    const fetchData={
      method:"post",
      body:formData
    };
    fetch(FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
   //this.setState({waiters:response});
   this.setState({radioBtnsData:response});
    }) 
    .catch((error)=>{alert(error);});
  }

  puniRender=()=>
  {
    this.state.radioBtnsData.map((data, key) => {
      rdbtns.push(
       
             this.state.checked == key ?
                 <TouchableOpacity style={styles.btn}>
                     <Image style={styles.img} source={require("../Images/rdbChecked.png")}/>
                     <Text>{data}</Text>
                 </TouchableOpacity>
                 :
                 <TouchableOpacity onPress={()=>{this.setState({checked: key})}} style={styles.btn}>
                     <Image style={styles.img} source={require("../Images/rdbUnchecked.png")} />
                     <Text>{data}</Text>
                 </TouchableOpacity>
             
        
      );
 });
 

  }

     render() {

     if(this.state.visible==true)
     {
      {this.state.radioBtnsData.map((data, key) => {
        rdbtns[key]=
         
               this.state.checked == key ?
                   <TouchableOpacity style={styles.btn}>
                       <Image style={styles.img} source={require("../Images/rdbChecked.png")}/>
                       <Text>{data.name}</Text>
                   </TouchableOpacity>
                   :
                   <TouchableOpacity onPress={()=>{this.setState({checked: key})}} style={styles.btn}>
                       <Image style={styles.img} source={require("../Images/rdbUnchecked.png")} />
                       <Text>{data.name}</Text>
                   </TouchableOpacity>
               
          
        
   })}
   
  }  
        return(
          
        <View style={{backgroundColor: 'white', flex: 1}} >
          
          {stageAndWeddtable}
         {this.state.tr}
         <Portal>
          <Dialog
             visible={this.state.visible}
             onDismiss={this.hideDialog}>
            <Dialog.Title>Dodaj Konobara</Dialog.Title>
            <Dialog.Content>
              {rdbtns}
            </Dialog.Content>
            <Dialog.Actions>
            <Button  onPress={ this.dodeliKonobara} >Dodeli konobara</Button>
            <Button  onPress={this.hideDialog} >Otkazi</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        
         </View>
        );
      }
     
      
   

 
   
}


