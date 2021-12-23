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
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

export default class Faq extends Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
