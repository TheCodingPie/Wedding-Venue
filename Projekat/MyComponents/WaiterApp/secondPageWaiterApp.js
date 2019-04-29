import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import styles from '../../styles';


export default class SecondPageScreenWaiterApp extends React.Component {

  static navigationOptions={

    header:null
  }
    render() {
  return (
        <View style={styles.form}>
        
       <Button title='Stolovi' onPress={() => this.props.navigation.navigate('WaiterAppThirdPage')} />
       
      </View>
      );
    }
  }


  