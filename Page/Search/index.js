import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, CheckBox,} from 'react-native';
import Tab from '../../components/Tab/index'

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
      Button1: [
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
     ],

      Button2: [
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

        [
        {lvl: '1'},
        {lvl: '2'},
        {lvl: '3'},
        {lvl: '4'},
        {lvl: '5'},
      ]
    ],

      title: [
        ["區域", "難度"],
        ["區域", "服務項目"],
        ["Test1", "Test2"]
      ]

    }
  }

  onChangeTab = (id) => { 
    this.setState({
      active : id
    });
  }


  render () {
    let array1=[];
    let array2=[];
    let titleary=[];
    let tabs = this.state.tabs.length;
    for (let i = 1; i<=tabs; i++) {
      if (this.state.active === i) {
        array1 = this.state.Button1[i-1];
        array2 = this.state.Button2[i-1];
        titleary= this.state.title[i-1];
      }
    }

    return (
      <View>
      <Tab tabs={this.state.tabs}
           active={this.state.active}
           onChangeTab={this.onChangeTab.bind(this)} />
      <View style={styles.padding}>
      <Text>{titleary[0]}</Text>
      {array1.map((value) => 
        
          <Button title={value.location} />
          
        
      )}

      <Text>{titleary[1]}</Text>
      {array2.map((value) => 
        <Button title={value.lvl} /> 
      )}
      </View>

     <View style={styles.padding}>
       <Button title="GO!" />
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