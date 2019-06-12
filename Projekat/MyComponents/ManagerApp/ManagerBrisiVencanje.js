import React from 'react';
import { StyleSheet, Text, View,TextInput,CheckBox,ScrollView,TouchableOpacity,Dimensions} from 'react-native';
import styles from '../../styles'
import FetchConstants from '../../Classes/fetchConstants';
import DatePicker from 'react-native-date-picker';
import {Dialog , Portal,Button} from "react-native-paper";
import {Header,Left,Icon} from 'native-base';
export default class ManagerBrisiVencanje extends React.Component {
  
  constructor(){
    super();
    this.state={
      date:new Date().toISOString().split('T')[0],
      dialogVisible: false,
    }
  }
  handleDateChange=(newText)=>this.setState({date:newText});
  showDialog = () => this.setState({ dialogVisible: true });
  hideDialog = () => this.setState({ dialogVisible: false });
  hideDialogAndSaveYes=()=>{
    this.setState({dialogVisible:false});
    this.deleteWedding();
  }
  deleteWedding=()=>{
    
    const formData=new FormData();
    formData.append("deleteWedding",1);
        formData.append("date",this.state.date.toISOString().split('T')[0]);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Manager.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
         alert(response);
      
        })
        .catch((error)=>{alert(error);});
  }
render() {
    return (
      <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}}>
         <Header style={{display:'flex',flexDirection:'column',backgroundColor:'#fbb0a9'}} >
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}} />
</Header>
<View style={{flex:0.15, display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
        <Text style={{fontFamily:'fantasy',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,alignItems:'center',textShadowOffset:{width:2,height:2},textShadowRadius:4}}>Vencanje</Text>
        <Text style={{fontFamily:'fantasy',color:'#fbb0a9',textShadowColor:'#000000',fontSize:30,alignItems:'center',textShadowOffset:{width:2,height:2},textShadowRadius:4}}>za brisanje</Text>
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
        <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.findWeddingId}><Text style={{color:'white'}}>Obrisi</Text></TouchableOpacity>
        </View>
        </View>
        <View style={{flex:1}}></View>
      </View>
    
    </View>
    <View style={{flex:0.7}}></View>
    </View>
      </View>
    <View style={{flex:1}}></View>
    
    </View>
    
      <Portal>
      <Dialog
             visible={this.state.dialogVisible}
             onDismiss={this.hideDialog}>
            <Dialog.Title>Da li ste sigurni da zelite da izbrisete vencanje sa izabranim datumom?</Dialog.Title>
            <Dialog.Content>
              <Text>Klikom na ovo dugme brisete vencanje sa izabranim datumom</Text>
            </Dialog.Content>
            <Dialog.Actions>
            <Button  onPress={ this.hideDialogAndSaveYes}>Da</Button>
            <Button  onPress={this.hideDialog}>Otkazi</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView> 
    );
  }
}

