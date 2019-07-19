import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet
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
      fontFamily: 'monospace',
      fontSize: 31,
      textAlign: 'center',
      color: '#FFBC02'
    },
    headerRight:
      (<View/>)
  };

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <View>
        <Image
          style={styles.spotImg}
          source={{ uri: item.spot_img }}
        />
        <Text>{item.viewName}{item.level}</Text>
      </View>
    )
  };

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
