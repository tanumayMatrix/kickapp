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

export default class Verification extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
       
          <Header/>
          <View style={styles.verificationwrapper}>
            <Text style={styles.verificationTitle}>
              Verify your number with{'\n'}
              codes sent to you
            </Text>

            <View style={styles.verificationInputWrap}>
              <View style={[styles.verificationInputBox, styles.filled]}>
                <TextInput
                  style={[styles.input, styles.filledInput]}
                  textContentType="username"
                  underlineColorAndroid="transparent"
                  keyboardType="number-pad"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.verificationInputBox}>
                <TextInput
                  style={styles.input}
                  textContentType="username"
                  underlineColorAndroid="transparent"
                  keyboardType="number-pad"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.verificationInputBox}>
                <TextInput
                  style={styles.input}
                  textContentType="username"
                  underlineColorAndroid="transparent"
                  keyboardType="number-pad"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.verificationInputBox}>
                <TextInput
                  style={styles.input}
                  textContentType="username"
                  underlineColorAndroid="transparent"
                  keyboardType="number-pad"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.verificationCodeNotReceived}>
              <Text style={styles.verificationCodeNotReceivedText}>I didn't receive the code, </Text>
              <TouchableOpacity>
                <Text style={styles.resendText}>Resend</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={[globalStyles.activateBt, styles.continueBt]}>
                      <Text style={globalStyles.activateBtText}>
                      CONTINUE
                      </Text>
                    </TouchableOpacity>

          </View>
     
      </View>
    );
  }
}
const styles = StyleSheet.create({

  verificationwrapper: {
    paddingHorizontal: 50,
    paddingVertical: 50,
    alignItems: 'center',
  },
  verificationTitle: {
    textAlign: 'center',
    color:'#fff'
  },
  verificationInputWrap: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 50,
  },
  verificationInputBox: {
    borderColor: '#E0ECDE',
    borderWidth: 1,
    width: '27%',
    borderRadius: 25,
    paddingHorizontal: 15,
    // backgroundColor: COLORS.darkBlue,
    alignItems: 'center',
    marginHorizontal: 5,
    // height:70
  },
  filled: {
    backgroundColor: COLORS.darkBlue,
  },
  input: {
    height: 70,
    textAlign: 'center',
    width: '50%',
    fontSize: 20,
    color: COLORS.darkBlue,
  },
  filledInput: {
    color: '#fff',
  },
  verificationCodeNotReceived: {
    flexDirection: 'row',
  },
  resendText:{
      color:COLORS.darkBlue,
      fontWeight:'bold'

  },
  continueBt:{
      marginTop:100
  },
  verificationCodeNotReceivedText:{
    color:'#fff'
  }
});
