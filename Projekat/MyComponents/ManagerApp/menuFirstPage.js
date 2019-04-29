import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

import styles from '../../styles'

export default class menuFirstPageScreen extends React.Component {
  
  constructor(){
    super();
  }

  static navigationOptions={

    header:null
  }

render() {
    return (
      
        
  
  
<View style={styles.form}>
          <Text>forma za kreiranje predjela</Text>
          <TouchableOpacity onPress={()=>alert('kreirano predjelo')} >
         <Text> Kreiraj predjelo </Text>
       </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('menuSecondPage')} >
         <Text> Dalje </Text>
       </TouchableOpacity>
</View>
  
      
       
      
    );
  }
}

