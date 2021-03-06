import React from 'react';
import { StyleSheet, Text, View,TextInput,DatePickerAndroid,ImageBackground,Dimensions,Picker,Image,TouchableOpacity, ScrollView,Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { CheckBox } from 'react-native-elements'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import EMail from '../../Classes/EMail';

import FetchConstants from '../../Classes/fetchConstants';
import LinearGradient from 'react-native-linear-gradient';
export default class CreateWeddingSecondPageScreenScreen extends React.Component {
  
    constructor(props){
      
        super(props);
       this.state={
        id:this.props.navigation.state.params.id,
        cb:false,
        buffet:0,
        date:new Date(),
        tipMenija:"osnovni",
        seeable:0,
        minDate:new Date().toISOString().split('T')[0],
       
       }
      
       
       //alert(new Date().toISOString());
      }
  
      handleDateChange=(newText)=>this.setState({date:newText});//alert(this.state.date);}
    
      onChangeType=(newText)=>this.setState({tipMenija:newText});
      createWedding=()=>{
        let password=this.createPassword();
        const formData=new FormData();
        formData.append("createWedding",1);
        formData.append("password",password);
        formData.append("date",this.state.date.toISOString().split('T')[0]);
        if(this.state.buffet==true)
        formData.append("buffet",1);
        else
        formData.append("buffet",0);
        formData.append("BrideAndGroom_idBrideAndGroom",this.state.id);
        formData.append("tipMenija",this.state.tipMenija);
       // alert(this.state.date.toISOString().split('T')[0]+" "+this.state.buffet+" "+this.state.id);
        const fetchData={
          method:"post",
          body:formData
        };
        fetch(FetchConstants.url+'/Manager.php',fetchData)
        .then((response)=>response.json())
        .then((response)=>{
         if(response==null)
         alert("Wedding not created");
         else
         {
        EMail.send(this.props.navigation.state.params.email,password,"Mladenci")
         Alert.alert("Obaveštenje","Kreirali ste venčanje.");
     // alert(this.state.date+' '+this.state.buffet+' '+this.state.id+' '+this.state.tipMenija);
         }
        })
        .catch((error)=>{alert(error);});
        
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
      checkedChange=()=>{
        if(this.state.seeable==100)
        this.setState({seeable:0,buffet:0});
        else
        this.setState({seeable:100,buffet:1});
      }
      static navigationOptions={
  
          header:null
        }
      render() {
          return (
           
            <ScrollView contentContainerStyle={{ height:Dimensions.get('window').height*0.9}}>
            <ImageBackground source={require('../Images/marble.jpg')} style={{width: '100%', height: '100%', display:"flex",flexDirection:"column"}}>
            <View style={{display:'flex',flexDirection:'column',flex:1}}>
              <View style={{flex:1}}></View>
              <View style={{display:'flex',flexDirection:'row',flex:15}}>
              <View style={{flex:1}}></View>
              <LinearGradient start={{x: 0, y: 0}} end={{x:0 , y: 1}} colors={['white','#F1F1F1']} style={{flex:10,display:'flex',flexDirection:'row',borderRadius:20,borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
              <View style={{flex:1}}></View>
              <View style={{flex:5,display:'flex',flexDirection:'column'}}>
              <View style={{flex:1,display:'flex',flexDirection:'column'}}></View>
                   <View style={{flex:2, display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
        <Text style={{fontFamily:'news701i',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,alignItems:'center'}}>Kreiraj vencanje</Text>
        </View><View style={{flex:1}}></View>
               
                <View  style={{flex:2, borderWidth: 1, borderColor: 'black', overflow: 'hidden'}}>
                <Picker
  selectedValue={this.state.tipMenija}
  mode='dropdown'
  style={{flex:2,color:'#fbb0a9',borderColor:'black',borderWidth:2,fontSize:20}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({tipMenija : itemValue})
  }>
  <Picker.Item color="#fbb0a9" label="Osnovni" value="osnovni" />
  <Picker.Item color="#fbb0a9" label="Premium" value="premium" />
  <Picker.Item color="#fbb0a9" label="Gold" value="gold" />
  <Picker.Item color="#fbb0a9" label="Platinum" value="platinum" />
</Picker>
</View>
                <View style={{flex:1}}></View>
                <View style={{flex:1.5}}><Text style={{color:'#fbb0a9',fontSize:20}}>Datum</Text></View>
                <View style={{flex:2.5,flexDirection:'column'}}>
                  <View style={{flex:5,flexDirection:'row',borderColor: 'black', overflow: 'hidden'}}><DatePicker    mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.minDate}
         date={this.state.date} textColor='#fbb0a9' locale='ba' style={{flex:1,flexDirection:'column'}} onDateChange={this.handleDateChange}
         timeZoneOffsetInMinutes={(new Date()).getTimezoneOffset()*-1}></DatePicker></View></View>
                <View style={{flex:2.5}}></View>
                
                <View style={{flex:1.5,justifyContent:'center',display:'flex',flexDirection:'row'}}>
                  <TouchableOpacity  onPress={this.createWedding} style={{alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'row',flex:1,borderRadius:30,backgroundColor:'#fbb0a9'}} ><Text style={{color:'white',fontSize:20}}>KreirajVencanje</Text></TouchableOpacity></View>
                <View style={{flex:1}}></View>
              </View>
              <View style={{flex:1}}></View>
              
              
              </LinearGradient>
              <View style={{flex:1}}></View>
              </View>
              <View style={{flex:1}}></View>
            </View> 
            </ImageBackground>
            </ScrollView> 
        
  
        
      
      
             
            
          );
        }
}



