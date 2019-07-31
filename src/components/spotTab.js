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


export default class SpotTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // componentDitMount = () => {
  //   if (this.props.spotData.map === '')
  // }

  onShowSpotResult=() => {
    return this.props.spotData.map((item) => {
      return (
        <ListItem>
          <Text>{item.name}</Text>
        </ListItem>
      )
    })
  }

  render() {
    return (
      <View>
         {/* {this.onShowSpotResult()} */}
      </View>
    )
  }
}
