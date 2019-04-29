import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import styles from '../../styles';


export default class ThirdPageScreenUserApp extends React.Component {
  static navigationOptions={

    header:null
  }
    
    render() {
     
  
      return (
        <View style={styles.form}>
       
       <Button title='Third Page!' onPress={() => this.props.navigation.navigate('UserAppFourthPage')} />
      </View>
      );
    }
  }
  


  