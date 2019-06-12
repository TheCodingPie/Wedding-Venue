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
      //newlyweds:this.props.navigation.state.params.newlyweds,
      newlyweds:null,

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
   
       this.setState({newlyweds:JSON.parse(storeString)})
       //alert(newlyweds.id);
      })
    
  }catch (error) { }
}

    
  
  componentDidMount=()=> {
  
    
    var date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC   
   // var expirydate = this.state.newlyweds.date+' 04:00:45';// OVDE TREBA DA SE STAVI VREME SVADBE NA OSNOVU this.props.navigation.state.params.wedid
   var expirydate = '2019-08-23 04:00:45';
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
     
     <View style={{ flex: 1,justifyContent:'center' }}>
        <CountDown
          until={this.state.totalDuration}
          
          timetoShow={('H', 'M', 'S')}
         
          onPress={() => alert('Jos ovoliko do vencanja')}
      
          size={40}
          digitStyle={{backgroundColor:'#fbb0a9'}}
         timeLabels={{d:'Dana',h:'Sati',m: 'Minuta', s: 'Sekunde'}}
        /><TouchableOpacity onPress={()=>{alert(this.state.newlyweds.id)}}><Text>Klikniii</Text></TouchableOpacity>
         </View>
      </View>
    );
  }
}
