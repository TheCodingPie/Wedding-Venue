import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

import styles from '../../styles'

export default class menuSecondPageScreen extends React.Component {
  
  constructor(){
    super();
  }

  static navigationOptions={

    header:null
  }

render() {
    return (
      
        
  
<View style={styles.form}>
          <Text>forma za kreiranje jela</Text>
          <TouchableOpacity onPress={()=>alert('kreirano jelo')} >
         <Text> Kreiraj jelo </Text>
       </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('menuThirdPage')} >
         <Text> Dalje </Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>this.props.navigation.navigate('menuFirstPage')} >
         <Text> Nazad </Text>
       </TouchableOpacity>
</View>
  
      
       
      
    );
  }
}

