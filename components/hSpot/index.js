import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Navigator, ScrollView, Dimensions, Button,} from 'react-native';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    Object : [
      {
        title : '熱門潛點',
        img1 : require('../imgforsearch/1.png'),
        img2 : require('../imgforsearch/1.png'),
        img3 : require('../imgforsearch/1.png'),
      },
      {
        title : '熱門潛店',
        img1 : require('../imgforsearch/1.png'),
        img2 : require('../imgforsearch/1.png'),
        img3 : require('../imgforsearch/1.png'),
      },
      {
        title : '熱門潛點',
        img1 : require('../imgforsearch/1.png'),
        img2 : require('../imgforsearch/1.png'),
        img3 : require('../imgforsearch/1.png'),
      },
    ]


    }
  }

  render () {
    return (

      <ScrollView>

      <Button title='想去哪裡?' />
      {this.state.Object.map((value) =>
        <View>
          <Text>{value.title}</Text>
          <Image source={value.img1}/>
          <Image source={value.img2}/>
          <Image source={value.img3}/>
        </View>
        )}
      </ScrollView>
    );
  }

}
