import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  List,
  ListItem
} from 'native-base';



const styles = StyleSheet.create({

})


export default class ShopTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onShowShopResult = () => {
    if (this.props.shopData === '') {
      return <View />
    } else {
      return this.props.shopData.map((item) => {
        return (
          <ListItem key={item.id}>
            <Text>{item.name}</Text>
          </ListItem>
        )
      })
    }
  }

  render() {
    return (
      <View>
        {this.onShowShopResult()}
      </View>
    )
  }
}
