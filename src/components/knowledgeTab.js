import React, { Component } from 'react';

import {
  Text
} from 'react-native'
import {
  List,
  ListItem
} from 'native-base';

export default class Search extends React.Component {
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
