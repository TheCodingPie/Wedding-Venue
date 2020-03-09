import React, { Component } from 'react';
import { View ,AsyncStorage,Text} from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import {Header, Icon,Left} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

 export default class SecondPageScreenNewlywedsApp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      totalDuration: 100000,
      newlyweds:null,
      nameBride:"",
      nameGroom:"",
      lastname:"",
     

    };
    this.loadData();
   
  }
  static navigationOptions={

    header:null
  }


  loadData = async() =>{
    var response;
    try {
    AsyncStorage.getItem('newlyweds').then( (storeString)=>{
   
       this.setState({newlyweds:JSON.parse(storeString)});
       this.setState({nameBride:this.state.newlyweds.nameBride, nameGroom:this.state.newlyweds.nameGroom,lastname:this.state.newlyweds.lastname});
       this.funkcija();
     
      })
    
  }catch (error) { }
}

    
  
 funkcija=()=> {
  
    var date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC   
   // var expirydate = this.state.newlyweds.date+' 04:00:45';// OVDE TREBA DA SE STAVI VREME SVADBE NA OSNOVU this.props.navigation.state.params.wedid
   var expirydate = ''+this.state.newlyweds.date+' 14:00:00';//2019-08-23 04:00:45';
   //Let suppose we have to show the countdown for above date-time 
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    this.setState({ totalDuration: d });
    
  }

  render() {
    console.log(this.state.totalDuration);
    return (
     
      <View style={{ flex: 1 }}>
       <Header style={{flexDirection:'column',backgroundColor:'#fbb0a9'}} >
     
       
     <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}}/>
  
    
     </Header>

     <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:40,fontFamily:'news701i',color:'#49beb7'}}> Dobrodošli </Text>
       <Text style={{fontSize:30,fontFamily:'news701i',color:'#49beb7'}}>{this.state.nameGroom}  i {this.state.nameBride}</Text>
       <Text  style={{fontSize:30,fontFamily:'news701i',color:'#49beb7'}}> {this.state.lastname}</Text>
     </View>
     <View style={{flex:1}}></View>
     <View style={{flex: 4,flexDirection:'row'}}>
     <View style={{flex:1}}></View>
     <View style={{ flex: 5,justifyContent:'center',flexDirection:'row',marginLeft:30,marginRight:30 }}>
        <CountDown style={{flex:1}}
          until={this.state.totalDuration}
          
          timetoShow={('H', 'M', 'S')}
          digitTxtStyle={{color:'white'}}
          timeLabelStyle={{color:'#49beb7',fontFamily:'news701i',fontSize:14}}
          size={35}
          onPress={() => alert('Jos ovoliko do vencanja')}
      
          digitStyle={{backgroundColor:'#fbb0a9'}}
         timeLabels={{d:'Dana',h:'Sati',m: 'Minuta', s: 'Sekunde'}}
        />
         </View>
         <View style={{flex:1}}></View>
         </View>
         <View style={{flex:1,justifyContent:'center'}}></View>
      </View>
    );
  }
}
