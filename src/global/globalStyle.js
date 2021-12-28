import {StyleSheet, Platform} from 'react-native';
import COLORS from './globalColors';

export const globalStyles = StyleSheet.create({
    bgstyle:{
     flex:1,
    },
    input: {
        fontFamily:
          Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'SF-Pro-Display-Regular',
        color: COLORS.darkBlue,
        paddingRight: 35,
        fontSize: 14,
        width: '100%',
        height: 50,
      },
      inputBox: {
        backgroundColor: '#fff',
        borderColor: '#dce6e9',
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
          color:'#fff',
          textAlign:'center',
          textTransform:'uppercase',
          fontSize:13
      }
});
{/* 
<View style={styles.signInListwrapper}></View> 
*/}
