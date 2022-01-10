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

export default class HistoricData extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bluegradbg.jpg')}
          style={globalStyles.bgstyle}>
          <Header />
          <ScrollView>
            <View style={styles.historyListWrap}>

            <View style={styles.lineChartWrap}>
            <Image
                    resizeMode="stretch"
                    source={require('../assets/images/line-chart.png')}
                    style={styles.lineChartImg}
                  />
            </View>
              <Text style={styles.historyListTitleText1}>History</Text>
              <Text style={styles.historyListTitleText2}>
                You have spent 50mg on this month
              </Text>

              <View style={styles.historyListItem}>
                <View style={styles.day}>
                  <Text style={styles.dayText}>Monday</Text>
                  <Text style={styles.spentText}>You have spent</Text>
                </View>
                <View style={styles.mg}>
                  <Text style={styles.mgtext}>10mg</Text>
                </View>
              </View>

              <View style={styles.historyListItem}>
                <View style={styles.day}>
                  <Text style={styles.dayText}>Tuesday</Text>
                  <Text style={styles.spentText}>You have spent</Text>
                </View>
                <View style={styles.mg}>
                  <Text style={styles.mgtext}>10mg</Text>
                </View>
              </View>

              <View style={styles.historyListItem}>
                <View style={styles.day}>
                  <Text style={styles.dayText}>Wednesday</Text>
                  <Text style={styles.spentText}>You have spent</Text>
                </View>
                <View style={styles.mg}>
                  <Text style={styles.mgtext}>15mg</Text>
                </View>
              </View>

              <View style={styles.historyListItem}>
                <View style={styles.day}>
                  <Text style={styles.dayText}>Thusday</Text>
                  <Text style={styles.spentText}>You have spent</Text>
                </View>
                <View style={styles.mg}>
                  <Text style={styles.mgtext}>20mg</Text>
                </View>
              </View>

              <View style={styles.historyListItem}>
                <View style={styles.day}>
                  <Text style={styles.dayText}>Friday</Text>
                  <Text style={styles.spentText}>You have spent</Text>
                </View>
                <View style={styles.mg}>
                  <Text style={styles.mgtext}>10mg</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyListWrap: {
    width: '85%',
    alignSelf: 'center',
  },
  historyListTitleText1: {
    fontSize: 20,
    color: '#000',
  },
  historyListTitleText2: {
    color: COLORS.darkGrey,
    fontSize: 12,
    marginBottom:25
  },
  historyListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  dayText: {
    fontSize: 16,
    color: '#000',
  },
  spentText: {
    fontSize: 12,
    color: COLORS.darkGrey,
  },
  mgtext: {
    fontSize: 16,
    color: '#000',
  },
  lineChartImg:{
      width:'100%',
      height:235
  },
  lineChartWrap:{
      marginBottom:25,
      marginTop:25
  }
});