import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions ,AsyncStorage,ScrollView,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import FetchConstants from '../../Classes/fetchConstants';
import{ StackActions,NavigationActions} from 'react-navigation';



export default class FirstPageScreenHostessApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         name:"",
         password:"",
         }

    }

    handleChangeTextName=(newText)=>this.setState({name:newText});
    handleChangeTextPassword=(newText)=>this.setState({password:newText});
   // handleChangeTextSurname=(newText)=>this.setState({surname:newText});
    
    Login=()=>
    {
      const formData=new FormData();
      formData.append("login",1);
      formData.append("name",this.state.name);
      formData.append("password",this.state.password);
    
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch( FetchConstants.url+"/Hostess.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
       if(response==true)
      
      // this.props.navigation.navigate('HostessAppSecondPage');
      this.singIn();
       else
       {
         this.handleChangeTextName("");
         this.handleChangeTextPassword("");
        alert("Wrong password check your data");

       }
      })
      .catch((error)=>{alert(error);});
      
    };


    singIn=() =>{
      this.storeToken();
      this.resetNav();
    }
    storeToken = async () => {
      try {
        await AsyncStorage.setItem('LocalUser','2');
         } 
      catch (e) {
        // saving error
      }

     }


     resetNav=()=>
    {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'HostessDrawerNavigator'} )],
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
          <TextInput placeholder="Email" style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}}  onChangeText={this.handleChangeTextName} placeholderTextColor='#fbb0a9'></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <TextInput placeholder="Vasa sifra" secureTextEntry={true }style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}}  onChangeText={this.handleChangeTextPassword} placeholderTextColor='#fbb0a9'></TextInput>
          <View style={{flex:1}}></View>
          </View>
          <View style={{flex:2.5}}></View>
          <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1}}></View>
          <View style={{display:'flex',flex:5,flexDirection:'column'}}>
          <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.Login}><Text style={{color:'white',fontSize:18}}>Prijavi se</Text></TouchableOpacity>
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
<View style={styles.form} >
           <View style={styles.container}> 
                <TextInput style={styles.textinput} placeholder="Ime" placeholderTextColor="black" onChangeText={this.handleChangeTextName} /> 
            </View>
            <View style={styles.container}>
                <TextInput style={styles.textinput} placeholder="Sifra"  placeholderTextColor="black" onChangeText={this.handleChangeTextPassword} /> 
            </View>
           
           <TouchableOpacity color="#260033" onPress={this.Login}><Text>Login</Text></TouchableOpacity>
           
     </View>
 */

const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
        backgroundColor: '#ecb3ff',
      },

     textinput:{
      flex:0.6,
      backgroundColor: '#edd7f4',
     
      justifyContent: 'center',
      height:40,
      marginLeft:10,
      },
      text:{
        flex:0.3,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        height:20,
       },
      container:{
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        backgroundColor: '#ecb3ff',
      },
     
});