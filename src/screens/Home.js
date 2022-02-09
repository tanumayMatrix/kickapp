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

        <View style={styles.healthMsg}>
            <Text style={styles.healthMsgTitle}>Slow & Steady</Text>
            <View style={styles.healthMsgSloganWrap}>
              {/* <Text style={styles.youAre}>You Are :</Text> */}
              <Text style={styles.healthMsgSlogan}>
              Your daily limit is close
              </Text>
            </View>

            <Image
              resizeMode="stretch"
              source={require('../assets/images/thumbs-up.png')}
              style={styles.happyIcon}
            />
          </View>
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
            <View style={styles.homeLeftRow}>
              <View style={styles.batteryBox}>
                <View style={styles.batteryStatus}>
                  <View style={styles.batteryStatusCol}>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/battery.png')}
                      style={styles.batteryStatusIcon}
                    />
                    
                  </View>
                  <Text style={styles.batteryStatusText}>97%</Text>
                  <Text style={styles.devicesText}>Device</Text>
                </View>
              </View>

              <View style={styles.pointsBox}>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/limit.png')}
                  style={styles.diomondIcon}
                />
                <Text style={styles.totalPoints}>50</Text>
                <Text style={styles.totalPointText}>mg limit</Text>
              </View>
              <View style={styles.pointsBox}>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/appointment.png')}
                  style={styles.diomondIcon}
                />
                <Text style={styles.totalPoints}>Mar 5</Text>
                <Text style={styles.totalPointText}>quit date</Text>
              </View>
              <View style={styles.pointsBox}>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/days.png')}
                  style={styles.diomondIcon}
                />
                <Text style={styles.totalPoints}>64</Text>
                <Text style={styles.totalPointText}>days remain</Text>
              </View>
              <View style={styles.pointsBox}>
                <Image
                  resizeMode="stretch"
                  source={require('../assets/images/mobile.png')}
                  style={styles.diomondIcon}
                />
                <Text style={styles.totalPoints}>Device</Text>
                <Text style={styles.totalPointText}>connected</Text>
              </View>
            </View>

           

            <View style={styles.homeRightRow}>
            <View style={styles.pointsBox}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/diamond.png')}
                style={styles.diomondIcon}
              />
              <Text style={styles.totalPoints}>64</Text>
              <Text style={styles.totalPointText}>Points</Text>
            </View>
            <View style={styles.pointsBox}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/hours.png')}
                style={styles.diomondIcon}
              />
              <Text style={styles.totalPoints}>8/24</Text>
              <Text style={styles.totalPointText}>hours</Text>
            </View>
            <View style={styles.pointsBox}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/Shape-path.png')}
                style={styles.diomondIcon}
              />
              <Text style={styles.totalPoints}>72</Text>
              <Text style={styles.totalPointText}>bpm</Text>
            </View>
            <View style={styles.pointsBox}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/footssteps.png')}
                style={styles.diomondIcon}
              />
              <Text style={styles.totalPoints}>3.1</Text>
              <Text style={styles.totalPointText}>mi</Text>
            </View>
            <View style={styles.pointsBox}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/caloriesNew.png')}
                style={styles.diomondIcon}
              />
              <Text style={styles.totalPoints}>1500</Text>
              <Text style={styles.totalPointText}>kcal</Text>
            </View>
            </View>

          
          </View>

          <View style={styles.healthDataChart}>
            <Image
              resizeMode="stretch"
              source={require('../assets/images/Scroll-Group-1.png')}
              style={styles.chartImg}
            />
          </View>

          <View style={styles.historicDataBox}>
              <Text style={styles.historicDataText}>Historic Data</Text>
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
    //alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 80,
    marginTop:30,
    alignSelf:'center'
    //marginTop: 18,
    //marginTop: 70,
  },
  historicDataText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    textTransform: 'uppercase',
  },
  chartImg: {
    width: 196,
    height: 196,
  },
  healthDataChart: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 100,
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
    fontSize: 24,
   // textTransform: 'uppercase',
    fontFamily: 'Montserrat-SemiBold',
  },
  healthMsgSlogan: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 10,
    fontFamily: 'Montserrat-Medium',
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
    paddingVertical: 0,
    alignItems: 'center',
    marginBottom: 12,
    flexDirection:'column'
  },
  diomondIcon: {
    width: 24,
    height: 24,
  },
  totalPoints: {
    color: COLORS.lightGreen,
    fontSize: 11,
    fontFamily: 'Montserrat-Bold',
    marginTop: 3,
  },
  totalPointText: {
    color: COLORS.lightGreen,
    fontSize: 7,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
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
    // height: 80,
    // position: 'relative',
    //marginBottom:50,
    // backgroundColor:'red'
    marginBottom:15,
    marginTop:7

  },
  batteryStatus: {
    // position: 'absolute',
    // top: 20,
    // left: 20,
    alignItems: 'center',
  },
  devicesText: {
    fontSize: 8,
    color: COLORS.lightGreen,
    fontFamily: 'Montserrat-SemiBold',
  },
  batteryStatusText: {
    fontSize: 8,
    color: COLORS.lightGreen,
    marginLeft: 5,
    fontFamily: 'Montserrat-Bold',
  },
  batteryStatusCol: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  pointsBatteryWrap: {
    position: 'absolute',
    right: 15,
    top: 190,
  },
  historicDataContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    position:'relative',
    marginTop:15
  },
  homeLeftRow:{
    position:'absolute',
    left:15,
    top:0
  },
  homeRightRow:{
    position:'absolute',
    right:15,
    top:0
  }
});
