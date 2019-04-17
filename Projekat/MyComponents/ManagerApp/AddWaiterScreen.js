import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon} from 'native-base';
import styles from '../../styles'

export default class AddWaiterScreen extends React.Component {
  
  constructor(){
    super();
  }
   render() {
    return (
      <View style={styles.flex1} >
      <Header>
    <Left>
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />

  </Left>
</Header>


<View style={styles.form}>
       <Text>forma za ubacivanje konobara</Text>
</View>
</View>   
    );
  }
}
