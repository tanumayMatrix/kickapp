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

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/bluegradbg.jpg')}
            style={globalStyles.bgstyle}>
            <ScrollView contentContainerStyle={styles.signInscroll}>
              <View style={styles.signInListwrapper}>
                <View style={styles.signInListBox}>
                  <View style={styles.signInListCounter}>
                    <Text style={styles.signInListCounterText}>1</Text>
                  </View>
                  <View style={styles.signInListContent}>
                    <Text>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
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
                    <Text>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
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
                    <Text>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
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
                    <Text>Lorem ipsum dolor sit amet, consectetur? </Text>
                    <View style={styles.smileyWrap}>
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
                        style={styles.smileyIcons}
                      />
                      <Image
                        resizeMode="stretch"
                        source={require('../assets/images/smile.png')}
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
                  <Text>Sign here, I am committed to Quitting.</Text>
                </View>
                <Image
                  resizeMode="stretch"
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
                <Text>Don't have an Account? </Text>
                <TouchableOpacity>
                  <Text style={styles.forgotPassText}>Signup</Text>
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
  signInListBox: {},
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
  },
  forgotPassText: {
    color: COLORS.darkBlue,
    fontSize: 13,
  },
  signInscroll: {
    alignItems: 'center',
    justifyContent: 'center',
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
