import React from 'react';
  import { StyleSheet, Text, View,TextInput,Image,Dimensions,ScrollView,Alert} from 'react-native';
  import styles from '../../styles'
  import Draggable from 'react-native-draggable';
  import Table from '../../Classes/classTable';
  import FetchConstants from '../../Classes/fetchConstants';
  import Dialog from "react-native-dialog";
  import { ListItem,Button } from 'react-native-elements'
  let screenWidth=Dimensions.get('window').width;


var cc;
var pp;
     
  export default class FourthPageScreenNewlywedsApp extends React.Component {
    
    constructor(props){
      super(props);
    
      this.state={
          tr:[],
          wedid:this.props.navigation.state.params.newlyweds.idWedding,
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
          stageAndWeddtable:[],
          dialogVisible2:false,
          dialogVisible3:false,
          
      }
      if(Dimensions.get('window').width<500)
    {
    this.state.stageAndWeddtable.push( <Draggable key={1}  pressInDrag={this.showDialog3}  renderSize={85} renderColor='black' offsetX={-100} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
    this.state.stageAndWeddtable.push( <Draggable key={2}  pressInDrag={this.showDialog2} renderSize={70} renderColor='black' offsetX={180} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );
    }
    else
    {
      this.state.stageAndWeddtable.push( <Draggable key={1}   renderSize={100} renderColor='black' offsetX={-290} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
    this.state.stageAndWeddtable.push( <Draggable key={2}   renderSize={85} renderColor='black' offsetX={390} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );
    
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
      response.forEach((x,i)=>tablespom.push(new Table(x.shape,x.capacity,this.state.wedid,x.idTable,parseInt(x.x*0.9),parseInt(x.y),0)));
      tablespom
    .forEach((table,index)=>//nije optimizovana al nece radi drugacije
    {
      tablestorender
      .push( <Draggable key={index}  renderSize={25} ref={(draggable) => {arr[index] = draggable;}} /*longPressDrag={()=>updateXanY(arr[index].state._value.x,arr[index].state._value.y,table,index)}*/  pressInDrag={()=>this.showDialog(table.id)} reverse={true} renderColor='black' renderShape={table.shape} x={table.x} y={table.y} renderText={table.capacity+"\n"+table.id} />);
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
    // alert(response.length);
      
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
      
        //alert("sto1slobodno: "+ sto1slobodno+" sto2slobodno: "+ sto2slobodno+" secondFamNumPeople: "+ secondFamNumPeople+" firstFamNumPeople: "+ this.state.firstFamNumPeople)
     if(secondFamNumPeople==this.state.firstFamNumPeople)
     {
      this.state.secondFamId=pp[indeks].id;
      this.state.secondFamTableId=tableid;
     // alert("sto1slobodno: "+ sto1slobodno+" sto2slobodno: "+ sto2slobodno+" secondFamNumPeople: "+ secondFamNumPeople+" firstFamNumPeople: "+ this.state.firstFamNumPeople)
        this.zameniMesta();
     }else{
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
        Alert.alert("Obaveštenje","Nema dovoljno mesta za zamenu.");
        //alert("sto1slobodno: "+ sto1slobodno+" sto2slobodno: "+ sto2slobodno+" secondFamNumPeople: "+ secondFamNumPeople+" firstFamNumPeople: "+ this.state.firstFamNumPeople)
      }  
    }}
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
    Alert.alert("Obaveštenje","Zamenili ste mesta.");
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
           title='Izaberi'
           titleStyle={{color:'#fbb0a9'}}
           buttonStyle={{height: 60, width: 80, borderRadius: 10,backgroundColor:'white'}}  />}
              title={porodica.prezime}
                subtitle={osobe}
               containerStyle={{height:80,width:screenWidth-60,backgroundColor:'#f1f1f1',marginTop: 20,borderRadius:20,marginLeft: 1,marginRight: 6}}
                titleStyle={{ fontWeight: 'bold', fontSize: 22,color: '#fbb0a9', }}
                subtitleStyle={{ fontWeight: 'bold', fontSize: 17,color: '#49beb7', }}
                
             />
         
        )});
      
     this.setState({ontable:dialogText,dialogVisible: true});

      
    };
    showDialog2 = () => {
      this.setState({ dialogVisible2: true });
    };
    handleDelete2 = () => {
      this.setState({ dialogVisible2: false });
    };
    showDialog3 = () => {
      this.setState({ dialogVisible3: true });
    };
    handleDelete3 = () => {
      this.setState({ dialogVisible3: false });
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
            {this.state.stageAndWeddtable}
           {this.state.tr}
           <Dialog.Container visible={this.state.dialogVisible3} containerStyle={{backgroundColor:'#F1f1f1'}}>
          
          <Dialog.Title>Bina</Dialog.Title>
          
         
          <Dialog.Button label="U redu" onPress={this.handleDelete3} />
        </Dialog.Container>

           <Dialog.Container visible={this.state.dialogVisible2} containerStyle={{backgroundColor:'#F1f1f1'}}>
          
          <Dialog.Title>Sto za mladence i kumove</Dialog.Title>
          
         
          <Dialog.Button label="U redu" onPress={this.handleDelete2} />
        </Dialog.Container>

           <Dialog.Container visible={this.state.dialogVisible} containerStyle={{backgroundColor:'#F1f1f1'}}>
          
            <Dialog.Title>Izaberi porodicu za zamenu mesta</Dialog.Title>
            <ScrollView>
            {this.state.ontable}
           </ScrollView>
            
            <Dialog.Button label="Odustani" onPress={this.handleDelete} />
          </Dialog.Container>
         
           </View>
          );
        }
       
        
     
  
   
     
  }