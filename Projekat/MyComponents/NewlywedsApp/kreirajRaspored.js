import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';
import Table from '../../Classes/classTable';
import Family from '../../Classes/classFamily';


function compare( a, b ) {
  if ( a.type < b.type ){
    return -1;
  }
  if ( a.type > b.type ){
    return 1;
  }
  return 0;
}

export default class kreirajRasporedScreen extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         email:"",
         password:"",
         weddingId:1,
         tablespom:[],
         porodice:[],
         }
         this.vratiStolove();
        this.returnFamilies();

    }
returnFamilies=()=>{
  const formData=new FormData();
  formData.append("returnFamilies",1);
  formData.append("weddingId",this.state.weddingId);
  const fetchData={
    method:"post",
    body:formData
  };
 
  fetch( FetchConstants.url+"/BrideAndGroom.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
  // alert(response[0].lastname);
   var porodicepom=[];
   response.forEach((porodica,index)=>{
    porodicepom.push(new Family(porodica.lastname,porodica.id,porodica.guestType,porodica.numOfMembers));
  //  alert(porodica.numOfMembers);
    switch(porodica.guestType) {
      case 'porodica':
        porodicepom[index].guestType='A'
        break;
      case 'prijatelji':
        porodicepom[index].guestType='B'
        break;
        case 'kolege':
        porodicepom[index].guestType='C'
        break;
      default:
        porodicepom[index].guestType='D'
    }


   });
   this.setState({porodice:porodicepom});
  })
  .catch((error)=>{alert(error);});
}

praviRaspored=()=>{
  let por=0;
  let tablespompom=this.state.tablespom;
  let porodice=this.state.porodice;
  tablespompom.sort((a, b)=> a.id - b.id);
  porodice.sort(compare);
  let i=0;
  
  while(por<porodice.length)
    {
    i=0;
        
       
        while(parseInt(tablespompom[i].capacity) < parseInt(porodice[por].numPeople))
        
         i++;  
            tablespompom[i].capacity =  parseInt(tablespompom[i].capacity) - parseInt(porodice[por].numPeople);
              porodice[por].idTable=tablespompom[i].id;
   
      por++;
    }
    
    this.setState({porodice:porodice});
    this.state.porodice.forEach((x)=>{
      this.updateTableFamily(x.id,x.idTable);
    })
    
}
 updateTableFamily=(id,idTable)=>{
  const formData=new FormData();
  formData.append("updateTableFamily",1);
  formData.append("id",id);
  formData.append("idTable",idTable);
  const fetchData={
    method:"post",
    body:formData
  };
  fetch( FetchConstants.url+"/BrideAndGroom.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{

   })
  .catch((error)=>{alert(error);});
 }

  vratiStolove=()=>{
    const formData=new FormData();
    formData.append("TableWed",1);
    formData.append("wedId",this.state.weddingId);
    const fetchData={
      method:"post",
      body:formData
    };
   
    fetch(FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     // alert(response[0].shape);
      var tablespom1=[];
    response.forEach((x,i)=>tablespom1.push(new Table(x.shape,x.capacity,this.state.wedid,x.idTable,parseInt(x.x),parseInt(x.y),0)));
   
    this.setState({tablespom:tablespom1});
    }) 
    .catch((error)=>{alert(error);});
    
  }
  
     

render() {
    return (
       <View style={styles.form} >
          <Text>Kreiraj raspored</Text>
          <Button title='pita' onPress={()=>{
            var pom="";
           
            this.state.porodice.forEach(porodica=>pom+=porodica.idTable+" "+porodica.lastname+"\n");
            
            alert(pom)}}></Button>
             <Button title='napravi raspored' onPress={()=>{
            this.praviRaspored();
          
            }}></Button>
     </View>
    );
  }
}


