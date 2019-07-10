import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Navigator, ScrollView, Dimensions, Button} from 'react-native';
import Header from '../../Header/index'
import Tab from '../../Tab/index'

export default class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active : 1,
      tabs : [
        {id: 1, name:'找潛點'},
        {id: 2, name:'找潛店'},
        {id: 3, name:'找潛客'},
      ],
      Button: [
        [
          {location: '北部'},
          {location: '中部'},
          {location: '南部'},
          {location: '東部'},
          {location: '外島'},
       ],

       [
        {location: '1'},
        {location: '2'},
        {location: '3'},
        {location: '4'},
        {location: '5'},
       ],

      [
      {location: '6'},
      {location: '7'},
      {location: '8'},
      {location: '9'},
      {location: '10'},
     ]
    ]
    }
  }

  onChangeTab = (id) => {
    this.setState({
      active : this.state.tabs.id
    });
    alert(this.state.active);
  }

  render () {
    let array=[];
    let tabs = this.state.tabs.length;
    for (let i = 1; i<=tabs; i++) {
      if (this.state.active === i) {
        array = this.state.Button[i-1];
      }
    }

    return (
      <View>
      <Tab tabs={this.state.tabs}
           active={this.state.active}
           onChangeTab={this.onChangeTab.bind(this)} />
      <View style={{paddingTop: 20}}>
      {array.map((value) => 
        <Button title={value.location} />  
      )}
      </View>
     
      </View>
    );
  }

}


// {
//   name : '區域',
//   {location: '北部'},
//   {location: '中部'},
//   {location: '南部'},
//   {location: '東部'},
//   {location: '外島'},
// },

// {
//   name : '難度',
//   {level: '初階'},
//   {level: '中階'},
//   {level: '高階'},
// }

// ],

// [
// {
//   name : '區域',
//   {location: '北部'},
//   {location: '中部'},
//   {location: '南部'},
//   {location: '東部'},
//   {location: '外島'},
// },

// {
//   name : '提供服務',
// {service: '潛水體驗'},
// {service: '證照課程'},
// {service: '器材銷售'},
// {service: '飲食'},
// {service: '住宿'},
// },

// ],

// []