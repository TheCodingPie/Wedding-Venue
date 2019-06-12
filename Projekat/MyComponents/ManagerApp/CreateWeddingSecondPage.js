import React from 'react';
import { StyleSheet, Text, View,TextInput,DatePickerAndroid,ImageBackground,Dimensions,Picker,Image} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { CheckBox } from 'react-native-elements'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';
import RNSmtpMailer from "react-native-smtp-mailer";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';
import LinearGradient from 'react-native-linear-gradient';
export default class CreateWeddingSecondPageScreenScreen extends React.Component {
  
    constructor(props){
      
        super(props);
       this.state={
        id:this.props.navigation.state.params.id,
        cb:false,
        buffet:0,
        date:new Date().toISOString().split('T')[0],
        tipMenija:"osnovni",
        seeable:0,
        minDate:new Date().toISOString().split('T')[0],
       }
       alert(this.state.date);
      }
  
      handleDateChange=(newText)=>this.setState({date:newText});
    
      onChangeType=(newText)=>this.setState({tipMenija:newText});
      createWedding=()=>{
        
        const formData=new FormData();
        formData.append("createWedding",1);
        formData.append("password",this.createPassword());
        formData.append("date",this.state.date.toISOString().split('T')[0]);
        if(this.state.buffet==true)
        formData.append("buffet",1);
        else
        formData.append("buffet",0);
        formData.append("BrideAndGroom_idBrideAndGroom",this.state.id);
        formData.append("tipMenija",this.state.tipMenija);
        alert(this.state.date.toISOString().split('T')[0]+" "+this.state.buffet+" "+this.state.id);
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
         
      alert(this.state.date+' '+this.state.buffet+' '+this.state.id+' '+this.state.tipMenija);
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
        <Text style={{fontFamily:'news701i',color:'#fbb0a9',textShadowColor:'#000000',fontSize:20,alignItems:'center',textShadowOffset:{width:2,height:2},textShadowRadius:4}}>Kreiraj vencanje</Text>
        </View><View style={{flex:1}}></View>
                <View style={{flex:2,display:'flex',flexDirection:'row'}}>
                <Text style={{flex:7,color:'#fbb0a9',fontSize:20}}>Buffet</Text>
                <View style={{flex:1,flexDirection:'row',borderColor:'lightgrey',borderWidth:1,height:30}}>
                <TouchableOpacity style={{flexDirection:'row',opacity:this.state.seeable,backgroundColor:'transparent'}} onPress={this.checkedChange}>
                     <Image style={{height:30,width: 30,backgroundColor:'transparent'}} source={require("../Images/RozeX.png")}/>
                     
                 </TouchableOpacity></View>
                </View>
                <View style={{flex:1}}></View>
                <View  style={{flex:2, borderWidth: 1, borderColor: '#fbb0a9', overflow: 'hidden'}}>
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
                <View style={{flex:2}}><Text style={{color:'#fbb0a9',fontSize:20}}>Datum</Text></View>
                <View style={{flex:4,flexDirection:'column'}}>
                  <View style={{flex:4,flexDirection:'row'}}><DatePicker mode='date'   mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.minDate}
         date={this.state.date} textColor='#fbb0a9' locale='ba' style={{flex:1,flexDirection:'column'}} onDateChange={this.handleDateChange}></DatePicker></View></View>
                <View style={{flex:4}}></View>
                
                <View style={{flex:2,alignContent:'center',justifyContent:'center',display:'flex',flexDirection:'row',backgroundColor:'red'}}><TouchableOpacity  onPress={this.createWedding} style={{alignContent:'center',justifyContent:'center',display:'flex',flexDirection:'row',flex:1}} ><Text style={{color:'black'}}>KreirajVencanje</Text></TouchableOpacity></View>
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



