import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

import homeSpot from '../components/image'


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    Object : [
      {
        title : '熱門潛點',
        img1 : homeSpot.recImg,
        img2 : homeSpot.recImg,
        img3 : homeSpot.recImg,
      },
      {
        title : '熱門潛店',
        img1 : homeSpot.recImg,
        img2 : homeSpot.recImg,
        img3 : homeSpot.recImg,
      },
      {
        title : '熱門潛點',
        img1 : homeSpot.recImg,
        img2 : homeSpot.recImg,
        img3 : homeSpot.recImg,
      },
    ]


    }
  }

  test = () => {
    console.log(test)
  }

  render () {
    return (

      <ScrollView>

      <Button title='想去哪裡?'  onPress={this.test} />
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
