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
        <View style={globalStyles.container}>
          <View style={styles.profileTopPorfilePic}>
            <Image
              resizeMode="stretch"
              source={require('../assets/images/profile-pic.png')}
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
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: 'red',
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
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    // marginVertical: 15,
    textAlign: 'center',
  },
  addDeviceIcon: {
    width: 69,
    height: 69,
  },
  addDeviceWrap: {
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addDeviceText: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 45,
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 26,
  },
});
