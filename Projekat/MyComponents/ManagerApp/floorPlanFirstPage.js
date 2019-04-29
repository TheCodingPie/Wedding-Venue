import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import styles from '../../styles';

export default class floorPlanFirstPageScreen extends React.Component{

    static navigationOptions={

        header:null
      }

render()
{

    return(

    <View style={styles.form} >
     
     <Button title='Pregled rasporeda' color="#260033" onPress={()=>this.props.navigation.navigate('floorPlanWeddIdPage')}>  </Button>

     <Button title='Nova svadba' color="#260033" onPress={()=>this.props.navigation.navigate('floorPlanFirstPageNewWedd')}>  </Button>
    
    </View>
    );
}

}