import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  Alert

} from 'react-native';

import { Content, Card, CardItem } from 'native-base';

import SmallBtn from '../components/smallButton';
import Api from '../config/api'

import Colors from '../config/color';
import Styles from '../config/style';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  spotImg: {
    width: width * 0.85,
    height: height * 0.4,
    borderRadius: 6
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  modalContent: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '70%',
    position: 'relative',

  },
  btnWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 20
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 25
  },
  subtitle: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  }
})

export default class SpotList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      spot: {
        location: [
          { label: '北部', value: 'north' },
          { label: '中部', value: 'mid' },
          { label: '南部', value: 'south' },
          { label: '東部', value: 'east' },
          { label: '離島', value: 'outer' }],
        level: [
          { label: '初階', value: 'easy' },
          { label: '中階', value: 'medium' },
          { label: '高階', value: 'hard' }]
      },
      selLocation: '',
      selLevel: '',
      btnTxt1: '重設',
      btnTxt2: '確認'
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    this.props.navigation.setParams({
      showModal: this.showModal.bind(this)
    });
  }
  showModal = () => {
    this.setModalVisible(true)
  }

  //header
  static navigationOptions = {
    title: '探索潛點',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    }
  }

  onGetLocationBtn = () => {
    const {
      spot: { location },
      selLocation,
    } = this.state;

    return location.map((item, i) => (
      <SmallBtn
        key={location[i].value}
        text={location[i].label}
        onPress={this.onLocationChange(location[i].value)}
        select={selLocation}
        value={location[i].value}
      />
    ));
  }
  onGetLevelBtn = () => {
    const {
      spot: { level },
      selLevel,
    } = this.state;

    return level.map((item, i) => (
      <SmallBtn
        key={level[i].value}
        text={level[i].label}
        onPress={this.onLevelChange(level[i].value)}
        select={selLevel}
        value={level[i].value}
      />

    ));
  }

  onLocationChange = (value) => () => {
    if (this.state.selLocation === value) {
      this.setState({
        selLocation: ''
      })
    } else {
      this.setState({
        selLocation: value
      })
    }
  }
  onLevelChange = (value) => () => {
    if (this.state.selLevel === value) {
      this.setState({
        selLevel: ''
      })
    } else {
      this.setState({
        selLevel: value
      })
    }
  }

  onGetSpotList = async () => {
    const { navigate } = this.props.navigation
    const url = Api.url + `site/search?location=${this.state.selLocation}&level=${this.state.selLevel}`
    if (this.state.selLocation === '' && this.state.selLevel === '') {
      Alert.alert('請至少選擇一個區域或難度')
    } else {
      try {
        let response = await fetch(url);
        let responseValue = await response.json();
        let resultList = await navigate('spotList', { data: responseValue.item });
        let closeModal = await this.setModalVisible(!this.state.modalVisible);
      } catch (err) {
        console.log(err)
      }
    }
  }

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.listContainer} onPress={this.onGetSpotDetail.bind(this, item.id)}>
        <Card>
          <CardItem cardBody>
            <Image source={{ uri: item.img1 }} style={styles.spotImg} />
          </CardItem>
          <CardItem>
            <Text>{item.name} {item.county}{item.district}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>

    )
  };


  onGetSpotDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `site/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('spotDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (

      <Content style={Styles.bodyContent}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalWrapper}>

            <View style={styles.modalContent}>
              <Text style={[Styles.title, styles.title]}>篩選潛點</Text>

              <Text style={[Styles.title, styles.subtitle]}>地區</Text>
              <View style={{marginLeft:20}}>{this.onGetLocationBtn()}</View>

              <Text style={[Styles.title, styles.subtitle]}>難度</Text>
              <View style={{marginLeft:20}}>{this.onGetLevelBtn()}</View>

              <View style={styles.btnWrapper}>
                <SmallBtn
                  select={false}
                  text={this.state.btnTxt1}
                />
                <SmallBtn
                  onPress={this.onGetSpotList}
                  text={this.state.btnTxt2}
                />
              </View>
            </View>
          </View>
        </Modal>

        <FlatList
          data={this.props.navigation.state.params.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </Content>

    )
  }
}
