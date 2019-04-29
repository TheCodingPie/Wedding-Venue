import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles'
import Manager from '../../Classes/classManager';
import FetchConstants from '../../Classes/fetchConstants';

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

    
    btnLogin=()=>
    {

      if(this.state.id=="" && this.state.password=="")
      {
      alert( "Trebate uneti id restorana i password" );
      return;
      }

      const formData=new FormData();
      formData.append("login",1);
      formData.append("id",this.state.id);
      formData.append("password",this.state.password);
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch(FetchConstants.url+'/Manager.php',fetchData)
      .then((response)=>response.json())
      .then((response)=>{
       if(response==true)
       this.props.navigation.navigate('ManagerTabNavigator',{restaurantId:this.state.id});
       else
       {
        alert("Wrong password");
        this.state.id="";
        this.state.password="";
       }
      })
      .catch((error)=>{alert(error);});

    };
     

render() {
    return (
       <View style={styles.form} >
           <View style={styles.container}> 
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextid} placeholder='Enter id' placeholderTextColor='white' /> 
            </View>
            <View style={styles.container}> 

                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextPassword} placeholder='Enter password' 
                placeholderTextColor='white' secureTextEntry={true}/> 
             </View>
             <View>
           <TouchableOpacity onPress={this.btnLogin}><Text>LOGIN</Text></TouchableOpacity>

             </View>
     </View>
    );
  }
}

