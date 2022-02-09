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

export default class TeamMember extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={globalStyles.container}>
          <Header />

          <ScrollView contentContainerStyle={styles.signInscroll}>
            <View style={styles.teamMemberWrap}>
              <View style={styles.supportTeamMemberTitle}>
                <Text style={styles.supportTeamMemberTitleText}>
                  Support Team Member
                </Text>
                <TouchableOpacity>
                  <Image
                    resizeMode="stretch"
                    source={require('../assets/images/add.png')}
                    style={styles.addMemberIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.teamMemberBox}>
                <View style={styles.teamMemberEdit}>
                  <Text style={styles.teamMemberEditText}>Team Member 1</Text>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/edit-info.png')}
                      style={styles.editInfoIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Name"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                    value="Jonthan Smith"
                  />
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Mobile No."
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    value="7375548901"
                  />
                </View>
              </View>

              <View style={styles.teamMemberBox}>
                <View style={styles.teamMemberEdit}>
                  <Text style={styles.teamMemberEditText}>Team Member 1</Text>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/edit-info.png')}
                      style={styles.editInfoIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Name"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                    value="Jonthan Smith"
                  />
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Mobile No."
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    value="7375548901"
                  />
                </View>
              </View>

              <View style={styles.teamMemberBox}>
                <View style={styles.teamMemberEdit}>
                  <Text style={styles.teamMemberEditText}>Team Member 1</Text>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={require('../assets/images/edit-info.png')}
                      style={styles.editInfoIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Name"
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    autoCapitalize="none"
                    value="Jonthan Smith"
                  />
                </View>

                <View style={[globalStyles.inputBox, styles.teamMemberInput]}>
                  <TextInput
                    placeholderTextColor="#AFAFAF"
                    style={globalStyles.input}
                    placeholder="Mobile No."
                    textContentType="username"
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    value="7375548901"
                  />
                </View>
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
  teamMemberWrap: {
    width: '85%',
    alignSelf: 'center',
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
