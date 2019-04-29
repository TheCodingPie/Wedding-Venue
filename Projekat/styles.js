import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
      backgroundColor: '#ecb3ff',
    },

   textinput:{
    backgroundColor: '#edd7f4',
   flex:0.6,
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

export default styles;
