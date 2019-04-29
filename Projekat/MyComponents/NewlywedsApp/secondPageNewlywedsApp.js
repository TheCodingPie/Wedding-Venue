import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';

export default class SecondPageScreenNewlywedsApp extends React.Component {

  static navigationOptions={

    header:null
  }
    render() {
  return (
        <View style={styles.form}>
        
       <Button title='Dodaj porodicu' onPress={() => this.props.navigation.navigate('NewlywedsAppThirdPage')} />
       <Button title='Pogledaj raspored' onPress={() => this.props.navigation.navigate('NewlywedsAppFourthPage')} />
       
      </View>
      );
    }
  }


  