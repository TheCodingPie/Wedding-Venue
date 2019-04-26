import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon} from 'native-base';
import styles from '../../styles'

export default class MenuScreen extends React.Component {
  
 
  render() {
    return (
      
        
  
  
<View style={styles.form} >

     <Button style={styles.flex1} title='Unesi predjelo' color="#260033" onPress={this.btnUnesiPress}>  </Button>


 <Button  style={styles.flex1}  title='Unesi jelo' color="#260033" onPress={this.btnUnesiPress}>  </Button>
  
 
  <Button  style={styles.flex1}  title='Unesi desert' color="#260033" onPress={this.btnUnesiPress}>  </Button>





</View>
  
      
       
      
    );
  }
}

