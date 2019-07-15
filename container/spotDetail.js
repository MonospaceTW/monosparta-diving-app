import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Linking,
  FlatList
} from 'react-native';


export default class SearchSpot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spotName: '',
      spotLevel: '',
      array:[]

    }
  }
  keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (

      <View>        
      <FlatList 
        data={this.state.array}
        renderItem={this.renderItem}
        keyExtractor = {this.keyExtractor}
      />
      </View>
    )
  }
}