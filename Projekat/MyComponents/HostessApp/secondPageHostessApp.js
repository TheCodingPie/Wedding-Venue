import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

import styles from '../../styles';

export default class SecondPageScreenHostessApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         code:"",
         

         }

    }

    handleChangeTextCode=(newText)=>this.setState({code:newText});
   // handleChangeTextSurname=(newText)=>this.setState({surname:newText});
    
    btnUnesiPress=()=>
    {
        this.props.navigation.navigate('HostessAppThirdPage',{wedid:this.props.navigation.state.params.wedid,famid:this.state.code});
    };
     

render() {
    return (
       <View style={styles.form} >
           <View style={styles.container}> 
                <Text style={styles.text}>sifra porodice:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextCode} /> 
            </View>
           
           <Button title='Unesi' color="#260033" onPress={this.btnUnesiPress}>  </Button>
           
     </View>
    );
  }
}

