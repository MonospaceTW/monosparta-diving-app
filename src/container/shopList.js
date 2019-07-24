import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'


const styles = StyleSheet.create({
  spotImg: {
    width: '100%',
    height: 200
  },

})



export default class SpotList extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '潛點列表',
    headerStyle: {
      backgroundColor: '#3FD2FF'

    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 31,
      textAlign: 'center',
      color: '#FFBC02'
    },
    headerRight:
      (<View />)
  };

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onGetShopDetail.bind(this, item.shop_id)}>
        <Image
          style={styles.spotImg}
          // source={{ uri: item.spot_img }}
        />
        <Text>{item.shop_id}{item.shop_service}</Text>
      </TouchableOpacity>
    )
  };

  onGetShopDetail = async (shop_id) => {
    const {navigate} = this.props.navigation;
    try {
      let response = await fetch(`http://84f9d39e.ngrok.io/DivingBackend/public/api/shops/${shop_id}`);
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
