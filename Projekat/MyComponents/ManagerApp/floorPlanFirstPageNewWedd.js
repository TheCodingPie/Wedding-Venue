import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import styles from '../../styles';

export default class floorPlanFirstPageNewWeddScreen extends React.Component{

    static navigationOptions={

        header:null
      }

render()
{

    return(

        <View style={styles.form} >
        <Text style={styles.text}>Unesite broj gostiju:</Text>
             <Button title='60' color="#260033" onPress={()=>this.props.navigation.navigate('floorPlanSeeFPPage',{wedid:-1,peoplenum:60})}>  </Button>
             <Button title='100' color="#260033" onPress={()=>this.props.navigation.navigate('floorPlanSeeFPPage',{wedid:-1,peoplenum:100})}>  </Button>
             <Button title='150' color="#260033" onPress={()=>this.props.navigation.navigate('floorPlanSeeFPPage',{wedid:-1,peoplenum:150})}>  </Button>
        </View>
    );
}

}