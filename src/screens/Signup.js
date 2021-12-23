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

export default class Signup extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/bluegradbg.jpg')}
            style={globalStyles.bgstyle}>
            <ScrollView contentContainerStyle={styles.signInscroll}>
              
              <View  style={styles.signInFormBoxMainWrap}>

             
              <View style={styles.signInFormBox}>
                <View style={globalStyles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Full name"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <View style={globalStyles.inputBoxTik}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/tik.png')}
                      style={globalStyles.inputBoxTikIcon}
                    />
                  </View>
                </View>
                <View style={globalStyles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Email"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <View style={globalStyles.inputBoxTik}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/tik.png')}
                      style={globalStyles.inputBoxTikIcon}
                    />
                  </View>
                </View>

                <View style={globalStyles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Mobile No."
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                  />
                  <View style={globalStyles.inputBoxTik}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/tik.png')}
                      style={globalStyles.inputBoxTikIcon}
                    />
                  </View>
                </View>

                <View style={globalStyles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Address Line 1"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                  <View style={globalStyles.inputBoxTik}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/tik-off.png')}
                      style={globalStyles.inputBoxTikIcon}
                    />
                  </View>
                </View>

                <View style={globalStyles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Address Line 2"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                  <View style={globalStyles.inputBoxTik}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/tik-off.png')}
                      style={globalStyles.inputBoxTikIcon}
                    />
                  </View>
                </View>

                <View style={globalStyles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Zip Code"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                  />
                  <View style={globalStyles.inputBoxTik}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/tik-off.png')}
                      style={globalStyles.inputBoxTikIcon}
                    />
                  </View>
                </View>

                <TouchableOpacity style={globalStyles.activateBt}>
                  <Text style={globalStyles.activateBtText}>CONTINUE</Text>
                </TouchableOpacity>
               
              </View>
              </View>
              <View style={styles.signUpPartBottom}>
                <Text>You have an account? </Text>
                <TouchableOpacity>
                
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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

  signInListCounter: {
    backgroundColor: COLORS.yellow,
    width: 20,
    height: 20,
    borderRadius: 80,
    alignItems: 'center',
    marginRight: 15,
  },
  signInListwrapper: {
    padding: 50,
    paddingBottom: 10,
  },
  smileyIcons: {
    width: 14,
    height: 14,
    marginRight: 5,
    marginTop: 5,
  },
  smileyWrap: {
    flexDirection: 'row',
  },
  signInListCounterText: {
    color: '#fff',
  },
  signInListBox: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 15,
    flexDirection: 'row',
    marginBottom: 15,
  },
  signInFormBox: {
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff',
    margin: 50,
    marginVertical: 20,
    paddingVertical: 18,
    alignItems: 'center',
  width: '80%',
    marginTop: 50,
   
  },
signInFormBoxMainWrap:{
    flex:16
},
  signUpPartBottom: {
    flexDirection: 'row',
    flex:2
  },
  forgotPassText: {
    color: COLORS.darkBlue,
    fontSize: 13,
  },
  signInscroll: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flex:1
  },
  dontHaveAc: {
    flexDirection: 'row',
    marginTop: 25,
  },
  signRadio: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  signHereWrap: {
    flex: 1,
    width: '80%',
    borderBottomColor: '#BEBEBE',
    borderBottomWidth: 1,
    paddingBottom: 10,
    //backgroundColor:'red'
  },
  signatureImg: {
    height: 40,
  },
});
