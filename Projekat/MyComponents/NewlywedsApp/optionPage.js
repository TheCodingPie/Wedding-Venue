import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

import styles from '../../styles';
//import  TouchableOpacity  from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';

export default class optionPageScreen extends React.Component {
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

   

render() {
    return (
       <View style={styles.form} >
           <TouchableOpacity color="#260033" onPress={()=> this.props.navigation.navigate('FourthPageScreenNewlywedsApp')} ><Text>Pregledaj Raspored</Text></TouchableOpacity>
           <TouchableOpacity color="#260033"onPress={()=> this.props.navigation.navigate('kreirajRaspored')} ><Text>Kreiraj Raspored Sedenja</Text></TouchableOpacity>

     </View>
    );
  }
}


