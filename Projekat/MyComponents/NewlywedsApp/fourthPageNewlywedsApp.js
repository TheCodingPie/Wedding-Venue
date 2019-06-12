import React from 'react';
  import { StyleSheet, Text, View,TextInput,Image,Dimensions,ScrollView} from 'react-native';
  import styles from '../../styles'
  import Draggable from 'react-native-draggable';
  import Table from '../../Classes/classTable';
  import FetchConstants from '../../Classes/fetchConstants';
  import Dialog from "react-native-dialog";
  import { ListItem,Button } from 'react-native-elements'
  let screenWidth=Dimensions.get('window').width;


var cc;
var pp;
      let stageAndWeddtable=[];
      stageAndWeddtable.push( <Draggable key={1}   renderSize={85} renderColor='black' offsetX={-110} offsetY={0} renderShape='image' imageSource={require('../Images/stozamladence.png')} pressDrag={()=>alert('touched!!')}/>);
      stageAndWeddtable.push( <Draggable key={2}   renderSize={70} renderColor='black' offsetX={195} offsetY={0} renderShape='image' imageSource={require('../Images/stozamladence.png')} pressDrag={()=>alert('touched!!')}/> );
  
  
  
  export default class FourthPageScreenNewlywedsApp extends React.Component {
    
    constructor(props){
      super(props);
    
      this.state={
          tr:[],
          wedid:1,
          waiters:[],
          dialogVisible:false,
          people:[],
          tables:[],
          ontable:[],
          prviStoIndeks:-1,
         
          firstFamId:-1,
          secondFamId:-1,
          firstFamTableId:-1,
          secondFamTableId:-1,
      }
     
       this.vratiStolove();
          this.returnFamilies();
  
     
          
  }
 
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
      response.forEach((x,i)=>tablespom.push(new Table(x.shape,x.capacity,this.state.wedid,x.idTable,parseInt(x.x),parseInt(x.y),0)));
      tablespom
    .forEach((table,index)=>//nije optimizovana al nece radi drugacije
    {
      tablestorender
      .push( <Draggable key={index}  renderSize={30} ref={(draggable) => {arr[index] = draggable;}} /*longPressDrag={()=>updateXanY(arr[index].state._value.x,arr[index].state._value.y,table,index)}*/  pressInDrag={()=>this.showDialog(table.id)} reverse={false} renderColor='black' renderShape={table.shape} x={table.x} y={table.y} renderText={table.capacity+"\n"+table.id} />);
    });
      this.setState({tr:tablestorender,tables:tablespom});
      }) 
      .catch((error)=>{alert(error);});
      
    }
  
    returnFamilies=()=>{//osobe mi vratila
      const formData=new FormData();
      formData.append("rft",1);
      formData.append("idWedding",this.state.wedid);
      const fetchData={
        method:"post",
        body:formData
      };
      fetch(FetchConstants.url+"/BrideAndGroom.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
      this.setState({people:response});
     
      
      }) 
      .catch((error)=>{alert(error);});
    }
    
  b=(indeks,tableid)=>{


if(this.state.firstFamId==-1)
{
    this.state.firstFamId=pp[indeks].id;
    this.state.firstFamTableId=tableid;
    this.state.firstFamNumPeople=cc[indeks].length;
}
    else {
       
       let secondFamNumPeople=cc[indeks].length;
       
       let sto2brljudi=this.state.people.filter(osoba=>osoba.idTable==tableid).length - secondFamNumPeople;
        let sto2;
        this.state.tables.forEach((sto)=>{if(sto.id==tableid)sto2=sto;});
       
        let sto2slobodno=sto2.capacity- sto2brljudi;

        let sto1brljudi=this.state.people.filter(osoba=>osoba.idTable==this.state.firstFamTableId).length - this.state.firstFamNumPeople;
        let sto1;
        this.state.tables.forEach((sto)=>{if(sto.id==this.state.firstFamTableId)sto1=sto;});
        
        let sto1slobodno=sto1.capacity- sto1brljudi;
     // alert("sto1slobodno: "+ sto1slobodno+" sto2slobodno: "+ sto2slobodno+" secondFamNumPeople: "+ secondFamNumPeople+" firstFamNumPeople: "+ firstFamNumPeople)
      if(sto1slobodno>=secondFamNumPeople && sto2slobodno>=this.state.firstFamNumPeople)
      {

      this.state.secondFamId=pp[indeks].id;
      this.state.secondFamTableId=tableid;
     // alert("sto1slobodno: "+ sto1slobodno+" sto2slobodno: "+ sto2slobodno+" secondFamNumPeople: "+ secondFamNumPeople+" firstFamNumPeople: "+ this.state.firstFamNumPeople)
        this.zameniMesta();
      }
      else
      {
        this.state.firstFamId=-1;
        alert('Nema dovoljno mesta za ovu zamenu1');
        //alert("sto1slobodno: "+ sto1slobodno+" sto2slobodno: "+ sto2slobodno+" secondFamNumPeople: "+ secondFamNumPeople+" firstFamNumPeople: "+ this.state.firstFamNumPeople)
      }  
    }
this.setState({dialogVisible: false});
}
zameniMesta=()=>{
  //alert( this.state.firstFamId+" "+this.state.secondFamId+" "+this.state.firstFamTableId+" "+this.state.secondFamTableId);
  const formData=new FormData();
  formData.append("changeFamiliesTable",1);
  formData.append("idFam1",this.state.firstFamId);
  formData.append("idFam2",this.state.secondFamId);
  formData.append("idTable1",this.state.secondFamTableId);
  formData.append("idTable2",this.state.firstFamTableId);
  const fetchData={
    method:"post",
    body:formData
  };
  fetch(FetchConstants.url+"/BrideAndGroom.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
    this.returnFamilies();
 // this.setState({people:response});
 //alert(response)
  
  }) 
  .catch((error)=>{alert(error);});



this.state.firstFamId=-1;


}
    showDialog = (tableid) => {
      let dialogText=[];
      pom=this.state.people.filter((osoba)=>osoba.idTable==tableid);//osobe na stolu njih da grupisem u porodice
      pom.sort((a, b)=> a.id - b.id);
      cc=[];
      pp=[];
         //pom.forEach(osoba=>alert(osoba.lastname))
     for (var m = 0; m < 20; m++) 
       cc[m] = [];
       
     
      var i=-1;
      var j=0;
      let pomprez="";
      let pomid;
      if(pom.length!=1)
      while(i<parseInt(pom.length)-1)
      {
        
      i++;
        while(i<parseInt(pom.length)-1 && pom[i].id==pom[i+1].id)
          {
  
            cc[j].push({ime:pom[i].name})
            i++;
          }
  
         if(i<parseInt(pom.length)-1 || pom[i].id==pom[i-1].id)
         {
          cc[j].push({ime:pom[i].name})
        pomprez= pom[i].lastname
        pomid=pom[i].id
        }
          else
          {
          cc[j+1].push({ime:pom[i].name})
         // pomprez= pom[i+1].lastname  
          //pomid=pom[i+1].id
          pomprez= pom[i].lastname  
          pomid=pom[i].id
        }
          pp.push({prezime:pomprez,id:pomid})
          j++;
          
      }
      else{
        pp.push({prezime:pom[0].lastname,id:pom[0].id})
        cc[0].push({ime:pom[0].name});
      }
pp.forEach((porodica,i)=>{
        let osobe="";

        cc[i].forEach(osoba=>osobe+=osoba.ime+",");

        dialogText.push(
          <ListItem
          key={i}
          rightElement={<Button
           onPress={()=>this.b(i,tableid)}
           buttonStyle={{height: 35, width: 35, borderRadius: 30,backgroundColor:'black'}}  />}
              title={porodica.prezime}
                subtitle={osobe}
               containerStyle={{height:60,width:screenWidth/2,backgroundColor:'#ea91da',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5}}
                titleStyle={{ fontWeight: 'bold', fontSize: 20,color: 'black', }}
                subtitleStyle={{ fontWeight: 'bold', fontSize: 15,color: 'black', }}
                
             />
         
        )});
      
     this.setState({ontable:dialogText,dialogVisible: true});

      
    };
   
    handleCancel = () => {
      this.setState({ dialogVisible: false });
    };
    handleDelete = () => {
      this.setState({ dialogVisible: false });
    };
  
       render() {
       
  
          
          return(
            
          <View style={{backgroundColor: 'white', flex: 1}} >
            {stageAndWeddtable}
           {this.state.tr}
          
           <Dialog.Container visible={this.state.dialogVisible}>
          
            <Dialog.Title>Izaberi porodicu za zamenu</Dialog.Title>
            
            {this.state.ontable}
           
            <Dialog.Button label="Zameni porodicu" onPress={this.handleCancel} />
            <Dialog.Button label="Otkazi" onPress={this.handleDelete} />
          </Dialog.Container>
         
           </View>
          );
        }
       
        
     
  
   
     
  }