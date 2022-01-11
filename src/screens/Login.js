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
import Header from '../components/Header';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={globalStyles.container}>
       
            <Header/>
            <ScrollView contentContainerStyle={styles.signInscroll}>
              <View style={styles.signInListwrapper}>
                <View style={styles.signInListBox}>
                  <View style={styles.signInListCounter}>
                    <Text style={styles.signInListCounterText}>1</Text>
                  </View>
                  <View style={styles.signInListContent}>
                    <Text style={styles.signInListContentText}>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/sad.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/thinking.png')}
                        style={styles.smileyIcons}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.signInListBox}>
                  <View style={styles.signInListCounter}>
                    <Text style={styles.signInListCounterText}>2</Text>
                  </View>
                  <View style={styles.signInListContent}>
                    <Text style={styles.signInListContentText}>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/sad.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/thinking.png')}
                        style={styles.smileyIcons}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.signInListBox}>
                  <View style={styles.signInListCounter}>
                    <Text style={styles.signInListCounterText}>3</Text>
                  </View>
                  <View style={styles.signInListContent}>
                    <Text style={styles.signInListContentText}>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/sad.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/thinking.png')}
                        style={styles.smileyIcons}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.signInListBox}>
                  <View style={styles.signInListCounter}>
                    <Text style={styles.signInListCounterText}>4</Text>
                  </View>
                  <View style={styles.signInListContent}>
                    <Text style={styles.signInListContentText}>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/sad.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/thinking.png')}
                        style={styles.smileyIcons}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.signHereWrap}>
                <View style={styles.signRadio}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/checkbox.png')}
                    style={styles.checkboxIcon}
                  />
                  <Text style={styles.signInListContentText}>Sign here, I am committed to Quitting.</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={require('../assets/images/signature.png')}
                  style={styles.signatureImg}
                />
              </View>

              <View style={styles.signInFormBox}>
                <View style={globalStyles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Email"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value='johnrudio@gmail.com'
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
                    placeholder="Password"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="password"
                    autoCapitalize="none"
                  />
                  <View style={globalStyles.inputBoxTik}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/pass-off.png')}
                      style={globalStyles.inputBoxTikIcon}
                    />
                  </View>
                </View>

                <TouchableOpacity style={globalStyles.activateBt}>
                  <Text style={globalStyles.activateBtText}>
                    Sign in & activate device
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={styles.forgotPassText}>Forgot/Reset Password</Text>
              </TouchableOpacity>
              <View style={styles.dontHaveAc}>
                <Text style={styles.dontHaveAcText}>Don't have an Account? </Text>
                <TouchableOpacity>
                  <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
        
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signInListCounter: {
    backgroundColor: COLORS.lightGreen,
    width: 20,
    height: 20,
    borderRadius: 80,
    alignItems: 'center',
    marginRight: 15,
  },
  signInListwrapper: {
   width:'85%',
    paddingBottom: 10,
    paddingTop:25,
    //paddingHorizontal:10,
   // backgroundColor:'red'
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
    color: '#000',
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
    //backgroundColor: '#fff',
    margin: 50,
    marginVertical: 20,
    paddingVertical: 18,
    alignItems: 'center',
    width: '85%',

    // shadowColor: '#b2b2b2',
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.98,
    // shadowRadius: 11.95,

    // elevation: 18,
  },
  forgotPassText: {
    color: COLORS.darkBlue,
    //fontSize: 13,
  },
  signupText:{
    color: COLORS.darkBlue,
    fontWeight:'bold'
  },
  signInscroll: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    paddingBottom:25
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
    width: '85%',
    borderBottomColor: '#BEBEBE',
    borderBottomWidth: 1,
    paddingBottom: 10,
    //backgroundColor:'red',
    flexDirection:'column',
    justifyContent:'flex-start'
 
    //backgroundColor:'red'
  },
  signatureImg: {
    width:200,
    height: 40,
    alignSelf:'flex-start'
  },
  signInListContentText:{
    color:'#fff'
  },
  dontHaveAcText:{
    color:'#fff'
  }
});
