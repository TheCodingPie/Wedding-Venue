import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

import styles from '../../styles';

import FetchConstants from '../../Classes/fetchConstants';

export default class LogoutScreen extends React.Component {

    constructor(){
       super()
       this.state={
        

         }

    }

   

render() {
    return (
       <View style={styles.form} >
          <Text>Logout</Text>
     </View>
    );
  }
}


