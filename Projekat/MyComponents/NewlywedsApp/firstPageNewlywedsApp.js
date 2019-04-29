import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';

export default class FirstPageScreenNewlywedsApp extends React.Component {
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

    handleChangeTextCode=(newText)=>this.setState({code:newText});
    handleChangeTextSurname=(newText)=>this.setState({name:newText});
    
    
     

render() {
    return (
       <View style={styles.form} >
           <View style={styles.container}> 
                <Text style={styles.text}>Sifra svadbe</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextCode} /> 
            </View>
            
            <Button title='Unesi' onPress={() => this.props.navigation.navigate('NewlywedsAppSecondPage',{wedid:this.state.code})} />
           
     </View>
    );
  }
}


