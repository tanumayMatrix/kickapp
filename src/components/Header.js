import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import COLORS from '../global/globalColors';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={[styles.backIconWrap]}>
          <Image
            resizeMode="stretch"
            source={require('../assets/images/back.png')}
            style={[styles.backIcon]}
          />

          {/* <Image
            resizeMode="stretch"
            source={require('../assets/images/hamburger-menu.png')}
            style={[styles.backIcon]}
          /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Historic Data</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backIconWrap: {
    position: 'absolute',
    left: 15,
    top: 25,
    //  backgroundColor:'red'
  },
  backIcon: {
    width: 17,
    height: 16,
  },
  headerTitle: {
    color:'#fff',
    fontSize: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
});
