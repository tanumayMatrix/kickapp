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

export default class Feedback extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={globalStyles.container}>
       
            <Header />
            <ScrollView>
              <View style={styles.rateYourExperienceWrap}>
                <Text style={styles.rateYourExperienceText}>
                  Rate Your Experience
                </Text>
                <Text style={styles.areYouSatisfiedText}>
                  Are you satisfied with the service?
                </Text>
                <View style={styles.starWrap}>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/star-filled.png')}
                      style={styles.starIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/star-filled.png')}
                      style={styles.starIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/star-blank.png')}
                      style={styles.starIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/star-blank.png')}
                      style={styles.starIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/star-blank.png')}
                      style={styles.starIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.improvedSection}>
                <Text style={styles.improvedText}>
                  Tell Us What Can be Improved?
                </Text>
                <View style={[styles.feedBackTagsWrap]}>
                  <TouchableOpacity
                    style={[styles.feedBackTags, styles.feedBackTagsActive]}>
                    <Text
                      style={[
                        styles.feedBackTagsText,
                        styles.feedBackTagsTextActive,
                      ]}>
                      Overall Sevice
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.feedBackTags]}>
                    <Text>Customer Support</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.feedBackTags]}>
                    <Text style={[styles.feedBackTagsText]}>
                      Speed and Efficiency
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.inputBox}>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholderTextColor="#AFAFAF"
                    style={styles.input}
                    placeholder="Your comment here..."
                    textContentType="Your comment here..."
                    underlineColorAndroid="transparent"
                    // keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.submitFeedbackWrap}>
                  <TouchableOpacity style={[globalStyles.lineBt, styles.feedBt]}>
                    <Text style={globalStyles.lineBtText}>Not Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[globalStyles.activateBt, styles.feedBt]}>
                    <Text style={globalStyles.activateBtText}>
                      Submit Feedback
                    </Text>
                  </TouchableOpacity>
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
  starIcon: {
    width: 46,
    height: 43,
    marginRight: 7,
  },
  starWrap: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  rateYourExperienceWrap: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    marginTop:20
  },
  rateYourExperienceText: {
    fontSize: 18,
    color: '#fff',
  },
  areYouSatisfiedText: {
    fontSize: 12,
    color:'#fff',
  },
  improvedSection: {
    width: '85%',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  improvedText: {
    fontSize: 18,
    color: '#fff',
  },
  feedBackTagsWrap: {
    flexDirection: 'row',
    marginTop: 25,
    flexWrap: 'wrap',
  },
  feedBackTags: {
    backgroundColor:COLORS.lightGreen,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 100,
    marginRight: 8,
    marginBottom: 8,
    //paddingBottom:12
  },
  feedBackTagsActive: {
    backgroundColor: COLORS.darkBlue,
  },
  feedBackTagsTextActive: {
    color: '#fff',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#B7B7B7',
    borderRadius: 8,
    marginVertical: 15,
  },
  input: {
    textAlignVertical: 'top',
    height: 150,
    paddingHorizontal: 15,
  },
  submitFeedbackWrap: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:20
  },
  feedBt:{
      width:'48%'
  }
});
