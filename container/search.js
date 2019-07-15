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
          { location: '北部' },
          { location: '中部' },
          { location: '南部' },
          { location: '東部' },
          { location: '外島' }
        ],

        [
          { location: '1' },
          { location: '2' },
          { location: '3' },
          { location: '4' },
          { location: '5' }
        ]
      ],

      button2: [
        [
          { lvl: '初階' },
          { lvl: '中階' },
          { lvl: '高階' }
        ],

        [
          { lvl: '潛水體驗' },
          { lvl: '證照課程' },
          { lvl: '器材銷售' },
          { lvl: '飲食' },
          { lvl: '住宿' }
        ]
      ],

      title: [
        ['區域', '難度'],
        ['區域', '服務項目']
      ],
      selLocation: [],
      selLvl: []
    }
  }


  onChangeTab = (id) => {
    this.setState({
      active: id
    })
  }

  handleLocation = (value) => {
    const location = []
    location.push(value)
    this.setState({
      selLocation: location
    })

    console.log(location)
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
          {array1.map((value) => {
            return <Button
                      title={value.location}
                      onPress={this.handleLocation.bind(this, value.location)}
                      // color={this.state.selLocation.includes(value.location) ? 'white' : '#5CA0FC'}
                      style={styles.btn}                    
                  />
          })}

          <Text style={styles.title}>{titleArray[1]}</Text>
          <View style={styles.hr} />
          {array2.map((value) => { return <Button title={value.lvl} /> })}
        </View>
        <Button style={styles.goBtn} title="GO!" />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  // tab: {
  //   color: 'white'
  // },
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
