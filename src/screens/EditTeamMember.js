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

export default class EditTeamMember extends Component {
  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
        <View style={globalStyles.container}>
          <Header />

          <ScrollView contentContainerStyle={styles.teamMemberMain}>
            <View style={styles.teamMemberWrap}>
              <View style={styles.supportTeamMemberTitle}>
                <Text style={styles.supportTeamMemberTitleText}>
                  Support Team Member
                </Text>
              
              </View>

              <View style={styles.teamMemberBox}>
                <View style={styles.teamMemberEdit}>
                  <Text style={styles.teamMemberEditText}>Team Member 1</Text>
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Full Name"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                    // value="Jonthan Smith"
                  />
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Phone Number"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    // value="7375548901"
                  />
                </View>
              </View>
            </View>
            <View style={styles.teamMemberWrapSave}>
            <TouchableOpacity style={globalStyles.activateBt}>
                  <Text style={globalStyles.activateBtText}>Save</Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    teamMemberMain:{
      flex: 1,
    },
    teamMemberWrap: {
      width: '85%',
      alignSelf: 'center',
      flex:7
    },
    teamMemberWrapSave:{
      width: '85%',
      alignSelf: 'center',
      flex:1
    },
    addMemberIcon: {
      width: 25,
      height: 25,
    },
    supportTeamMemberTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    supportTeamMemberTitleText: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'Montserrat-Bold',
    },
  
    teamMemberEdit: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      marginBottom: 15,
    },
    teamMemberEditText: {
      color: '#fff',
      fontSize: 14,
      fontFamily: 'Montserrat-SemiBold',
    },
    editInfoIcon: {
      width: 16,
      height: 16,
    },
    teamMemberInput: {
      marginTop: 0,
    },
  });