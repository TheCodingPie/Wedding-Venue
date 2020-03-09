import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity,Alert,AsyncStorage } from 'react-native';

import styles from '../../styles';

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
export default class optionPageScreen extends React.Component {
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
        kumovi:[],
        newlyweds:null
         }
         this.loadData();
        // this.returnFamilies();

    }
    loadData = async() =>{
      var response;
      try {
      AsyncStorage.getItem('newlyweds').then( (storeString)=>{
     
         this.setState({newlyweds:JSON.parse(storeString)});
         this.vratiStolove();
       
        })
      
    }catch (error) { }
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
      //alert(this.state.tablespom.length)
      }) 
      .catch((error)=>{alert(error);});
      
    }

    returnFamilies=()=>{
      const formData=new FormData();
      formData.append("returnFamilies",1);
      formData.append("weddingId",this.state.newlyweds.idWedding);
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch( FetchConstants.url+"/BrideAndGroom.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
       
       
       var porodicepom=[];
       response.forEach((porodica,index)=>{
         if(porodica.coming!=='0')
         {
        porodicepom.push(new Family(porodica.lastname,porodica.id,porodica.guestType,porodica.numOfMembers));
      }});
      porodicepom.forEach((porodica,index)=>{
       
        
          switch(porodica.type) {
            case 'porodica':
              porodicepom[index].type='A'
              break;
            case 'prijatelji':
              porodicepom[index].type='B'
              break;
              case 'kolege':
              porodicepom[index].type='C'
              break;
             
            default:
              porodicepom[index].type='D'
          
         }
     
       });
       this.setState({porodice:porodicepom});
       
      this.generisiRaspored();
      
      })
      .catch((error)=>{alert(error);});
    }

generisiRaspored=()=>{
let por=0;
  let tablespompom=this.state.tablespom;
 // alert(tablespompom.length)
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
    this.state.porodice.forEach((x,i)=>{
      this.updateTableFamily(x.id,x.idTable,i);
    })

}
updateTableFamily=(id,idTable,i)=>{
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
    if(i==this.state.porodice.length-1)
    Alert.alert("Obavestenje", "Raspored je generisan");
   //alert('raspored je generisan');
  })
  .catch((error)=>{alert(error);});
 }

   

render() {
    return (
       <View style={{flex:1,backgroundColor:'#f1f1f1'}} >
         <View style={{flex:0.1}}></View>

           <View style={{flex:0.8,flexDirection:'row'}}>
           <View style={{flex:0.15}}></View>
           <View style={{flex:0.7}}>

             <View style={{flex:0.45,backgroundColor:'#fbb0a9',borderRadius:25,borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
           <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}} color="#260033" onPress={()=> this.props.navigation.navigate('FourthPageScreenNewlywedsApp',{newlyweds:this.state.newlyweds})} ><Text style={{fontFamily:'news701i',fontSize:20,color:'white'}}>Pregledaj raspored</Text></TouchableOpacity>
           </View>
           <View style={{flex:0.1}}></View>
           <View style={{flex:0.45,backgroundColor:'#fbb0a9',borderRadius:25,borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
           <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}} color="#260033"onPress={()=> this.returnFamilies()} ><Text style={{fontFamily:'news701i',fontSize:20,color:'white'}}>Generiši </Text>
           <Text  style={{fontFamily:'news701i',fontSize:20,color:'white'}}> Raspored sedenja</Text></TouchableOpacity>
           </View>
           </View>

           <View style={{flex:0.15}}></View>
           </View> 
           <View style={{flex:0.1}}></View>
     </View>
    );
  }
}


