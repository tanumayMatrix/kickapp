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
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bluegradbg.jpg')}
          style={globalStyles.bgstyle}>
          <Header />

          <View style={styles.historicDataWrapper}>
            <View style={styles.pointsBatteryWrap}>
              <View style={styles.pointsBox}>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/diamond.png')}
                  style={styles.diomondIcon}
                />
                <Text style={styles.totalPoints}>64</Text>
                <Text style={styles.totalPointText}>Points</Text>
              </View>

              <View style={styles.batteryBox}>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/mob.png')}
                  style={styles.mobIcon}
                />
                <View style={styles.batteryStatus}>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/battery.png')}
                    style={styles.batteryStatusIcon}
                  />
                  <Text style={styles.batteryStatusText}>97%</Text>
                </View>
              </View>
            </View>

            <View style={styles.historicDataBox}>
              <Text style={styles.historicDataText}>Historic Data</Text>
            </View>
            <View style={styles.healthDataChart}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/Scroll-Group-1.png')}
                style={styles.chartImg}
              />
             
            </View>

            <View style={styles.historicDataList}>
              <View style={styles.historicDataListItems}>
                <View style={styles.dataInfo}>
                  <Text style={styles.sleep}>Sleep</Text>
                  <View style={styles.dataInfo2}>
                    <Text style={styles.hoursData}>8/24 </Text>
                    <Text style={styles.hoursText}>hours</Text>
                  </View>
                </View>
                <View style={styles.progressLineWrap}>
                  <View
                    style={[styles.progressLineInner, {width: '20%'}]}></View>
                </View>
              </View>

              <View style={styles.historicDataListItems}>
                <View style={styles.dataInfo}>
                  <Text style={styles.sleep}>Heart</Text>
                  <View style={styles.dataInfo2}>
                    <Text style={styles.hoursData}>72 </Text>
                    <Text style={styles.hoursText}>bpm</Text>
                  </View>
                </View>
                <View style={styles.progressLineWrap}>
                  <View
                    style={[styles.progressLineInner, {width: '80%'}]}></View>
                </View>
              </View>

              <View style={styles.historicDataListItems}>
                <View style={styles.dataInfo}>
                  <Text style={styles.sleep}>Calories</Text>
                  <View style={styles.dataInfo2}>
                    <Text style={styles.hoursData}>1500</Text>
                    <Text style={styles.hoursText}> kcal</Text>
                  </View>
                </View>
                <View style={styles.progressLineWrap}>
                  <View
                    style={[styles.progressLineInner, {width: '60%'}]}></View>
                </View>
              </View>
            </View>

            <View style={styles.healthMsg}>
              <Text style={styles.healthMsgTitle}>Great!</Text>
              <View style={styles.healthMsgSloganWrap}>
                <Text style={styles.youAre}>You Are :</Text>
                <Text style={styles.healthMsgSlogan}> Quite active</Text>
              </View>

              <Image
                resizeMode="stretch"
                source={require('../assets/images/happy.png')}
                style={styles.happyIcon}
              />
            </View>
          </View>
        </ImageBackground>
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
    marginTop:25
  },
  historicDataText: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  chartImg: {
    width: 181,
    height: 181,
  },
  healthDataChart: {
    alignSelf: 'center',
    paddingVertical: 40,
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
    color: COLORS.darkBlue,
    fontSize: 30,
    textTransform: 'uppercase',
  },
  healthMsgSlogan: {
    color: '#4D4D4D',
    fontSize: 20,
    marginVertical: 10,
  },
  healthMsgSloganWrap: {
    flexDirection: 'row',
  },
  youAre: {
    color: '#707070',
    fontSize: 20,
    marginVertical: 10,
  },
  pointsBox: {
    width: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7AA2AB',
    backgroundColor: '#E4F4F5',
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
    color: COLORS.darkGrey,
    fontSize: 14,
  },
  totalPointText: {
    color: COLORS.darkGrey,
    fontSize: 10,
  },
  mobIcon: {
    width: 55,
    height: 80,
  },
  batteryStatusIcon: {
    width: 13,
    height: 24,
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
  batteryStatusText: {
    fontSize: 10,
  },
  historicDataWrapper:{
    position:'relative'
  },
  pointsBatteryWrap: {
    position: 'absolute',
    right: 15,
    top:25
  },
});
