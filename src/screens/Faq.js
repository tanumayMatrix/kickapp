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
} from 'react-native';
import {globalStyles} from '../global/globalStyle';
import COLORS from '../global/globalColors';


import Header from '../components/Header';

export default class Faq extends Component {

  
  render() {


    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/bluegradbg.jpg')}
            style={globalStyles.bgstyle}>
            <ImageBackground
            resizeMode='stretch'
              source={require('../assets/images/faq-head.png')}
              style={styles.faqTopBg}>
              <Header />
            </ImageBackground>



  

            {/* <View style={styles.faqTopPart}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/faq-head.png')}
                style={styles.faqHeadImg}
              />
            </View> */}
          </ImageBackground>
        </View>

        {/* <Text>Hello</Text>
        <Collapse>
          <CollapseHeader>
            <View>
              <Text>Click here</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>Ta daa!</Text>
          </CollapseBody>
        </Collapse>

        <AccordionList
          list={this.state.list}
          header={this._head}
          body={this._body}
          keyExtractor={item => item.key}
        /> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  faqTopPart: {
    width: '100%',
  },
  faqTopBg: {
    width: '100%',
    height: 198,
  },
  forFaq: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999,
  },
});
