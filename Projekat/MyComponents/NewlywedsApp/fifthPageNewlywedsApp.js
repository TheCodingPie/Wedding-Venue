import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

import styles from '../../styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';

//this.props.navigation.state.params.numOfMembers

var toRender=[];
var osobe=[];


export default class FifthPageScreenNewlywedsApp extends React.Component {
  
  constructor(props)
  {
super(props);
     this.state={
       numOfMembers:this.props.navigation.state.params.numOfMembers,
       wedid:this.props.navigation.state.params.wedid,
       familyId:this.props.navigation.state.params.familyId
     }
    var i=0;
    osobe=[];
    toRender=[];
    while(i<this.state.numOfMembers)
    {
    osobe.push({ime:'ime',email:'email'});
        i++;
    }


  }
    static navigationOptions={

    header:null
  }

  handleChangeTextName=(newText,indeks)=>{
      
    osobe[indeks].ime=newText;
  }
  handleChangeTextEmail=(newText,indeks)=>{
    osobe[indeks].email=newText;

  }
  dodajGoste=()=>{
    osobe.forEach((x)=>{
      const formData=new FormData();
      formData.append("saveGuest",1);
      formData.append("email",x.email); 
      formData.append("name",x.ime);
      formData.append("idWedding",this.state.wedid);//treba iz state-a da uzmem 
      formData.append("familyId",this.state.familyId);//treba iz state-a da uzmem iz props-a
      formData.append("pass",this.createPassword());

      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch( FetchConstants.url+"/BrideAndGroom.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
      })
      .catch((error)=>{alert(error);});
    })
    alert("Uneli ste goste");
  }
  createPassword(){
    var length = 8;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let n=charset.length;
    retVal = "";
    for (var i = 0; i < length; i++) {
    retVal += charset.charAt(parseInt(Math.random() * n));
    }
    return retVal;
    
  }
    fillToRender=()=>{
       osobe.forEach((osoba,indeks)=>
       
       { 
         toRender.push(<View style={{borderColor:'black',borderWidth:2}}><Text>Unesite ime clana</Text><TextInput style={styles.textinput} onChangeText={(text) => this.handleChangeTextName(text, indeks)} />
         <Text>Unesite email clana</Text><TextInput style={styles.textinput}  onChangeText={(text) => this.handleChangeTextEmail(text, indeks)} /></View>);
       });

    }
    render() {
    
        this.fillToRender();

  return (


        <ScrollView >
            
                {toRender}
               <TouchableOpacity onPress={this.dodajGoste}><Text>Dodaj Goste</Text></TouchableOpacity>

            
      
       
      </ScrollView>
      );
    }
  }


 
