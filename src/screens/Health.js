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

export default class Health extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Header />

        <View style={styles.historicDataWrapper}>
          <View style={styles.historicDataContainer}>
            <View style={styles.batteryBox}>
              <View style={styles.batteryStatus}>
                <View style={styles.batteryStatusCol}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/battery.png')}
                    style={styles.batteryStatusIcon}
                  />
                  <Text style={styles.batteryStatusText}>97%</Text>
                </View>
                <Text style={styles.devicesText}>Devices</Text>
              </View>
            </View>
            <View style={styles.historicDataBox}>
              <Text style={styles.historicDataText}>Historic Data</Text>
            </View>

            <View style={styles.pointsBox}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/diamond.png')}
                style={styles.diomondIcon}
              />
              <Text style={styles.totalPoints}>64</Text>
              <Text style={styles.totalPointText}>Points</Text>
            </View>
          </View>

          <View style={[styles.noDeviceFoundWrap, {display:'none'}]}>
            <Text style={styles.noDeviceFoundText}>You don't have KICK devices connected go {"\n"}connected!</Text>
            <TouchableOpacity>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/add-device.png')}
                style={styles.addDevice}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* <View style={styles.healthDataChart}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/Scroll-Group-1.png')}
                style={styles.chartImg}
              />
            </View> */}

            <View style={styles.sleepHeartCalWrap}>
            <View style={styles.sleepHeartCalWrapLeft}>
            <TouchableOpacity style={[styles.sleepHeartCalBox]}>
                <View style={styles.sleepHeartCalBoxTitle}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/sleep-small.png')}
                    style={[styles.sleepIconSmall]}
                  />
                  <Text style={styles.sleepHeartCalBoxTitleText}>Sleep</Text>
                </View>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/sleep.png')}
                  style={[styles.sleepIcon, {marginVertical:50}]}
                />
                <Text style={styles.sleepHeartCalText1}>8/24</Text>
                <Text style={styles.sleepHeartCalText2}>Hours</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sleepHeartCalBox}>
                <View style={styles.sleepHeartCalBoxTitle}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/steps.png')}
                    style={styles.calSmall}
                  />
                  <Text style={styles.sleepHeartCalBoxTitleText}>Steps</Text>
                </View>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/stepsCount.png')}
                  style={styles.calories}
                />
                <Text style={styles.sleepHeartCalText1}>1500</Text>
                <Text style={styles.sleepHeartCalText2}>kcal</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.sleepHeartCalWrapRight}>
            <TouchableOpacity
                style={[styles.sleepHeartCalBox, styles.selected, {height:190}]}>
                <View style={styles.sleepHeartCalBoxTitle}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/heart.png')}
                    style={styles.heartSmall}
                  />
                  <Text style={styles.sleepHeartCalBoxTitleText}>Heart</Text>
                </View>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/heartLine.png')}
                  style={styles.heartlineIcon}
                />
                <Text style={styles.sleepHeartCalText1}>72</Text>
                <Text style={styles.sleepHeartCalText2}>bpm</Text>
              </TouchableOpacity>

             

              <TouchableOpacity style={styles.sleepHeartCalBox}>
                <View style={styles.sleepHeartCalBoxTitle}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/calories-small.png')}
                    style={styles.calSmall}
                  />
                  <Text style={styles.sleepHeartCalBoxTitleText}>Sleep</Text>
                </View>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/calories.png')}
                  style={[styles.calories, {marginVertical:46}]}
                />
                <Text style={styles.sleepHeartCalText1}>1500</Text>
                <Text style={styles.sleepHeartCalText2}>kcal</Text>
              </TouchableOpacity>
            </View>
             
            </View>

            {/* <View style={styles.healthMsg}>
              <Text style={styles.healthMsgTitle}>Great!</Text>
              <View style={styles.healthMsgSloganWrap}>
                
                <Text style={styles.healthMsgSlogan}>
                  You Are: Quite active
                </Text>
              </View>

              <Image
                resizeMode="stretch"
                source={require('../assets/images/happy2.png')}
                style={styles.happyIcon}
              />
            </View> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historicDataBox: {
    backgroundColor: COLORS.darkBlue,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 80,
    //marginTop: 70,
  },
  historicDataText: {
    color: '#fff',
    fontSize: 8,
    fontFamily:'Montserrat-Bold',
    textTransform: 'uppercase',
  },
  chartImg: {
    width: 181,
    height: 181,
  },
  healthDataChart: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  historicDataList: {
    width: '85%',
    alignSelf: 'center',
  },
  historicDataListItems: {
    backgroundColor: '#fff',
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  dataInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dataInfo2: {
    flexDirection: 'row',
  },
  sleep: {
    color: '#000',
    fontSize: 15,
  },
  hoursData: {
    color: COLORS.darkBlue,
    fontSize: 15,
  },
  progressLineWrap: {
    height: 8,
    borderRadius: 15,
    backgroundColor: '#E3E3E3',
  },
  progressLineInner: {
    height: 8,
    borderRadius: 15,
    backgroundColor: COLORS.yellow,
    width: '50%',
  },
  healthMsg: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  happyIcon: {
    height: 78,
    width: 78,
  },
  healthMsgTitle: {
    color: '#fff',
    fontSize: 32,
    textTransform: 'uppercase',
fontFamily:'Montserrat-SemiBold'
  },
  healthMsgSlogan: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 10,
fontFamily:'Montserrat-Medium'
  },
  healthMsgSloganWrap: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  youAre: {
    color: '#707070',
    fontSize: 20,
    marginVertical: 10,
  },
  pointsBox: {
    width: 55,
    // borderRadius: 12,
    // borderWidth: 1,
    // borderColor: '#7AA2AB',
    //backgroundColor: '#E4F4F5',
    paddingHorizontal: 7,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  diomondIcon: {
    width: 24,
    height: 24,
  },
  totalPoints: {
    color: COLORS.lightGreen,
    fontSize: 12,
    fontFamily:'Montserrat-Bold'
  },
  totalPointText: {
    color: COLORS.lightGreen,
    fontSize: 8,
    fontFamily:'Montserrat-Regular'
  },
  mobIcon: {
    width: 55,
    height: 80,
  },
  batteryStatusIcon: {
    width: 24,
    height: 13,
  },
  batteryBox: {
    width: 55,
    height: 80,
    position: 'relative',
  },
  batteryStatus: {
    position: 'absolute',
    top: 20,
    left: 20,
    alignItems: 'center',
  },
  devicesText: {
    fontSize: 8,
    color: COLORS.lightGreen,
fontFamily:'Montserrat-SemiBold'
  },
  batteryStatusText: {
    fontSize: 8,
    color: COLORS.lightGreen,
    marginLeft: 5,
    fontFamily:'Montserrat-Bold'
  },
  batteryStatusCol: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  pointsBatteryWrap: {
    position: 'absolute',
    right: 15,
    top: 190,
  },
  historicDataContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sleepHeartCalWrap: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 45,
    flexWrap:'wrap'
  },
  sleepIconSmall: {
    width: 14,
    height: 16,
  },
  sleepIcon: {
    width: 60,
    height: 60,
    marginVertical: 25,
    alignSelf: 'center',
  },
  sleepHeartCalBox: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: '#ABBDBE',
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'column',
    margin:10
    // alignItems:'center'
  },
  sleepHeartCalWrapLeft:{
    width:'50%',
    padding: 10,
  },
  sleepHeartCalWrapRight:{
    width:'50%',
    padding: 10,
  },
  sleepHeartCalBoxFirst:{
    height:250
  },

  selected: {
    backgroundColor: COLORS.darkBlue,
    borderColor:COLORS.darkBlue
  },
  sleepHeartCalBoxTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sleepHeartCalBoxTitleText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
fontFamily:'Montserrat-Medium'

  },
  sleepHeartCalText1: {
    color: '#fff',
    fontFamily:'Montserrat-Bold',
    fontSize:14
  },
  sleepHeartCalText2: {
    color: '#fff',
fontFamily:'Montserrat-Regular',
fontSize:12


  },
  heartSmall: {
    width: 18,
    height: 14,
  },
  heartlineIcon: {
    width: 83,
    height: 63,
    marginVertical: 25,
    alignSelf: 'center',
  },
  calSmall: {
    width: 17,
    height: 17,
  },
  calories: {
    width: 65,
    height: 65,
    marginVertical: 25,
    alignSelf: 'center',
  },
  addDevice: {
    width: 68,
    height: 68,
  },
  noDeviceFoundWrap:{
    flexDirection:'column',
    alignItems:'center'
  },
  noDeviceFoundText:{
    color:'#fff',
    marginVertical:25,
    textAlign:'center',
    lineHeight:22
  }
});
