import React, { Component } from 'react'
import {
  StyleSheet,
  
  View
} from 'react-native';
import {
  List,
  ListItem,
  Text
} from 'native-base';


const styles = StyleSheet.create({


})


export default class SpotTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <List>
        <ListItem>
          <Text>Simon Mignolet</Text>
        </ListItem>
      </List>
    )
  }
}
