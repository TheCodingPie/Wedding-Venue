import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity ,ImageBackground,Image, Dimensions,ScrollView,AsyncStorage} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles'
import Manager from '../../Classes/classManager';
import FetchConstants from '../../Classes/fetchConstants';
import{ StackActions,NavigationActions} from 'react-navigation';

export default class ManagerAppCreateAccount extends React.Component {

    constructor(){
       super()
       this.state={

        id:"",
        password:""


        }

    }
    handleChangeTextid=(newText)=>this.setState({id:newText});
    handleChangeTextPassword=(newText)=>this.setState({password:newText});
    static navigationOptions={

        header:null
      }
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
        
         alert(response);
        })
        .catch((error)=>{alert(error);});
        /*
        if(isset($_POST["createManager"]))
      {
       $res=$baza->createManager($_POST["uniqueId"],$_POST["id"],$_POST["password"]);*/
      }

render() {
    return (
        <ScrollView contentContainerStyle={{ height:Dimensions.get('window').height}}>
        <View  style={{width: '100%', height: '100%', display:"flex",flexDirection:"column",backgroundColor:'#F1F1F1'}}>
        <View style={{display:"flex",flexDirection:"column", flex:1,alignContent:'center', justifyContent:'center'}}>
          <View style={{flex:1,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center' }}>
            <View style={{flex:1}}></View>
            <View style={{flex:2,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
             
           </View>
           <View style={{flex:0.5}}></View>
          </View>
        <View style={{display:"flex" ,flexDirection:"row",flex:4.5,alignContent:"flex-start"}}>
          <View style={{flex:1}}></View>
          <View style={{flex:5,backgroundColor:'white',display:'flex',flexDirection:'column',borderRadius:25}}>
            <View style={{flex:2.5}}></View>
            <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1}}></View>
            <TextInput placeholder="Email" style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}} value={this.state.id} onChangeText={this.handleChangeTextid} placeholderTextColor='#fbb0a9'></TextInput>
            <View style={{flex:1}}></View>
            </View>
            <View style={{flex:2.5}}></View>
            <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1}}></View>
            <TextInput placeholder="Vasa sifra" secureTextEntry={true }style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}} value={this.state.password} onChangeText={this.handleChangeTextPassword} placeholderTextColor='#fbb0a9'></TextInput>
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
            <View style={{flex:1.5}}></View>
            
          </View>
          <View style={{flex:1}}></View>
        </View>
        <View style={{flex:1}}></View>
        </View>
        </View>
        </ScrollView>
    );
  }
}


