import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import styles from '../../styles';


export default class FirstPageScreenWaiterApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         code:"",
         name:""

         }

    }

    handleChangeTexCode=(newText)=>this.setState({code:newText});
    handleChangeTextSurname=(newText)=>this.setState({name:newText});
    
    btnDaljePress=()=>
    {
       
        this.props.navigation.navigate('WaiterAppSecondPage')
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
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextSurname} /> 
             </View>
           <Button title='Dalje' color="#260033" onPress={this.btnDaljePress}>  </Button>
           
     </View>
    );
  }
}

