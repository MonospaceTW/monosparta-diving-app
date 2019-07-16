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
    width : '100%',
    height: 200
  },

})

export default class SpotList extends React.Component {
  constructor(props) {
    super(props)
  }

  keyExtractor = (item, index) => {return index.toString()};

  renderItem = ({item}) => {
    return (
      <View>
        <Image 
        style={styles.spotImg}
        source={{uri: item.spot_img}}
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
