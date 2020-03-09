import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity ,ImageBackground,Image, Dimensions,ScrollView,AsyncStorage,Alert} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles'
import Manager from '../../Classes/classManager';
import FetchConstants from '../../Classes/fetchConstants';
import{ StackActions,NavigationActions} from 'react-navigation';

export default class FirstPageScreenManagerApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={

         id:"",
         password:""


         }

    }
    handleChangeTextid=(newText)=>this.setState({id:newText});
    handleChangeTextPassword=(newText)=>this.setState({password:newText});
createManager=()=>{
  const formData=new FormData();
  formData.append("createManager",1);
  formData.append("id","tatli");
  formData.append("password","papa");
  formData.append("uniqueId","kkwo");
  const fetchData={
    method:"post",
    body:formData
  };
 
  fetch(FetchConstants.url+"/Manager.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
  
   //alert(response);
  })
  .catch((error)=>{alert(error);});
  /*
  if(isset($_POST["createManager"]))
{
 $res=$baza->createManager($_POST["uniqueId"],$_POST["id"],$_POST["password"]);*/
}
    
    btnLogin=()=>
    {

     if(this.state.id=="" || this.state.password=="" )
      {
      Alert.alert( "Obaveštenje","Niste uneli sve podatke.");
      return;
      }
/*
      if(isNaN(this.state.id))
      {
        Alert.alert( "Obaveštenje","Niste uneli validne podatke.");
        return;
      } */
      const formData=new FormData();
      formData.append("login",1);
      formData.append("id",this.state.id);
      formData.append("password",this.state.password);
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch(FetchConstants.url+"/Manager.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
       if(response==true)
       {
       this.props.navigation.navigate('ManagerTabNavigator',{restaurantId:this.state.id});
       this.storeToken();
       this.resetNav();
       }
       else
       {
        Alert.alert("Obaveštenje", "Uneli ste loše podatke.");
        this.setState({
          id:"",
          password:""
        });
       }
      // alert(response);
      })
      .catch((error)=>{alert(error);});
    }

    storeToken = async () => {
      try {
        await AsyncStorage.setItem('LocalUser','5');
         } 
      catch (e) {
        // saving error
      }

     }


     resetNav=()=>
    {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'ManagerTabNavigator'},{restaurantId:this.state.id} )],
      });
      this.props.navigation.dispatch(resetAction);
    }
     

render() {
    return (
      <ScrollView contentContainerStyle={{ height:Dimensions.get('window').height}}>
      <ImageBackground source={require('../Images/marble.jpg')} style={{width: '100%', height: '100%', display:"flex",flexDirection:"column"}}>
      <View style={{display:"flex",flexDirection:"column", flex:1,alignContent:'center', justifyContent:'center'}}>
        <View style={{flex:3,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center' }}>
          <View style={{flex:1}}></View>
          <View style={{flex:2,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
            <View style={{flex:2,display:"flex",flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
         <Image source={require('../Images/logo.png')} style={{blurRadius:80,flex:1, height: undefined, width: undefined}}
  resizeMode="contain"></Image>
         </View>
         </View>
         <View style={{flex:0.5}}></View>
        </View>
      <View style={{display:"flex" ,flexDirection:"row",flex:4.5,alignContent:"flex-start"}}>
        <View style={{flex:1}}></View>
        <View style={{flex:5,backgroundColor:'white',display:'flex',flexDirection:'column',borderRadius:25}}>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <TextInput placeholder="Id" style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}} value={this.state.id} onChangeText={this.handleChangeTextid} placeholderTextColor='#fbb0a9'></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <TextInput placeholder="Vaša šifra" secureTextEntry={true }style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}} value={this.state.password} onChangeText={this.handleChangeTextPassword} placeholderTextColor='#fbb0a9'></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <View style={{display:'flex',flex:5,flexDirection:'column'}}>
          <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.btnLogin}><Text style={{color:'white',fontSize:18}}>Prijavi se</Text></TouchableOpacity>
          </View>
          <View style={{flex:1}}></View>
        </View>
          <View style={{flex:1}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity style={{flex:1,flexDirection:"row", alignItems:'center',justifyContent:'center'}} onPress={()=> this.props.navigation.navigate('ManagerAppCreateAccount')}><Text style={{color:'#fbb0a9'}}>Kreiraj svoj profil</Text></TouchableOpacity>
          </View>
          <View style={{flex:1}}></View>
        </View>
        <View style={{flex:1}}></View>
      </View>
      <View style={{flex:1}}></View>
      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

