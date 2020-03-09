import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity,Image,Dimensions } from 'react-native';
import styles from '../../styles';
import { ListItem,Button } from 'react-native-elements'
import FetchConstants from '../../Classes/fetchConstants';
let screenWidth=Dimensions.get('window').width;
var arr=[];

function compare( a, b ) {
  if ( a.predjelo < b.predjelo ){
    return -1;
  }
  if ( a.predjelo > b.predjelo ){
    return 1;
  }
  return 0;
}



export default class SecondPageScreenWaiterApp extends React.Component {

  static navigationOptions={

    header:null
  }
  constructor(props){
    super(props);
    this.state={
      waiterId:this.props.navigation.state.params.waiterId,
      date:new Date().toISOString().split('T')[0],//mora danasnji datum da bude
      listaPredjela:[],
      p:1
    }
   this.fja();
 
  }

  napravi=()=>
  {
    if( this.state.listaPredjela.length==0)
    return;
   this.state.listaPredjela.sort((a, b)=> a.idStola - b.idStola);

   this.state.listaPredjela.sort(compare);
   let j=-1;
let i=0;
let pompredjela=[];

let pompredjelo={
  predjelo: this.state.listaPredjela[0].predjelo,
  brojPuta:1,
  idStola: this.state.listaPredjela[0].idStola,
  gosti:[]
};

pompredjelo.gosti.push(this.state.listaPredjela[0].idGosta);
if(this.state.listaPredjela.length!=1)
while(i< this.state.listaPredjela.length-1)
  {
    
    if( this.state.listaPredjela[i].predjelo== this.state.listaPredjela[i+1].predjelo &&  this.state.listaPredjela[i].idStola== this.state.listaPredjela[i+1].idStola)
    {
      pompredjelo.predjelo= this.state.listaPredjela[i].predjelo;
      pompredjelo.brojPuta++;
      pompredjelo.idStola= this.state.listaPredjela[i].idStola;
      pompredjelo.gosti.push(this.state.listaPredjela[i+1].idGosta);
    }
    else{
    
      pompredjela.push({predjelo:pompredjelo.predjelo,
        brojPuta:pompredjelo.brojPuta,
        idStola:pompredjelo.idStola,
        gosti:pompredjelo.gosti
      }
        );
    
      pompredjelo.predjelo= this.state.listaPredjela[i+1].predjelo;
      pompredjelo.idStola= this.state.listaPredjela[i+1].idStola;
      pompredjelo.brojPuta=1;
      pompredjelo.gosti=[];
      pompredjelo.gosti.push(this.state.listaPredjela[i+1].idGosta)
    
    
    }
    if(i== this.state.listaPredjela.length-2)
    pompredjela.push({predjelo:pompredjelo.predjelo,
      brojPuta:pompredjelo.brojPuta,
      idStola:pompredjelo.idStola,
      gosti:pompredjelo.gosti
    }
      );
    i++;

   

  }
  else{

    pompredjela.push({predjelo:this.state.listaPredjela[0].predjelo,
      brojPuta:1,
      idStola:this.state.listaPredjela[0].idStola,
      gosti:[]}
      );
      pompredjela[0].gosti.push(this.state.listaPredjela[0].idGosta);
  }
  pompredjela.sort((a, b)=> a.idStola - b.idStola);

  this.setState({listaPredjela:pompredjela});
 

  }

  fja=()=>
  {
    const formData=new FormData();
      formData.append("returnStarters",1);
      formData.append("date",this.state.date);
      formData.append("waiterId",this.state.waiterId);
      const fetchData={
        method:"post",
        body:formData
      };
      fetch(FetchConstants.url+"/Waiter.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
        //alert(response);
        let pom=[];
        response.forEach((x)=>{
          pom.push({idStola:x.idTable,predjelo:x.starter,idGosta:x.idMember});
        });
        this.setState({listaPredjela:pom});
        this.napravi();
      })
      .catch((error)=>{alert(error);});
  }

  
  brisiItem=(indeks)=>{

    // this.state.listaJela[indeks].gosti.forEach(idgosta=>alert(idgosta));
     const formData=new FormData();
     formData.append("updateMemberStarter",1);
   formData.append("idMember",JSON.stringify(this.state.listaPredjela[indeks].gosti));
   const fetchData={
     method:"post",
     body:formData
   };
   fetch(FetchConstants.url+"/Waiter.php",fetchData)
   .then((response)=>response.json())
   .then((response)=>{
    
    // alert(response);
    
   })
   .catch((error)=>{alert(error);});
   
     this.state.listaPredjela.splice(indeks, 1);
     arr[indeks].scrollTo({ x: 0, y: 0, animated: true });
     this.setState({
         p:2
   });
 }

render() {
     
 return (
         
         <View  style={{backgroundColor:'#F1F1F1',flex:1}}>
       <ScrollView>
   
       <View style={{display:'flex',flexDirection:'column'}}>
      <View style={{alignItems:'center',backgroundColor:'#49beb7',height:50,justifyContent:'center'}}>
       <Text style={{color:'white',fontSize:30}}>PREDJELA </Text>
       </View>
  {
    this.state.listaPredjela.map((pjelo, indeks) => (
 
   
    <ScrollView horizontal={true}  ref={(scrollView) => {arr[indeks] = scrollView;}} onMomentumScrollEnd={
      (e) => {
       

        
     if(e.nativeEvent.contentOffset.x>=screenWidth-(screenWidth/2))
      
      this.brisiItem(indeks)}}
       >
    
   <ListItem style={{flex:1,alignItems:'center', paddingssRight:25}}
  
   rightElement={<Button
    onPress={()=>this.brisiItem(indeks)}
    
    title={pjelo.idStola}
    titleStyle={{color:'white'}}
    buttonStyle={{ borderColor:'#49beb7',height: 50, width: 50, borderRadius: 30,borderWidth:1,backgroundColor:'#49beb7'}}
    
  />}
    
   topDivider={true}
   bottomDivider={true}
        key={indeks} 
         title={pjelo.predjelo}
         subtitle={" broj porcija: "+pjelo.brojPuta}
         containerStyle={{width:screenWidth-10,backgroundColor:'white',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5,borderColor:'#696969',borderWidth:2}}
         titleStyle={{ fontWeight: 'bold', fontSize: 25,color: '#fbb0a9', }}
         subtitleStyle={{ fontWeight: 'bold', fontSize: 19,color: '#49beb7', }}
      />
        <View  key={indeks} style={{width:screenWidth,alignItems:'center',justifyContent:'center', backgroundColor:'red',marginTop: 20,borderRadius:20,display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
      <Text style={{color:'white',fontSize:30,paddingLeft:10}}>BRIŠI</Text>
       </View>
      </ScrollView>
    ))
   
  }
  
</View>
</ScrollView>
</View>
    
      );
    }
  }


  