import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

import styles from '../../styles'
export default class menuThirdPageScreen extends React.Component {
  
  constructor(){
    super();
  }

  static navigationOptions={

    header:null
  }

render() {
    return (
      
        
  
  
<View style={styles.form}>
          <Text>forma za kreiranje deserta</Text>
          <TouchableOpacity onPress={()=>alert('kreiran desert')} >
         <Text> Kreiraj desert </Text>
       </TouchableOpacity>
          <TouchableOpacity
        
        onPress={()=>this.props.navigation.navigate('menuSecondPage')}
       >
         <Text> Nazad </Text>
       </TouchableOpacity>
</View>
  
      
       
      
    );
  }
}

