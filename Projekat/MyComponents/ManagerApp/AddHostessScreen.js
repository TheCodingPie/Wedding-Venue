import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon} from 'native-base';
import styles from '../../styles'


export default class AddHostessScreen extends React.Component {
  
  constructor(){
    super()
    this.state={
      name:"",
      lastname:"",
      code:""

      }

 }

 handleChangeTextName=(newText)=>this.setState({name:newText});
 handleChangeTextLastname=(newText)=>this.setState({lastname:newText});
 handleChangeTextCode=(newText)=>this.setState({code:newText});

 btnUnesiPress=()=>{
    alert("uneli ste hostesu");
    //logika da se unese u bazu

}
render() {
    return (
      <View style={styles.flex1} >
      <Header>
    <Left>
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />

  </Left>
</Header>


<View style={styles.form} >
           <View style={styles.container}> 
                <Text style={styles.text}>Unesite ime:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextName} /> 
            </View>
            <View style={styles.container}> 
                <Text style={styles.text}>Unesite prezime:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextLastname} /> 
             </View>
             <View style={styles.container}> 
                <Text style={styles.text}>Unesite sifru:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextCode} /> 
             </View>


           <Button title='Unesi' color="#260033" onPress={this.btnUnesiPress}>  </Button>
           
     </View>
</View>   
    );
  }
}

