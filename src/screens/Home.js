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

export default class Home extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Header />

        <View style={styles.historicDataWrapper}>
          {/* <View style={styles.pointsBatteryWrap}>
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
                </View> */}

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

          <View style={styles.healthDataChart}>
            <Image
              resizeMode="stretch"
              source={require('../assets/images/Scroll-Group-1.png')}
              style={styles.chartImg}
            />
          </View>

          <View style={styles.healthMsg}>
            <Text style={styles.healthMsgTitle}>Slow & Steady</Text>
            <View style={styles.healthMsgSloganWrap}>
              {/* <Text style={styles.youAre}>You Are :</Text> */}
              <Text style={styles.healthMsgSlogan}>
              You will get to that date
              </Text>
            </View>

            <Image
              resizeMode="stretch"
              source={require('../assets/images/happy2.png')}
              style={styles.happyIcon}
            />
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
    fontSize: 12,
    textTransform: 'uppercase',
  },
  chartImg: {
    width: 181,
    height: 181,
  },
  healthDataChart: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom:100
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
    fontSize: 30,
    textTransform: 'uppercase',
  },
  healthMsgSlogan: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
  },
  healthMsgSloganWrap: {
    flexDirection: 'row',
    marginBottom:15
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
    fontSize: 14,
  },
  totalPointText: {
    color: COLORS.lightGreen,
    fontSize: 10,
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
    fontSize: 10,
    color: COLORS.lightGreen,
  },
  batteryStatusText: {
    fontSize: 10,
    color: COLORS.lightGreen,
    marginLeft: 5,
  },
  batteryStatusCol: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
