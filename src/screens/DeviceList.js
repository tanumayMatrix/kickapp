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
export default class DeviceList extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/bluegradbg.jpg')}
            style={globalStyles.bgstyle}>
            <View style={styles.deviceListWrap}>
              <View style={styles.profileFormWrap}>
                {/* <Text style={styles.profileFormLabel}>Add your KICK device</Text> */}
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    value="Add your KICK device"
                    placeholder="Add your KICK device"
                    textContentType="Add your KICK device"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <Text style={styles.deviceListText}>Device List</Text>
              <Text style={styles.deviceListTextSearching}>
                Searching for devices
              </Text>

              <View style={styles.deviceListContainer}>
              
                <View style={styles.deviceListBox}>
                  <View style={styles.deviceListCol1}>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/tik.png')}
                      style={styles.tikIcon}
                    />
                  </View>
                  <View style={styles.deviceListName}>
                    <Text style={styles.deviceListNameText}>Kick Device</Text>
                    <Text style={styles.connectedText}>Connected</Text>
                  </View>
                  <View style={styles.deviceListCol2}>
                  <Image
                      resizeMode="stretch"
                      source={require('../assets/images/device-found.png')}
                      style={styles.deviceFoundIcon}
                    />
                  </View>
                </View>

                <View style={styles.deviceListBox}>
                  {/* <View style={styles.deviceListCol1}>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/tik.png')}
                      style={styles.tikIcon}
                    />
                  </View> */}
                  <View style={styles.deviceListName}>
                    <Text style={styles.deviceListNameText}>Kick Device</Text>
                    {/* <Text style={styles.connectedText}>Connected</Text> */}
                  </View>
                  <View style={styles.deviceListCol2}>
                  <Image
                      resizeMode="stretch"
                      source={require('../assets/images/device-found.png')}
                      style={[styles.deviceFoundIcon, styles.deviceFoundIconInactive]}
                    />
                  </View>
                </View>
              </View>
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
  deviceListWrap: {
    paddingVertical: 20,
    width: '80%',
    alignSelf: 'center',
    flex:1
  },
  profileFormWrap: {
    width: '100%',
    marginBottom: 15,
  },
  profileFormLabel: {
    fontSize: 14,
    color: '#7B7A7A',
  },
  inputBox: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  input: {
    // backgroundColor:'red',
    //padding: 0,
    color: '#000000',
    fontSize: 18,
  },
  deviceListText: {
    fontSize: 18,
    color: '#000',
    marginTop: 25,
  },
  deviceListTextSearching: {
    fontSize: 12,
    color: '#646464',
  },
  deviceListContainer:{
    flex:6,
    marginTop:30
   /// backgroundColor:'red'
  },
  deviceListBox: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 15,
    alignItems:'center',
   //flex: 1,
    flexDirection:'row',
    marginVertical:8
   
  },
  deviceListCol1:{
    flex:1
  },
  deviceListName:{
    flex:5
  },
  deviceListCol2:{
    flex:1,
   // backgroundColor:'red',
    
  },
  tikIcon:{
    width:24,
    height:24
  },
  deviceListNameText:{
    fontSize:16,
    color:'#000'
  },
  deviceFoundIcon:{
    width:24,
    height:24,
    alignSelf:'flex-end'
  },
  deviceFoundIconInactive:{
    opacity: 0.4,
  },
  connectedText:{
    fontSize:10,
    color:'#7A7A7A'
  }
});
