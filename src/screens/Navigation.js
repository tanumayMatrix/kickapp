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

export default class Navigation extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
    
          <View style={styles.navProfileTop}>
            <TouchableOpacity style={styles.navClose}>
             
              <Image
                resizeMode="stretch"
                source={require('../assets/images/close.png')}
                style={styles.navCloseIcon}
              />
            </TouchableOpacity>
            <View style={styles.navProfileImage}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/profile-pic.png')}
                style={styles.profileImg}
              />
            </View>
            <View style={styles.navProfileNameWrap}>
              <Text style={styles.navProfileNametext}>John Rudio</Text>
              {/* <Text style={styles.navProfileLoaction}>Miami, Florida</Text> */}
            </View>
          </View>
          <View style={styles.navList}>
            <TouchableOpacity style={styles.navListItem}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/profile.png')}
                style={styles.navListImg}
              />
              <Text style={styles.navListItemName}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navListItem}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/manage-device.png')}
                style={styles.navListImg}
              />
              <Text style={styles.navListItemName}>Devices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navListItem}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/health.png')}
                style={styles.navListImg}
              />
              <Text style={styles.navListItemName}>Health</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navListItem}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/faq.png')}
                style={styles.navListImg}
              />
              <Text style={styles.navListItemName}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navListItem}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/feedback.png')}
                style={styles.navListImg}
              />
              <Text style={styles.navListItemName}>User Feedback</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.navListItem}>
              <Image
                resizeMode="contain"
                source={require('../assets/images/preferences.png')}
                style={styles.navListImg}
              />
              <Text style={styles.navListItemName}>Preference</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.logoutWrap}>
            <TouchableOpacity style={styles.navListItem}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/logout.png')}
                style={styles.navListImg}
              />
              <Text style={styles.navListItemName}>Logout</Text>
            </TouchableOpacity>
          </View>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
  },
  navProfileTop: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 50,
    flex: 2,
    backgroundColor:COLORS.darkBlue
  },
  navList: {
    flex: 8,
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  logoutWrap: {
    flex: 1.5,
   // backgroundColor: '#fff',
    paddingHorizontal: 30,
    // paddingVertical:25,
    borderTopColor: '#ABBDBE',
    borderTopWidth: 1,
    justifyContent: 'center',
  },
  navProfileImage: {
    width: 75,
    height: 75,
    borderRadius: 80,
    overflow: 'hidden',
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  navProfileNameWrap: {
    marginLeft: 20,
  },
  navProfileNametext: {
    fontSize: 24,
    fontFamily:'Montserrat-Bold',
    color: '#fff',
  },
  navProfileLoaction: {
    fontSize: 14,
    color: '#1C1C1C',
  },
  navListImg: {
    maxWidth: 26,
    maxHeight: 26,
  },
  navListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  navListItemName: {
    fontSize: 14,
    color: '#fff',
fontFamily:'Montserrat-Medium',
    marginLeft: 10,
  },
  navClose:{
      position: 'absolute',
      right:20,
      top:20
  },
  navCloseIcon:{
      width:15,
      height:15
  }
});
