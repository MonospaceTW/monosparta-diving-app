import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'


import {
  FontAwesome,
} from '@expo/vector-icons'
import { Card, CardItem } from 'native-base';

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

})



export default class SpotList extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '探險潛店',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
    headerRight:
      (<FontAwesome name="filter" size={24} style={{ color: '#0288D1' }} />)
  };

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (

      <TouchableOpacity style={styles.listContainer} onPress={this.onGetShopDetail.bind(this, item.id)}>
        <Card>
          <CardItem cardBody>
            <Image
              source={{ uri: item.img1 }}
              style={styles.spotImg} />
          </CardItem>
          <CardItem>
            <Text>{item.name} {item.county} {item.district}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  };

  onGetShopDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(`http://57c64a59.ngrok.io/DivingBackend/public/api/shops/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('shopDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (

      <View>
        <FlatList
          data={this.props.navigation.state.params.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}
