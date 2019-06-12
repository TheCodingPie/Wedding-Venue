import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,TouchableOpacity,Dimensions } from 'react-native';
import styles from '../../styles';
import { Icon,Header} from 'native-base';
import DatePicker from 'react-native-date-picker';
import FetchConstants from '../../Classes/fetchConstants';

export default class waiterZaJoks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            peoplenum:0,
            weddingId:-1,
            date:new Date().toISOString().split('T')[0],
     
        }
    
       }
  handleDateChange=(newText)=>this.setState({date:newText});

    static navigationOptions={

        header:null
      }
      handleChangeTextCode=(newText)=>this.setState({weddingId:newText});
      findWeddingId=()=>{
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
        this.props.navigation.navigate('AddWaiterWeddingScreen',{wedid:response});
        })
        .catch((error)=>{alert(error);});
        
      }
render()
{

    return(

        <View style={{display:"flex",flex:1,flexDirection:"column",width:'100%', height: '100%',backgroundColor:'#F1F1F1'}}>
             <Header style={{display:'flex',flexDirection:'column',backgroundColor:'#fbb0a9'}} >
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}} />
</Header>
   
        <View style={{flex:0.25, display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
        <Text style={{fontFamily:'fantasy',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,alignItems:'center',textShadowOffset:{width:2,height:2},textShadowRadius:4}}>Dodela konobara</Text>
        <Text style={{fontFamily:'fantasy',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,alignItems:'center',textShadowOffset:{width:2,height:2},textShadowRadius:4}}>vencanju</Text>
        </View>
    
    
    
       <View style={{flex:0.65,display:'flex',flexDirection:'row'}}>
         
       <View style={{flex:1}}></View>
       <View style={{flex:14,display:'flex',borderRadius:25,backgroundColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
        <View style={{flex:10,display:'flex',flexDirection:'column',borderRadius:25}}>
        <View style={{flex:0.4}}></View>
        <View style={{flex:0.4, display:'flex',flexDirection:'row',alignItems:'flex-start'}}>
        <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}></View>
           <View style={{flex:1, display:'flex',flexDirection:'row',alignItems:'flex-start'}}><Text style={{fontSize:18,color:'#49beb7'}}>Datum vencanja</Text></View> 
           <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}></View>
           </View>
       <View style={{flex:3,display:'flex',flexDirection:'column',alignItems:'center'}}>
       <View style={{flex:0.4}}></View>
       <View style={{flexDirection:'row', display:'flex',alignItems:'center',justifyContent:'center'}}>
       <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}></View>
       <DatePicker mode='date'   
            placeholder="select date"
            format="YYYY-MM-DD"
          
             date={this.state.date} textColor='#fbb0a9' locale='ba' style={{flex:1,flexDirection:'column'}} onDateChange={this.handleDateChange}></DatePicker>
             <View style={{flex:0.2}}></View>
       </View>
         </View>
         <View  style={{flex:0.6}}>
         <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1}}></View>
        <View style={{display:'flex',flex:5,flexDirection:'column'}}>
            <View style={{display:'flex',flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.findWeddingId}><Text style={{color:'white'}}>Dodeli</Text></TouchableOpacity>
        </View>
        </View>
        <View style={{flex:1}}></View>
      </View>
    
    </View>
    <View style={{flex:0.7}}></View>
    </View>
      </View>
    <View style={{flex:0.8}}></View>
    
    </View>
    
    
    
    
    
    
    </View>
    );
}

}
