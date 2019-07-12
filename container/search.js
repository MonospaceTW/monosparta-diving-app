import React, { Component } from 'react';
import { 
  StyleSheet,
   Text,
   View,
   Button,
  } from 'react-native';

import Tab from '../components/tab/index'



export default class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active : 1,
      tabs : [
        {id: 1, name:'找潛點'},
        {id: 2, name:'找潛店'},
      ],
      button1: [
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
     ],

      button2: [
        [
          {lvl: '初階'},
          {lvl: '中階'},
          {lvl: '高階'},
        ],

        [
        {lvl: '潛水體驗'},
        {lvl: '證照課程'},
        {lvl: '器材銷售'},
        {lvl: '飲食'},
        {lvl: '住宿'},
        ],
    ],

      title: [
        ["區域", "難度"],
        ["區域", "服務項目"],
      ],
      selLocation: [],
      selLvl: [],
    }
  }

  

  onChangeTab = (id) => { 
    this.setState({
      active : id
    });
  }

  handleLocation = (value) => {
    let location=[]
    location.push(value);
    this.setState({
      selLocation: location
    });
    
    console.log(location)
  }

  test = () => {
    console.log(this.state.selLocation)
  }

  render () {
    let array1=[];
    let array2=[];
    let titlearray=[];
    let tabs = this.state.tabs.length;
    for (let i = 1; i<=tabs; i++) {
      if (this.state.active === i) {
        array1 = this.state.button1[i-1];
        array2 = this.state.button2[i-1];
        titlearray= this.state.title[i-1];
      }
    }

    return (
      
      <View>
        <Tab tabs={this.state.tabs}
            active={this.state.active}
            onChangeTab={this.onChangeTab.bind(this)} />
        <View style={styles.padding}>
        <Text>{titlearray[0]}</Text>
        {array1.map((value) => 
            <Button title={value.location} onPress={this.handleLocation.bind(this, value.location)} color={this.state.selLocation.includes(value.location) ? 'blue' : '#5CA0FC'} />
        )}

        <Text>{titlearray[1]}</Text>
        {array2.map((value) => 
          <Button title={value.lvl} /> 
        )}
        </View>

        <View style={styles.padding}>
          <Button title="GO!" onPress={this.test} />
        </View>
     
      </View>
    );
  }

}

const styles = StyleSheet.create({
  padding : {
    paddingTop : 30,
  },

})


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