import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon} from 'native-base';
import styles from '../../styles'
import Draggable from 'react-native-draggable';

export default class FloorPlanScreen extends React.Component {
  
  constructor(){
    super();
    this.state={
        form:true,
        firstPlan:false,//50
        secondPlan:false,//100
        thirdPlan:false,//150

    }
  }
   render() {
     var p=true;
     if(p){
    return (
    <View>
     
      <Draggable reverse={false} renderSize={40}  offsetX={100} offsetY={0} renderColor='black' renderText='A' renderShape='req' pressDrag={()=>alert('touched!!')}/> 
      <Draggable reverse={false} renderSize={80} renderColor='red' renderShape='image' imageSource={require( '../Images/sto.jpg')}  offsetX={0} offsetY={0} renderText='B'/>
      <Draggable reverse={false} renderSize={46} renderColor='black' offsetX={-100} offsetY={200} renderText='A' pressDrag={()=>alert('touched!!')}/>
      <Draggable reverse={false} renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/>
      <Draggable reverse={false} renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/>
    
    </View>
    
    );
  }
  else{
    return (
      <View>
       
        <Draggable reverse={false} renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/> 
        
      
      </View>
    );
  }
}
}

