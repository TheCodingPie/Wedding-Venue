import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import styles from '../../styles';
export default class floorPlanWeddIdPageScreen extends React.Component{

    constructor(){
        super();
        this.state={
            weddingId:-1,
           
            
        }
      }

      static navigationOptions={

        header:null
      }
      handleChangeTextCode=(newText)=>this.setState({weddingId:newText});

render()
{
     return(

        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <Text style={styles.text}>Unesite id svadbe:</Text>
        <View style={{flex:1,flexDirection:'row'}}>
        <TextInput style={styles.textinput} onChangeText={this.handleChangeTextCode} /> 
        </View>
        <Button title='Unesi' color="#260033" onPress={()=>this.props.navigation.navigate('floorPlanSeeFPPage',{wedid:this.state.weddingId})}>  </Button>
       
       </View>
    );
}

}