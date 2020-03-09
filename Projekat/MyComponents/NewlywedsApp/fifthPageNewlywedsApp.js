import React from 'react';
import { StyleSheet, Text, View,TextInput,Button, ScrollView, TouchableOpacity,Alert } from 'react-native';
import EMail from '../../Classes/EMail';
import styles from '../../styles';

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
    let p=0;
    osobe.forEach((x)=>{if(x.ime=='ime'|| x.email=='email')p=1;});
    if(p==1)
    {
      Alert.alert("Obaveštenje","Proverite unete podatke.");
      return;
    }
    osobe.forEach((x,i)=>{
      let pass=this.createPassword();
      const formData=new FormData();
      formData.append("saveGuest",1);
      formData.append("email",x.email); 
      formData.append("name",x.ime);
      formData.append("idWedding",this.state.wedid);//treba iz state-a da uzmem 
      formData.append("familyId",this.state.familyId);//treba iz state-a da uzmem iz props-a
      formData.append("pass",pass);

      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch( FetchConstants.url+"/BrideAndGroom.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
        EMail.send(x.email,pass,"Gost");
        if(i==osobe.length-1)
        Alert.alert("Obaveštenje","Uneli ste osobe.");
        
      })
      .catch((error)=>{alert(error);});
    })
   
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
         toRender.push(<View style={{flex:1, flexDirection:'column' ,borderRadius:20,borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
           <View style={{flexDirection:'row',flex:0.4}}>
             <View style={{flex:0.1}}>
             <Text> </Text>
             </View>
             <View style={{flex:0.8}}>
           <TextInput  placeholder="Ime člana" style={{fontSize:18,borderBottomColor:'black',borderBottomWidth:1,flex:1}} placeholderTextColor='#f99388'  onChangeText={(text) => this.handleChangeTextName(text, indeks)} />
           </View>
           <View style={{flex:0.1}}></View>
           </View>
          
           <View style={{flex:4}}>
             <Text> </Text>
           </View>
          <View style={{flexDirection:'row',flex:0.4}}>
          <View style={{flex:0.1}}>
          <Text> </Text>
          </View>
          <View style={{flex:0.8}}>
        <TextInput placeholder="Email"  style={{fontSize:18,borderBottomColor:'black',borderBottomWidth:1,flex:1}} placeholderTextColor='#f99388'  onChangeText={(text) => this.handleChangeTextEmail(text, indeks)} />
        </View>
        <View style={{flex:0.1}}></View>
        </View>
        <View style={{flex:2}}>
          <Text> </Text>
        </View>
        </View>
        
        );
        
       });

    }
    render() {
    
        this.fillToRender();

  return (

     <View style={{flex:1}}>
 
        <ScrollView >
            
                {toRender}

              <View style={{flex:1}}><Text> </Text></View>
                 
                <View  style={{height:60,borderRadius:30,flexDirection:'row'}}>
                  <View style={{flex:0.1}}></View>
                  <View  style={{height:40,borderRadius:30,backgroundColor:'#fbb0a9',  flex:0.8,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}} onPress={this.dodajGoste}><Text  style={{fontSize:18,alignItems:'center',color:'white'}}>Dodaj goste</Text></TouchableOpacity>
               </View>
               <View style={{flex:0.1}}></View>
               </View>
            
      
               </ScrollView>
       
    
      </View>
      );
    }
  }


 
