import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {globalStyles} from '../global/globalStyle';
import COLORS from '../global/globalColors';

export default class AddDevice extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/bluegradbg.jpg')}
            style={globalStyles.bgstyle}>
            <View style={styles.profileTopPorfilePic}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/profile-pic.jpg')}
                style={styles.profileImg}
              />
            </View>
            <Text style={styles.profileName}>John Rudio</Text>

            <View style={styles.addDeviceWrap}>
              <Text style={styles.addDeviceText}>
                Welcome to KICK the habit mission! Please add your KICK device
              </Text>
              <TouchableOpacity>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/add-device.png')}
                  style={styles.addDeviceIcon}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  profileTopPorfilePic: {
    width: 130,
    height: 130,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: 25,
    marginBottom: 15,
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 25,
    //  fontWeight: 'bold',
    color: '#4D4D4D',
    // marginVertical: 15,
    textAlign: 'center',
  },
  addDeviceIcon: {
    width: 69,
    height: 69,
  },
  addDeviceWrap:{
      width:'80%',
      alignItems:'center',
      alignSelf:'center'
  },
  addDeviceText:{
      textAlign:'center',
      marginTop:60,
      marginBottom:25,
      color:'#000',
      fontSize:18,
      lineHeight:26
  }
});
