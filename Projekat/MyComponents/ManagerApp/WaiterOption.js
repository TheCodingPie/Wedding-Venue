import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

class WaiterOption extends Component {
    constructor(props) {
     super(props);
     this.state={
         name="Marko"
     }
     }

    render() {
     return (
     <TouchableOpacity style={styles.postContainer} onPress={this.props.postPressed}>this.state.name</TouchableOpacity>
     )
     }
    }
    export default WaiterOption