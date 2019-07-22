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
      <TouchableOpacity onPress={this.onGetSpotDetail.bind(this, item.spot_id)}>
        <Image
          style={styles.spotImg}
          source={{ uri: item.spot_img }}
        />
        <Text>{item.viewName}{item.level}</Text>
      </TouchableOpacity>
    )
  };

  onGetSpotDetail = async (spot_id) => {
    const { navigate } = this.props.navigation
    const url = `http://e03d16df.ngrok.io/api/sites/${spot_id}`

    try {
      let response = await fetch(url);
      let responseValue = await response.json();
      console.log(responseValue)
      let resultList = await navigate('spotDetail', { info: responseValue.item[0] })
    } catch (err) {
      console.log(err)
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
