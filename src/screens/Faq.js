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
import Accordion from 'react-native-collapsible/Accordion';
const SECTIONS = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Curabitur aliquet quam id dui posuere blandit',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Nulla quis lorem ut libero malesuada feugiat',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Curabitur non nulla sit amet nisl tempus convallis',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Curabitur aliquet quam id dui posuere blandit',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Nulla quis lorem ut libero malesuada feugiat',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
  {
    title: 'Curabitur non nulla sit amet nisl tempus convallis tanu',
    content:
      'Nam commodo vitae nisi eget vestibulum. aecenas facilisis, est eget tincidunt bibendum, risus magna varius velit, eu hendrerit dolor quam nec ligula. In pharetra arcu mauris, eu convallis mi pharetra non.',
  },
];
export default class Faq extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <TouchableOpacity>
          <Image
            resizeMode="stretch"
            source={require('../assets/images/right-arrow.png')}
            style={styles.rightArrowIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <>
        <View style={globalStyles.container}>
          
            <ImageBackground
              resizeMode="stretch"
              source={require('../assets/images/faq-head.png')}
              style={styles.faqTopBg}>
              <Header />
            </ImageBackground>

            <View style={styles.accorContainer}>
            <ScrollView>
              <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                //   renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
                underlayColor="transparent"
              />
              </ScrollView>
            </View>

            {/* <View style={styles.faqTopPart}>
              <Image
                resizeMode="stretch"
                source={require('../assets/images/faq-head.png')}
                style={styles.faqHeadImg}
              />
            </View> */}
        
        </View>
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
    //height: 198,
    flex:1
  },
  forFaq: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999,
  },
  header: {
    padding: 15,
    backgroundColor: '#202020',
    marginTop: 8,
    borderRadius: 9,
    borderBottomRadius: 0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginHorizontal:30,


    
    // shadowColor: '#b2b2b2',
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.98,
    // shadowRadius: 11.95,

    // elevation: 18,
  },
  accorContainer: {
    //width: '85%',
    alignSelf: 'center',
    marginTop:15,
    flex:3,
    paddingBottom:20,
   // backgroundColor:'red'
  },
  content: {
    backgroundColor: '#202020',
    borderTopColor:'#DCDCDC',
    borderTopWidth:1,
    // marginBottom:8,
    padding: 15,
    position: 'relative',
   // top: -9,
    borderRadius: 0,
    borderBottomEndRadius: 9,
    borderBottomStartRadius: 9,
    marginHorizontal:30,


    
  },
  rightArrowIcon:{
    width:8,
    height:12,
    position: 'relative',
    top:5
  },
  headerText:{
    paddingRight:12,
    width:'90%',
    color:'#fff' 
  },
  contentText:{
    color:'#fff' 
  }
});
