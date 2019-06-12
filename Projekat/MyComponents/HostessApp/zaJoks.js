import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,ScrollView } from 'react-native';
import { ListItem,Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';
import Table from '../../Classes/classTable';
import Draggable from 'react-native-draggable';
let screenWidth=Dimensions.get('window').width;
var pomarr;
var cc;
var pp;
    
var pom=[];

export default class FourthPageScreenHostessApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(props){
       super(props);
       this.state={
           wedid:this.props.navigation.state.params.wedid,
           members:this.props.navigation.state.params.members,
           pp:[],
           pita1:0,
         }

          cc=[];
          pp=[];
             
         for (var m = 0; m < 20; m++) {
           cc[m] = [];
           
         }
         
         pom=[];
         for(let k=0;k<15;k++)
              pom.push(0);



         this.sredi();

    }

   sredi=()=>{
     
    this.props.navigation.state.params.members.sort((a, b)=> a.id - b.id);
    
    
    var i=-1;
    var j=0;
    if(parseInt(this.props.navigation.state.params.members.length)==1)
    {
      cc[0].push({ime:this.props.navigation.state.params.members[0].name})
      pp.push({prezime:this.props.navigation.state.params.members[0].lastname})
    }
    else
    {
    while(i<parseInt(this.props.navigation.state.params.members.length)-1)
    {
      
    i++;
      while(i<parseInt(this.props.navigation.state.params.members.length)-1 && this.props.navigation.state.params.members[i].id==this.props.navigation.state.params.members[i+1].id)
        {

          cc[j].push({ime:this.props.navigation.state.params.members[i].name})
          i++;
        }

       if(i<parseInt(this.props.navigation.state.params.members.length)-1)
        cc[j].push({ime:this.props.navigation.state.params.members[i].name})
        else if(this.props.navigation.state.params.members[i].id==this.props.navigation.state.params.members[i-1].id)
        cc[j].push({ime:this.props.navigation.state.params.members[i].name})
        else
        cc[j+1].push({ime:this.props.navigation.state.params.members[i].name})
       
        pp.push({prezime:this.props.navigation.state.params.members[0].lastname})
        j++;
        
    }
  }

    
   }
   prikazi=(indeks)=>{
 
    if(pom[indeks]==0)
    
   pom[indeks]=1;
   else
   
   pom[indeks]=0;
   
   this.setState({
  
    pita:1
  });
  
  }
  naSledecu=(p)=>{
    //alert("lalal");
    const formData=new FormData();
    formData.append("TableWed",1);
    formData.append("wedId",1);
    const fetchData={
      method:"post",
      body:formData
    };
    fetch(FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
      var tablestorender=[];
      var arr=[];
      var tablespom=[];
    response.forEach((x,i)=>tablespom.push(new Table(x.shape,x.capacity,this.state.wedid,x.idTable,parseInt(x.x),parseInt(x.y),0)));
    tablespom
  .forEach((table,index)=>//nije optimizovana al nece radi drugacije
  {
   
    tablestorender
    .push( <Draggable key={index}  renderSize={30} ref={(draggable) => {arr[index] = draggable;}} longPressDrag={()=>updateXanY(arr[index].state._value.x,arr[index].state._value.y,table,index)}  pressDrag={this.showDialog} reverse={false} renderColor='black' renderShape={table.shape} x={table.x} y={table.y} renderText={table.capacity+"\n"+table.id} />);
  });
  this.props.navigation.navigate('HostessAppThirdPage',{wedid:this.state.wedid,famid:p.id,tr:tablestorender});
    }) 
    .catch((error)=>{alert(error);});
  }

render() {
  pomarr=[];
  
  pp.forEach((p,indeks)=>{
  pomarr.push( <ListItem style={{flex:1,alignItems:'center'}}
  
  rightElement={<View style={{display:'flex',flexDirection:'row-reverse',flex:1}}><Button 
   onPress={()=>this.prikazi(indeks)}
   
   title='clanovi'
   titleStyle={{color:'#49beb7'}}
   buttonStyle={{ borderRadius: 30,borderColor:'#49beb7',display:'flex',flex:1,borderWidth:1,backgroundColor:'white'}}
   
  /><View style={{flex:0.2}}></View><Button title='Mesto' onPress={()=>this.naSledecu(p)} buttonStyle={{ borderRadius: 30,color:'white',backgroundColor:'#49beb7',display:'flex',flex:1}}></Button></View>}
   
  topDivider={true}
  bottomDivider={true}
       
        title={p.prezime}
        
       containerStyle={{width:screenWidth,backgroundColor:'white',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5,borderColor:'#696969',borderWidth:2}}
        titleStyle={{ fontWeight: 'bold', fontSize: 25,color: '#fbb0a9', }}
        subtitleStyle={{ fontWeight: 'bold', fontSize: 19,color: '#fbb0a9', }}
        
     />);
  
     if(pom[indeks]==1)
      {
        cc[indeks].forEach((osoba,indeks)=>
           pomarr.push(<ListItem
          
              
                       title={osoba.ime}
                      
                      containerStyle={{width:screenWidth/2,backgroundColor:'#fbb0a9',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5}}
                       titleStyle={{ fontWeight: 'bold', fontSize: 25,color: 'white', }}
                     
                       
                    />));
      
    
    }
  
  
  });
  
    return (
       <View style={{display:"flex",flexDirection:"column",width:'100%', height: '100%',backgroundColor:'#F1F1F1'}} >
          <ScrollView>
   <View>
   {pomarr}
  
  </View>
  </ScrollView>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  form: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
      backgroundColor: '#ecb3ff',
    },

   textinput:{
    flex:0.6,
    backgroundColor: '#edd7f4',
   
    justifyContent: 'center',
    height:40,
    marginLeft:10,
    },
    text:{
      flex:0.3,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 14,
      height:20,
     },
    container:{
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      backgroundColor: '#ecb3ff',
    },
   
});
