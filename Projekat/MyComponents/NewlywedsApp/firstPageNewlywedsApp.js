import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,AsyncStorage,ScrollView,Dimensions,ImageBackground,Image,TouchableOpacity} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';

import FetchConstants from '../../Classes/fetchConstants';
import{ StackActions,NavigationActions} from 'react-navigation';

export default class FirstPageScreenNewlywedsApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         email:"",
         password:""

         }

    }

    handleChangeTextEmail=(newText)=>this.setState({email:newText});
    handleChangeTextPassword=(newText)=>this.setState({password:newText});
    login=()=>{
     if(this.state.id=="" && this.state.password=="")
      {
      alert( "Trebate uneti id restorana i password" );
      return;
      }

      const formData=new FormData();
      formData.append("login",1);
      formData.append("email",this.state.email);
      formData.append("password",this.state.password);
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch( FetchConstants.url+"/BrideAndGroom.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
      // this.props.navigation.navigate('NewlywedsTabNavigator',{newlyweds:response});
      if(response!=null){
       // alert(response.id);
     this.storeToken(response);
    this.resetNav();
      }
      else{
        this.setState({email:""});
        this.setState({password:""});
        alert("Wrong password");
      }
      })
      .catch((error)=>{alert(error);}); 
     
    }
    
    storeToken = async (response) => {
      try {
       // await AsyncStorage.setItem('LocalUser','4');
        //await AsyncStorage.setItem('newlyweds',response);
        var proba = JSON.stringify(response);
        await AsyncStorage.setItem('newlyweds',proba);
        
         } 
      catch (e) {
        // saving error
      }
      this.storeToken2();

     }

     storeToken2=async()=>
     {
       try{
        await AsyncStorage.setItem('LocalUser','4');
       }
       catch(e)
       {

       }
     }



     resetNav=()=>
    {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'NewlywedsTabNavigator'})],
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
          <View style={{flex:2,display:"flex",flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
         <Image source={require('../Images/logo.png')} style={{width:125,height:125 }}></Image>
         </View>
         <View style={{flex:0.5}}></View>
        </View>
      <View style={{display:"flex" ,flexDirection:"row",flex:4.5,alignContent:"flex-start"}}>
        <View style={{flex:1}}></View>
        <View style={{flex:5,backgroundColor:'white',display:'flex',flexDirection:'column',borderRadius:25}}>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <TextInput placeholder="Email" style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}}  onChangeText={this.handleChangeTextEmail} placeholderTextColor='#fbb0a9'></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <TextInput placeholder="Vaša sifra" secureTextEntry={true }style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}} onChangeText={this.handleChangeTextPassword} placeholderTextColor='#fbb0a9'></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>

          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <View style={{display:'flex',flex:5,flexDirection:'column'}}>
          <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.login}><Text style={{color:'white',fontSize:18}}>Prijavi se</Text></TouchableOpacity>
         </View>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2}}></View>
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

/*

 <View style={styles.ManagerBackground} >
           <View style={styles.ManagerUpFirstPage}></View>
           <View style={styles.container}>
                <TextInput style={styles.textinput} placeholder='Email' onChangeText={this.handleChangeTextEmail} /> 
            </View>
            <View style={styles.containerA}></View>
            <View style={styles.container}>
                <TextInput style={styles.textinput} placeholder='Password' onChangeText={this.handleChangeTextPassword} /> 
            </View>
            <View style={styles.containerA}></View>
            <View style={styles.container}>
              <TouchableOpacity title='Unesi' onPress={this.login }><Text>Login</Text>
              </TouchableOpacity>       
            </View>

     </View>

*/
