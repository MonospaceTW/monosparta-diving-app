import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
} from 'react-native'

import Tab from '../components/tab/index'

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 1,
      tabs: [
        { id: 1, name: '找潛點' },
        { id: 2, name: '找潛店' }
      ],
      button1: [
        [
          { label: '北部', value: 'north' },
          { label: '中部', value: 'mid' },
          { label: '南部', value: 'south' },
          { label: '東部', value: 'east' },
          { label: '離島', value: 'outer' }
        ],

        [
          { label: '北部', value: 'north' },
          { label: '中部', value: 'mid' },
          { label: '南部', value: 'south' },
          { label: '東部', value: 'east' },
          { label: '離島', value: 'outer' }
        ]
      ],

      button2: [
        [
          { label: '初階', value: 'easy'},
          { label: '中階', value: 'medium'},
          { label: '高階', value: 'hard'}
        ],

        [
          { label: '潛水體驗', value: '1'},
          { label: '證照課程', value: '2'},
          { label: '器材銷售', value: '3'},
          { label: '飲食', value: '4'},
          { label: '住宿', value: '5'}
        ]
      ],

      title: [
        ['區域', '難度'],
        ['區域', '服務項目']
      ],
      selLocation: [],
      selLvl: [],
      users: []
    }
  }


  onChangeTab = (id) => {
    this.setState({
      active: id
    })
  }

  onFristselect = (value) => {
    
    const firstSelect = []
    firstSelect.push(value)
    // this.setState({
    //   selLocation: firstSelect
    // })

    if (this.state.selLocation.includes(value)) {
      this.setState({
        selLocation: []
      })
    } else {
      this.setState({
        selLocation: firstSelect
      })
    }
    
  }
    

  onSecondselect = (value) => {
    const secondSelect = []
    secondSelect.push(value)
    this.setState({
      selLvl: secondSelect
    })
  }

  test = () => {
    const resultSelect = this.state.selLocation.concat(this.state.selLvl)

    //console.log(resultSelect)

    fetch('http://e03d16df.ngrok.io/api/sites/search/'+ this.state.selLocation[0] )
      .then(response => response.json())
      .then(users =>         
        // console.log(users.site)
        this.setState({
          users
        })
      )
      .then(() => console.log(this.state.users.site[0]))
      .catch((error) => {
        console.log(error)
      })      
      .done()
     
    }

  render() {
    let array1 = []
    let array2 = []
    let titleArray = []
    const tabs = this.state.tabs.length
    for (let i = 1; i <= tabs; i++) {
      if (this.state.active === i) {
        array1 = this.state.button1[i - 1]
        array2 = this.state.button2[i - 1]
        titleArray = this.state.title[i - 1]
      }
    }

    return (

      <ImageBackground source={require('../assets/searchBg.png')} style={styles.bgImg}>
        <Tab
          tabs={this.state.tabs}
          active={this.state.active}
          onChangeTab={this.onChangeTab.bind(this)}
        />
        <View style={styles.padding}>
          <Text style={styles.title}>{titleArray[0]}</Text>
          <View style={styles.hr} />
          {array1.map((item) => { return <Button title={item.label} onPress={this.onFristselect.bind(this, item.label)} color={this.state.selLocation.includes(item.label) ? 'blue' : '#5CA0FC'} /> })}
      })}

          <Text style={styles.title}>{titleArray[1]}</Text>
          <View style={styles.hr} />
          {array2.map((item) => { return <Button title={item.label} onPress={this.onSecondselect.bind(this, item.label)} color={this.state.selLvl.includes(item.label) ? 'blue' : '#5CA0FC'} /> })}
        </View>
        <Button style={styles.goBtn} disabled={(this.state.selLocation == '' && this.state.selLvl == '') ? true : false} title="GO!" onPress={this.test} />

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  padding: {
    paddingTop: 30 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    textShadowColor: 'rgba(0,0,0,.16)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    position: 'relative',
    margin: 15
  },
  hr: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    position: 'absolute',
    left: 50,
    top: 22,
    width: '100%'
  },
  btn: {
    width: 80,
    height: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
  },
  goBtn: {
    width: 230,
    height: 50,
    backgroundColor: '#031F4B',
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: 'rgba(0,0,0,.16)',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    borderRadius: 24,
    marginBottom: 10
  },
  bgImg: {
    width: '100%',
    height: '100%'
  }

})
