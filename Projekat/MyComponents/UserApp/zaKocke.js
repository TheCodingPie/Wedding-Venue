import React from 'react';
import { StyleSheet, Text, View,TextInput, AsyncStorage ,TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../../styles';
import firebase from 'react-native-firebase';
import{ StackActions,NavigationActions} from 'react-navigation';
import FetchConstants from '../../Classes/fetchConstants';
import {Header, Icon,Left} from 'native-base';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import {Dialog , Portal,Button} from "react-native-paper";
var user;
export default class zaKocke extends React.Component {

  static navigationOptions={

    header:null
  }
  constructor(props){
    super(props);
    
    this.state={
      //wedid:0,
      //coming:0,
      isAnswered:false,
      priceRange:'skupo',//iz prethodne
      //idMember:0,//treba iz prethodnog da se uzme
      starters:[],
      starter:'',
      dialogVisible: false,
      dialogVisibleNe: false,
      member:null,
      nike:"white",
      x:"white"
      

      
      
    }
 this.loadData();
 

  }
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 
  handleDelete = () => {
    this.setState({ dialogVisible: false });
  };
  handleCancelNe = () => {
    this.setState({ dialogVisibleNe: false });
  };
 
  handleDeleteNe = () => {
    this.setState({ dialogVisibleNe: false });
  };
  /*
componentDidMount(){
  const formData=new FormData();
  formData.append("returnStarters",1);
  formData.append("priceRange",this.state.priceRange);

  const fetchData={
    method:"post",
    body:formData
  };
  fetch( FetchConstants.url+"/Member.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{

  })
  .catch((error)=>{alert(error);});
}*/
  /*
 loadToken= async() =>{
   var user=await AsyncStorage.getItem('userTableId');
   var idwaiter=await AsyncStorage.getItem('userWaiterId');
   this.setState({idTable:idtable});
   this.setState({idWaiter:idwaiter});
 } */

 loadData = async() =>{
  try {
  AsyncStorage.getItem('User').then( (storeString)=>{
 
     //user= JSON.parse(storeString); 
     this.setState({member:JSON.parse(storeString)});
     this.funkcija();
     //alert(user.email);
   // alert(user.idTable + user.waiterId);
    //alert(user.idMember + ' '+ user.idWedding); 
     //user.waiterId);//,
     //alert(user.waiterId);
     //alert(this.state.member.idMember + ' '+ this.state.member.idWedding); 
if(this.state.member.coming==1)
this.setState({nike:"green"});
else if(this.state.member.coming==0)
this.setState({x:"red"});
     
    })
}catch (error) { }
//this.setState({idMember:user.idMember});
//this.setState({wedid:user.idWedding})
//alert(this.state.idMember + ' '+ this.state.wedid); 


}

  
 
 
  sendMessage(idTable, idWaiter) {  

    firebase.database().ref("Notification").child(idWaiter).push({     
      text:'Poziv sa stola:'+idTable,
    });
       
  }
 


  ComingOrNot=(dailine)=>{
   // alert(dailine + " "+this.state.idMember +'' +this.state.wedid);
    const formData=new FormData();
        formData.append("MemberComing",1);
        formData.append("coming",dailine);
        formData.append("idMember",this.state.member.idMember);
        formData.append("wedid",this.state.member.idWedding);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
       //  alert(response);
         
      
        })
        .catch((error)=>{alert(error);});
  }
  handleComing=(newText)=>{this.setState({coming:newText})}
  handleStarter=(newText)=>{this.setState({starter:newText})}
  predjelo=()=>{
    const formData=new FormData();
    formData.append("updateStarter",1);
        formData.append("idMember",this.state.idMember);
        formData.append("starter",this.state.starter);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
         alert(response);
      
        })
        .catch((error)=>{alert(error);});
  }
  showDialog = () => this.setState({ dialogVisible: true });
  showDialogNe = () => this.setState({ dialogVisibleNe: true });
  hideDialog = () => this.setState({ dialogVisible: false });

  storeUser = async (response) => {
    try {
      let proba = JSON.stringify(response);
      await AsyncStorage.setItem('User',proba);
    } catch (e) {
      // saving error
    }   
   
   }
   
  hideDialogAndSaveYes=()=>{ var member2=this.state.member;
    member2.coming=1;
    this.setState({member:member2,dialogVisible:false,nike:"green",x:'white'});this.ComingOrNot(1);
    this.storeUser(this.state.member);
  }
    //baza radi coming kasni
  hideDialogNe = () => {this.setState({ dialogVisibleNe: false })};
  
  hideDialogNeAndSaveNo=()=>{
    var member2=this.state.member;
    member2.coming=0;
    this.setState({member:member2 ,dialogVisibleNe: false,x:'red',nike:'white' });this.ComingOrNot(0);
    this.storeUser(this.state.member);
  }

  funkcija=()=> {
    var date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC  
    var expirydate = ''+this.state.member.date+' '+'04:00:45';// OVDE TREBA DA SE STAVI VREME SVADBE NA OSNOVU this.props.navigation.state.params.wedid
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
      return(

     <View style={{flex:1,flexDirection:'column'}}>
      
 <Header style={{flexDirection:'column',backgroundColor:'#fbb0a9'}} >
     
       
     <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}}/>
   
    
     </Header>
     
              <View style={{flex:0.7,alignItems:'center',justifyContent:'center'}}>

               <CountDown
                  until={this.state.totalDuration}
                  digitTxtStyle={{color:'white'}}
                   timetoShow={('H', 'M', 'S')}
                   timeLabelStyle={{color:'#49beb7'}}
                   onPress={() => alert('Jos ovoliko do vencanja')}
                   digitStyle={{backgroundColor:'#fbb0a9'}}
                    timeLabels={{d:'Dana',h:'Sati',m: 'Minuta', s: 'Sekunde'}}
      
                     size={35}
                     />
                 </View>

                 <View style={{flex:1}}>

                          <View style={{flex:1,flexDirection:'row'}}>
                                    <View style={{flex:1,flexDirection:'row'}} >
                                           <View style={{flex:0.1}}></View>
                                           <View style={{flex:1,flexDirection:'column'}}>
                                           

                                           <View style={{flex:1,backgroundColor:'#fbb0a9',borderRadius:25,justifyContent:'center',alignItems:'center' }} >
                                          
                                           <Icon name="silverware-fork-knife" type='MaterialCommunityIcons'   style={{fontSize:80 ,color:"white"}} onPress={() => this.props.navigation.navigate('menuPage',{member:this.state.member})} />
                                           <Text style={{fontFamily:'news701i',fontSize:18,color:'#49beb7'}}>Jelovnik</Text>
                                           </View>

                                           <View style={{flex:0.1}}></View>
                                           </View>
                                           <View style={{flex:0.1}}></View>
                                            
                                    </View>

                                     <View style={{flex:1,flexDirection:'row'}} >

                                          <View style={{flex:0.1}}></View>
                                           <View style={{flex:1,flexDirection:'column'}}>
                                          
                                           
                                           <View style={{flex:1,backgroundColor:'#fbb0a9',borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                                           <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                                             <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center' }} /*onPress={this.showDialog}*/onPress={this.showDialog}>
                                           <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                                           <Icon name="check" type='FontAwesome'   style={{fontSize:65, color:this.state.nike}}  />
                                           </View>
                                           </TouchableOpacity>

                                           <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}  onPress={this.showDialogNe}>
                                             <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                                           <Icon name="times" type='FontAwesome'   style={{ fontSize:65, color:this.state.x}} />
                                           </View>
                                           </TouchableOpacity>
                                           </View>
                                           <Text style={{fontFamily:'news701i',fontSize:18,color:'#49beb7'}}>Dolazak?</Text>
                                           <View style={{flex:0.2}}></View>
                                           
                                           
                                           </View>
                                           <View style={{flex:0.1}}></View>


                                           </View>
                                           <View style={{flex:0.1}}></View>
                                           

                                     </View>


                          </View>

                          <View style={{flex:1}}>
                          <View style={{flex:0.2}}></View>
                                <View style={{flex:1,flexDirection:'row'}}>
                                      <View style={{flex:0.05}}></View>
                                      <View style={{flex:1,backgroundColor:'#fbb0a9',borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                                      
                                      <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}} onPress={()=>this.sendMessage(this.state.member.idTable,this.state.member.waiterId)}>
                                      <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                                      <Icon name="hand" type='MaterialCommunityIcons'   style={{fontSize:80 ,color:"white"}}  />
                                      </View>
                                      </TouchableOpacity>
                                      <Text style={{fontFamily:'news701i',fontSize:18,color:'#49beb7'}}>Pozovi konobara</Text>
                                      
                                      </View>


                                      <View style={{flex:0.05}}></View>
                                </View>
                          <View style={{flex:0.4}}></View>                              

                          </View>

                          <Portal>
          <Dialog
             visible={this.state.dialogVisible}
             onDismiss={this.hideDialog}>
            <Dialog.Title>Potvrdjujete dolazak</Dialog.Title>
            <Dialog.Content>
              <Text>Klikom na ovo dugme obavestavate mladence da cete pristustvodati njihovom velikom danu</Text>
            </Dialog.Content>
            <Dialog.Actions>
            <Button color='#49beb7'  onPress={ this.hideDialogAndSaveYes}>Da</Button>
            <Button color='#49beb7' onPress={this.hideDialog}>Otkazi</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog
             visible={this.state.dialogVisibleNe}
             onDismiss={this.hideDialogNe}>
            <Dialog.Title>Otkazujete dolazak</Dialog.Title>
            <Dialog.Content>
              <Text>Klikom na ovo dugme obavestavate mladence da cete pristustvodati njihovom velikom danu</Text>
            </Dialog.Content>
            <Dialog.Actions>
            <Button color='#49beb7'   onPress={this.hideDialogNeAndSaveNo}>Da,otkazujem dolazak</Button>
            <Button color='#49beb7'  onPress={this.hideDialogNe}>Otkazi</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
                 </View>



     </View>
    
     

      );
     
    }
  }


  /*


   if(this.state.coming)
      {
  return (
        <View style={styles.form}>
        <TextInput placeholder='Dolazis ili ne ' onChangeText={this.handleComing}></TextInput>
        <Button title="Potvrdi/Otkazi" onPress={this.ComingOrNot}></Button>
       <Button title='Second Page!' onPress={() => this.props.navigation.navigate('UserAppThirdPage')} />
       <Button title='Odjavi se' onPress={() => this.signOut()} />
       <Button title='Posalji poruku' onPress={() => this.sendMessage()} />
        <TextInput placeholder='Obrok' onChangeText={this.handleStarter}></TextInput>
        <TouchableOpacity title='Okbrokkk' onPress={this.predjelo}><Text>Add predjelo</Text></TouchableOpacity>
      </View>
      );
  }
  else{
    <View style={styles.form}>
    <Text>Zao mi je vi ne dolazite na vencanje</Text>
    </View>
  }
  */
