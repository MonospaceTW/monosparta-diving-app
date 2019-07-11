import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Navigator, ScrollView, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default class SildeShow extends React.Component {

  handleOnscroll = (value) => {
    alert(value);
  }

  render () {
    return (
      <View>

      <ScrollView style={{paddingTop:30}} horizontal={true} pagingEnabled={true} onMomentumScrollEnd={this.handleOnscroll}>
        <Image style={{width : width}} value='1' source={require('../imgforsearch/1.png')}/>
        <Image style={{width : width}} value='2' source={require('../imgforsearch/1.png')}/>
        <Image style={{width : width}} value='3' source={require('../imgforsearch/1.png')}/>
      </ScrollView>

      <View style={{width:10, height:10, borderRadius:5, backgroundColor:'gray'}} />
      <View style={{width:10, height:10, borderRadius:5, backgroundColor:'gray'}} />
      <View style={{width:10, height:10, borderRadius:5, backgroundColor:'gray'}} />

      </View>
      
    );
  }

}
