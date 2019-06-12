import React from 'react';
import { Text, View,TextInput,Button,AsyncStorage,ScrollView,TouchableOpacity,ImageBackground,Image,Dimensions } from 'react-native';
import styles from '../../styles';

import FetchConstants from '../../Classes/fetchConstants';
import firebase from 'react-native-firebase';
import{ StackActions,NavigationActions} from 'react-navigation';


var Token; 

export default class FirstPageScreenWaiterApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         password:"",
         name:"",

         }
         firebase.messaging() .getToken().then(token => {     
          Token = token;
          
        });

    }

    handleChangeTextPassword=(newText)=>this.setState({password:newText});
    handleChangeTextSurname=(newText)=>this.setState({name:newText});
    
    btnDaljePress=()=>
    {
      const formData=new FormData();
      formData.append("login",1);
      formData.append("name",this.state.name);
      formData.append("password",this.state.password);
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch(FetchConstants.url+"/Waiter.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
       if(response!=null)
      {
      //this.props.navigation.navigate('WaiterDrawerNavigator',{id:response});
       // alert(response);
         this.storeToken(response);
        this.saveDeviceToken(response);
        this.resetNav(response);

       }
       else
       {
        this.textInput.clear();
        this.textInput1.clear();
        alert("Wrong password");
        this.state.id="";
        this.state.password="";
       }
      })
      .catch((error)=>{alert(error);});
      
    }; 

    resetNav=(response)=>
    {
      const resetAction = StackActions.reset({
        index: 0,
        //actions: [NavigationActions.navigate({ routeName: 'WaiterAppSecondPage' })],
         actions: [NavigationActions.navigate({ routeName: 'WaiterDrawerNavigator'})],

      });
      this.props.navigation.dispatch(resetAction);
    }

    
    saveDeviceToken=(id)=>
    {
    
       firebase.database().ref("Waiters").child(id).child("devToken").set(Token);      
 
    }

    storeToken = async (id) => {
      try {
        
        await AsyncStorage.setItem('Waiter_id', id);
        this.storeToken2();

      } catch (e) {
        // saving error
      }
    }

    storeToken2 = async() => {
      try {
        await AsyncStorage.setItem('LocalUser', '3');

      } catch (e) {
        // saving error
      }
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
          <TextInput ref={input => { this.textInput = input }} placeholder="Email" style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}}  onChangeText={this.handleChangeTextSurname} placeholderTextColor='#fbb0a9' ></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <TextInput ref={input => { this.textInput1 = input }} placeholder="Vasa sifra" secureTextEntry={true }style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}}  onChangeText={this.handleChangeTextPassword} placeholderTextColor='#fbb0a9'></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <View style={{display:'flex',flex:5,flexDirection:'column'}}>
          <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.btnDaljePress}><Text style={{color:'white',fontSize:18}}>Prijavi se</Text></TouchableOpacity>
          </View>
          <View style={{flex:1}}></View>
        </View>
        <View style={{flex:1.5}}></View>
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
           <View style={styles.container}> 
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextSurname} placeholder="Unesite ime" placeholderTextColor='#f99388' /> 
            </View>
            <View style={styles.container}> 
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextPassword} placeholder="Unesite sifru" placeholderTextColor='#f99388'/> 
             </View>
             <View style={styles.containerA}>
           <TouchableOpacity title='Dalje' style={styles.ManagerTO} onPress={this.btnDaljePress}><Text>LOGIN</Text></TouchableOpacity>
           </View>
     </View>
 */