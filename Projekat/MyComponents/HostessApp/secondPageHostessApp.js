import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,TouchableOpacity,Dimensions } from 'react-native';

import styles from '../../styles';
import FetchConstants from '../../Classes/fetchConstants';
import {Header, Icon,Left} from 'native-base';
import Draggable from 'react-native-draggable';
export default class SecondPageScreenHostessApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         code:"",
         date:'2019-06-07',  //new Date().toISOString().slice(0, 10) JOVANA UBACI TO
         wedid:1
         }
        this.funkcija();
    }
    funkcija=()=>{
      const formData=new FormData();
      formData.append("returnWeddingToday",1);
      formData.append("date",this.state.date);
    
      const fetchData={
        method:"post",
        body:formData
      };
      fetch(FetchConstants.url+"/Hostess.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
       // alert(response);
      this.setState({wedid:response});
      })
      .catch((error)=>{alert(error);});
    }

    handleChangeTextCode=(newText)=>this.setState({code:newText});
   // handleChangeTextSurname=(newText)=>this.setState({surname:newText});
    
    btnUnesiPress=()=>
    {
      const formData=new FormData();
      formData.append("returnFamiliesWhoCame",1);
      formData.append("lastname",this.state.code);
      formData.append("idWedding",this.state.wedid);
    
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch(FetchConstants.url+"/Hostess.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
      //alert(response[0].id);
      this.props.navigation.navigate('zaJoks',{wedid:this.state.wedid,members:response});
  
      })
      .catch((error)=>{alert(error);});
         };
     

render() {
    return (
      <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}}>
      <Header style={{flexDirection:'column',backgroundColor:'#fbb0a9'}} >
      <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}}/> 
         </Header>
      
      <View style={{display:"flex",flexDirection:"column",width:'100%', height: '100%',backgroundColor:'#F1F1F1'}}>
      
         
          <View style={{flex:0.15, display:'flex', alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'news701i',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,textShadowOffset:{width:2,height:2},textShadowRadius:4}}>Unesite prezime </Text>
          <Text style={{fontFamily:'news701i',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,textShadowOffset:{width:2,height:2},textShadowRadius:4}}> porodice</Text>
          </View>
      
      
      
         <View style={{flex:0.65,display:'flex',flexDirection:'row'}}>
           
         <View style={{flex:1}}></View>
         <View style={{flex:10,display:'flex',borderRadius:25,backgroundColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
          <View style={{flex:10,display:'flex',flexDirection:'column',borderRadius:25}}>
                
         <View style={{flex:3,display:'flex',flexDirection:'column',alignItems:'center'}}>
         <View style={{flex:0.4}}></View>
         <View style={{flexDirection:'row', display:'flex',alignItems:'center',justifyContent:'center'}}>
         <View style={{flex:0.3}}></View>
           <TextInput placeholder='Prezime porodice' style={{flex:1.5,borderBottomColor:'black',borderBottomWidth:2,shadowColor:'pink'}} placeholderTextColor='#fbb0a9'  onChangeText={this.handleChangeTextCode}></TextInput>
           <View style={{flex:0.3}}></View>
         </View>
           </View>
           <View  style={{flex:0.4}}>
           <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <View style={{display:'flex',flex:5,flexDirection:'column'}}>
          <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.btnUnesiPress}><Text style={{color:'white',fontSize:18}}>Pronadji porodicu</Text></TouchableOpacity>
          </View>
          <View style={{flex:1}}></View>
        </View>
    
      </View>
      <View style={{flex:0.7}}></View>
      </View>
        </View>
      <View style={{flex:0.7}}></View>
      
      </View>
      
      
      
      
      <View style={{flex:0.05,display:'flex',flexDirection:'column',alignItems:'center'}}></View>
      
      
      </View>
      
      
      
      
      </ScrollView> 
    );
  }
}

