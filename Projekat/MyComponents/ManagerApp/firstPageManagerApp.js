import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles'

export default class FirstPageScreenManagerApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         code:"",
         lastname:""

         }

    }

    handleChangeTexCode=(newText)=>this.setState({code:newText});
    handleChangeTextLastname=(newText)=>this.setState({lastname:newText});
    
    btnDaljePress=()=>
    {
       
        //provera da li u bazi postoji this.state.code i this.state.lastname
        this.props.navigation.navigate('ManagerTabNavigator')
    };
     

render() {
    return (
       <View style={styles.form} >
           <View style={styles.container}> 
                <Text style={styles.text}>Unesite sifru:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextcode} /> 
            </View>
            <View style={styles.container}> 
                <Text style={styles.text}>Unesite prezime:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextLastname} /> 
             </View>
           <Button title='Unesi' color="#260033" onPress={this.btnDaljePress}>  </Button>
           
     </View>
    );
  }
}

