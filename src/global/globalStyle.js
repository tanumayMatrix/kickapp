import {StyleSheet, Platform} from 'react-native';
import COLORS from './globalColors';

export const globalStyles = StyleSheet.create({
  
    container:{
      flex: 1,
      backgroundColor: '#000',
    },
    input: {
        fontFamily:
          Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Regular',
        color: '#fff',
        paddingRight: 35,
        fontSize: 14,
        width: '100%',
        height: 50,
      },
      inputBox: {
        backgroundColor: '#000',
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        position:'relative'
      },
      inputBoxTik:{
          width:24,
          height:24,
          position:'absolute',
          right:10
      },
      inputBoxTikIcon:{
          width:'100%',
          height:'100%'
      },
      activateBt:{
      
          paddingVertical:15,
          paddingHorizontal:10,
          borderRadius:80,
          backgroundColor:COLORS.darkBlue,
          alignSelf:'stretch'
        // display:'flex'
      },
      activateBtText:{
fontFamily:'Montserrat-Bold',
          color:'#fff',
          textAlign:'center',
          textTransform:'uppercase',
          fontSize:13,
      },
      lineBt:{
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:80,
        borderWidth:1,
        borderColor:'#ABBDBE',
        backgroundColor:'#000',
        alignSelf:'stretch'
      },
      lineBtText:{
        color:'#ABBDBE',
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:13,
fontFamily:'Montserrat-Bold'

    },
    
});
{/* 
<View style={styles.signInListwrapper}></View> 
*/}
