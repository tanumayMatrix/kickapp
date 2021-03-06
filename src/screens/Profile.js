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
  ScrollViewComponent,
} from 'react-native';
import {globalStyles} from '../global/globalStyle';
import COLORS from '../global/globalColors';
import Header from '../components/Header';


export default class Profile extends Component {

    
  render() {

    
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={globalStyles.container}>
        
            <Header/>
            <ScrollView>
            <View style={styles.profileTopPart}>
              <View style={styles.profileTopPorfileBlock}>
                <View style={styles.profileTopPorfilePic}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/profile-pic.png')}
                    style={styles.profileImg}
                  />
                </View>
                <TouchableOpacity style={styles.editIconWrap}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/edit-icon.png')}
                    style={styles.editIcon}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.profileName}>John Rudio</Text>
              <Text style={styles.profileNumber}>202-555-0134</Text>
              <Text style={styles.profileEmail}>johnrudio@gmail.com</Text>


              <TouchableOpacity style={styles.completeProfile}>
                <Text style={styles.completeProfileText}>
                  Complete your profile
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.profileFormPart}>
              {/* <View style={styles.profileFormTitle}>
                <Text style={styles.profileFormTitleText}>Address</Text>
                <TouchableOpacity>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/edit-info.png')}
                    style={styles.editInfoIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.profileFormWrap}>
                <Text style={styles.profileFormLabel}>Street</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    value='2772 Chatham Way'
                    style={styles.input}
                    placeholder="Street"
                    textContentType="Street"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.profileFormWrap}>
                <Text style={styles.profileFormLabel}>Street</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    value="Florida"
                    placeholder="Town"
                    textContentType="Town"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.profileFormWrap}>
                <Text style={styles.profileFormLabel}>Street</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    value='33901'
                    placeholder="Zip Code"
                    textContentType="Zip Code"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View> */}

              <View style={[styles.profileFormTitle, styles.profileFormTitleNew]}>
                <Text style={styles.profileFormTitleText}>Profile Information</Text>
                <TouchableOpacity>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/edit-info.png')}
                    style={styles.editInfoIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.profileFormWrap}>
                <Text style={styles.profileFormLabel}>Gender</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#fff"
                    value='Male'
                    style={styles.input}
                    placeholder="Gender"
                    textContentType="Gender"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.profileFormWrap}>
                <Text style={styles.profileFormLabel}>Date of Birth</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    value="06-01-1990"
                    placeholder="Date of Birth"
                    textContentType="Date of Birth"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.profileFormWrap}>
                <Text style={styles.profileFormLabel}>Weight(lb)</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    value='141 lb'
                    placeholder="Weight(lb)"
                    textContentType="Weight(lb)"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={[styles.profileFormTitle, styles.profileFormTitleNew]}>
                <Text style={styles.profileFormTitleText}>Support Team Member</Text>
                {/* <TouchableOpacity>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/edit-info.png')}
                    style={styles.editInfoIcon}
                  />
                </TouchableOpacity> */}
              </View>

              <View style={styles.profileFormWrap}>
                {/* <Text style={styles.profileFormLabel}>Date of Birth</Text> */}
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    value="Jonathan Smith"
                    placeholder="Team member name"
                    textContentType="Team member name"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.profileFormWrap}>
                {/* <Text style={styles.profileFormLabel}>Weight(lb)</Text> */}
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    value='022 5489 5634'
                    placeholder="Team member no."
                    textContentType="Team member nno."
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>
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
  profileTopPart: {
    width: '85%',
    borderRadius: 20,
    //backgroundColor: '#fff',
    padding: 15,
    alignSelf: 'center',
    marginVertical: 15,
    marginTop:50,
    alignItems: 'center',

    // shadowColor: '#b2b2b2',
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.98,
    // shadowRadius: 11.95,

    // elevation: 18,
  },
  editIconWrap: {},
  editIcon: {
    width: '100%',
    height: '100%',
  },
  profileTopPorfileBlock: {
    position: 'relative',
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: -65,
  },
  profileTopPorfilePic: {
    width: 100,
    height: 100,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  editIconWrap: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 52,
    right: -5,
    zIndex: 999,
    borderRadius:80,
    overflow: 'hidden',
  },
  profileName: {
    fontSize: 16,
    fontFamily:'Montserrat-Bold',

    color: '#fff',
    marginVertical: 15,
  },
  profileNumber: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
fontFamily:'Montserrat-Medium'

  },
  profileEmail: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
fontFamily:'Poppins-Regular'

  },
  completeProfileText: {
    fontSize: 13,
    color: COLORS.darkBlue,
    marginBottom: 8,
    textTransform: 'uppercase',
fontFamily:'Montserrat-Bold'

  },
  editInfoIcon: {
    width: 16,
    height: 16,
  },
  profileFormPart: {
    width: '85%',
    borderRadius: 20,
   // backgroundColor: '#fff',
    paddingVertical: 15,
    alignSelf: 'center',
    marginVertical: 15,
    // marginTop: 100,
    alignItems: 'center',

    // shadowColor: '#b2b2b2',
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.98,
    // shadowRadius: 11.95,

    // elevation: 18,
  },
  profileFormTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  profileFormTitleText: {
    fontSize: 18,
    color:'#fff',
fontFamily:'Montserrat-SemiBold'
  },
  profileFormLabel: {
    fontSize: 14,
    color: '#fff',
fontFamily:'Montserrat-Regular'

  },
  inputBox: {
    borderBottomColor: '#ABBDBE',
    borderBottomWidth: 1,
  },
  profileFormWrap: {
    width: '100%',
    marginBottom:15
  },
  input: {
    // backgroundColor:'red',
    padding: 0,
    color:'#fff',
    fontSize:14,
fontFamily:'Montserrat-SemiBold'


  },
  profileFormTitleNew:{
      marginTop:15
  }
});
