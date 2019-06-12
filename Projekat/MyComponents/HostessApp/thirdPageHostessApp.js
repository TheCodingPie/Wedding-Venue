import React from 'react';
import { Animated,StyleSheet, Text, View,Dimensions} from 'react-native';
import Draggable from 'react-native-draggable';
import Table from '../../Classes/classTable';
import styles from '../../styles'
import FetchConstants from '../../Classes/fetchConstants';
//FLOOR PLAN

//wedid-ju se pristupa preko this.props.navigation.state.params.wedid
//famid-ju se pristupa preko this.props.navigation.state.params.famid
/*
var table1=new Table('circle',10,1421,1,340,500,7);//ekran za telefon je za x=340 za y=530
var table2=new Table('circle',11,1421,2,0,50,10);
var table3=new Table('circle',12,1421,3,200,140,12);

var tablespom=[];//OVDE TREBA IZ BAZE DA SE STAVE STOLOVI


tablespom.push(table1);
tablespom.push(table2);
tablespom.push(table3);
var tablestorender=[];*/
var arr=[];
/*
tablespom
.forEach((table,index)=>
  tablestorender
  .push( <Draggable key={index} ref={(draggable) => {arr[index] = draggable;}} longPressDrag={()=>updateXanY(arr[index].state._value.x,arr[index].state._value.y,table.id)}  pressDrag={()=>prikaziGoste(table.id)/*alert(arr[index].state._value.x+" "+arr[index].state._value.y)} reverse={false} renderColor='black' renderShape={table.shape} x={table.x} y={table.y} renderText={table.peopleontable} />));
*/
  let stageAndWeddtable=[];
  if(Dimensions.get('window').width<500)
  {
  stageAndWeddtable.push( <Draggable key={1}   renderSize={85} renderColor='black' offsetX={-100} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
  stageAndWeddtable.push( <Draggable key={2}   renderSize={70} renderColor='black' offsetX={180} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );
  }
  else
  {
    stageAndWeddtable.push( <Draggable key={1}   renderSize={100} renderColor='black' offsetX={-290} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} />);
  stageAndWeddtable.push( <Draggable key={2}   renderSize={85} renderColor='black' offsetX={390} offsetY={15} renderShape='image' imageSource={require('../Images/stozamladence.png')} /> );
  
  }
  export default class ThirdPageScreenHostessApp extends React.Component {
 
 
  static navigationOptions={

    header:null
  }
  constructor(props)
  {
    super(props);
    this.state={
      wedid:this.props.navigation.state.params.wedid,
      famid:this.props.navigation.state.params.famid,
      person:null,
      animacija: new Animated.ValueXY({ x: 200, y: 500 }),
      tr:this.props.navigation.state.params.tr,
    }
    
  this.returnTableNum();
  }

  componentDidMount=()=>setTimeout(this._moveBall, 2000);//probaj joks sa tvojom bazom meni nije uptodate

  returnTables(){
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
    this.setState({tr:tablestorender});
    }) 
    .catch((error)=>{alert(error);});
  }

  
  returnTableNum(){
    const formData=new FormData();
      formData.append("findTableNum",1);
      formData.append("id",1);
      formData.append("weddingId",1);
    
      const fetchData={
        method:"post",
        body:formData
      };
     
      fetch(FetchConstants.url+"/Hostess.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
      this.setState({person:response});
      })
      .catch((error)=>{alert(error);});
  }



  _moveBall = () => {
    Animated.spring(this.state.animacija, {
      toValue: {x:parseInt(this.state.person.x), y:parseInt( this.state.person.y)},
    }).start()
  }
    
    render() {
  return (
    <View style={{backgroundColor:'white'}}>
       {stageAndWeddtable}
        {this.state.tr}
                <Animated.Image
                    source={require('../Images/buket.png')}
                    style={[styl.container,this.state.animacija.getLayout()]}
                    />
  </View>
      );
    }
  
  }

  const styl = StyleSheet.create({
    container: {
      
      position: 'absolute',
      height: 50,
      width: 50,
    },
    tennisBall: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
    },
    button: {
      paddingTop: 24,
      paddingBottom: 24,
    },
    buttonText: {
      fontSize: 24,
      color: '#333',
    }
  });
  
  