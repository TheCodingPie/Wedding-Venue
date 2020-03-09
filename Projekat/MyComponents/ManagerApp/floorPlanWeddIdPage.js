import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity ,ScrollView,Dimensions,Alert} from 'react-native';
import styles from '../../styles';
import FetchConstants from '../../Classes/fetchConstants';
import DatePicker from 'react-native-date-picker';
export default class floorPlanWeddIdPageScreen extends React.Component{

    constructor(){
        super();
        this.state={
            weddingId:-1,
            date:new Date(),
           
            
        }
      }

      static navigationOptions={

        header:null
      }
      handleChangeTextCode=(newText)=>this.setState({weddingId:newText});
      handleDateChange=(newText)=>this.setState({date:newText});
      returnWeddingId=()=>{
      
        const formData=new FormData();
        formData.append("findWeddingToAddWaiters",1);
        formData.append("date",this.state.date.toISOString().split('T')[0]);
       
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Manager.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
          if(response!=null)
          this.props.navigation.navigate('floorPlanSeePlan',{wedid:response});
          else
          Alert.alert("Obaveštenje","Venčanje za izabrani datum ne postoji.");
        })
        .catch((error)=>{alert(error);});
      }  
render()
{
     return(
      <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}}>
      <View style={{flex:1,flexDirection:'column',backgroundColor:'#F1F1F1'}}>
      <View style={{display:'flex', flexDirection:'row',flex:1,backgroundColor:'#fbb0a9',flex:1}}>
      <View  style={{display:'flex',flex:1.2,flexDirection:'row',alignContent:'center',justifyContent:'center',
    borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderBottomWidth:4,borderBottomColor:'#fbb0a9',borderTopLeftRadius:20,backgroundColor:'white',
    borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2}}>
      <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}} onPress={()=>this.props.navigation.navigate('floorPlanFirstPageNewWedd')}>
     
        <Text style={{color:'black',fontSize:28,fontFamily:'cursive'}}>Nova svadba</Text></TouchableOpacity>
     </View>
     <View style={{display:'flex',flex:2,flexDirection:'row',alignContent:'center',justifyContent:'center',
    borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,
    borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'#F1F1F1'}}>
     <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}} 
     onPress={()=>this.props.navigation.navigate('floorPlanWeddIdPage')}>
        <Text style={{color:'black',fontSize:28,fontFamily:'cursive'}}>Pregled rasporeda</Text></TouchableOpacity>
     </View>
    
</View>
      <View style={{flex:10,flexDirection:'column',backgroundColor:'#F1F1F1'}} >
      <View style={{flex:0.5}}></View>
      <View style={{flex:5,flexDirection:'row'}}>
      <View style={{flex:1}}></View>
      <View style={{flex:10,flexDirection:'row',borderRadius:30,backgroundColor:'white',textShadowColor:'#000000',fontSize:30,textShadowOffset:{width:2,height:2},textShadowRadius:4}}>
      <View style={{flex:1}}></View>
      <View style={{flex:5,flexDirection:'column',borderRadius:30,backgroundColor:'white'}}>
    
      <View style={{flex:1,flexDirection:'row'}}></View>
      <View style={{flex:1,flexDirection:'row'}}><Text style={{color:'#fbb0a9',fontSize:20}}>Datum vencanja</Text></View>
      <View style={{flex:2,flexDirection:'row'}}>
      <DatePicker mode='date'
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate={this.state.minDate}
       date={this.state.date} textColor='#fbb0a9' locale='ba' style={{flex:1,flexDirection:'column'}} onDateChange={this.handleDateChange}
       timeZoneOffsetInMinutes={(new Date()).getTimezoneOffset()*+1}></DatePicker>
      </View>
      <View style={{flex:2}}></View>
      <View style={{flex:0.75}}><TouchableOpacity style={{flex:1,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.returnWeddingId}><Text style={{color:'black',fontSize:20}}>Prikazi raspored</Text></TouchableOpacity></View>
      <View style={{flex:1}}></View>
      </View>
      <View style={{flex:1}}></View>
      </View>
      <View style={{flex:1}}></View>
      </View>
      </View>
      <View style={{flex:2}}></View>
      </View>
      </ScrollView>
    );
}

}
