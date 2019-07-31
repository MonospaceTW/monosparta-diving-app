import React, { Component } from 'react';

import {
  SafeAreaView,
  Modal,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import {
  Tab,
  Tabs,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Input
} from 'native-base';

import ShopTab from '../components/shopTab';
import SpotTab from '../components/spotTab';
import KnowledgeTab from '../components/knowledgeTab';

import Styles from '../config/color';
import Colors from '../config/color';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      modalVisible: true
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  onTextChange = (text) => {
    this.setState({ text })
  }
  onSearch = async () => {
    // const { navigate } = this.props.navigation;
    const keyword = encodeURIComponent(this.state.text)
    try {
      let response = await fetch(Api.url + `keyword/${keyword}`);
      let responseJson = await response.json();
      console.log(responseJson)
      // let responseDetail = await navigate('shopDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  changePageHome = () => {
    const { goBack } = this.props.navigation;
    goBack()
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>

              <Header style={{ borderBottomWidth: 0, backgroundColor: 'white' }}>
                <Left>
                  <Button transparent onPress={this.changePageHome}>
                    <Icon name='arrow-back' />
                  </Button>
                </Left>
                <Body>
                  <Input
                    placeholder='試試野柳？'
                    // style={styles.inputTxt}
                    value={this.state.text}
                    onChangeText={this.onTextChange}
                  // onSubmitEditing={this.clear}

                  />
                </Body>
                <Right>
                  <Button transparent onPress={this.onSearch}>
                    <Icon name='search' />
                  </Button>
                </Right>
              </Header>
              <View>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: Colors.mainBlue }}>
                  <Tab
                    heading="潛點"
                    tabStyle={{ backgroundColor: Colors.white }}
                    activeTabStyle={{ backgroundColor: Colors.white }}
                    textStyle={{ color: Colors.mainBlue }}
                    activeTextStyle={{ color: Colors.mainBlue }}
                  >
                    <SpotTab />
                  </Tab>
                  <Tab
                    heading="潛店"
                    tabStyle={{ backgroundColor: Colors.white }}
                    activeTabStyle={{ backgroundColor: Colors.white }}
                    textStyle={{ color: Colors.mainBlue }}
                    activeTextStyle={{ color: Colors.mainBlue }}
                  >
                    <ShopTab />
                  </Tab>
                  <Tab
                    heading="知識"
                    tabStyle={{ backgroundColor: Colors.white }}
                    activeTabStyle={{ backgroundColor: Colors.white }}
                    textStyle={{ color: Colors.mainBlue }}
                    activeTextStyle={{ color: Colors.mainBlue }}
                  >
                    <KnowledgeTab />
                  </Tab>
                </Tabs>
              </View>

            </View>
          </View>
        </Modal>

      </SafeAreaView>
    )
  }
}
