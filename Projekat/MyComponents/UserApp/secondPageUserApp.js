import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import styles from '../../styles';


export default class SecondPageScreenUserApp extends React.Component {

  static navigationOptions={

    header:null
  }
    render() {
  return (
        <View style={styles.form}>
        
       <Button title='Second Page!' onPress={() => this.props.navigation.navigate('UserAppThirdPage')} />
      </View>
      );
    }
  }


  