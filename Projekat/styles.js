import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
      backgroundColor: '#ecb3ff',
    },
    floorPlanView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection:'column',
      
      backgroundColor: '#ecb3ff',
    },

    floorPlan: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection:'row',
      
      backgroundColor: 'red',
    },
   flex1:{
      flex:1,
      
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
    CircleShapeView: {
    width: 60,
    height: 60,
    borderRadius: 150/2,
    backgroundColor: '#00BCD4',
    margin:6
},
   
});

export default styles;
