import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity

} from 'react-native'

import SearchBtn from '../components/searchBtn/index'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      spot: {
        location: [{ label: '北部', value: 'north' }, { label: '中部', value: 'mid' }, { label: '南部', value: 'south' }, { label: '東部', value: 'east' }, { label: '離島', value: 'outer' }],
        level: [{ label: '高階', value: 'hard' }, { label: '中階', value: 'medium' }, { label: '低階', value: 'easy' }]
      },
      shop: {
        // location: [{ label: '北部', value: 'north' }, { label: '中部', value: 'mid' }, { label: '南部', value: 'south' }, { label: '東部', value: 'east' }, { label: '離島', value: 'outer' }],
        service: [{ label: '潛水體驗', value: 'exp' }, { label: '證照課程', value: 'course' }, { label: '器材銷售', value: 'sale' }, { label: '飲食', value: 'food' }, { label: '住宿', value: 'sleep' }]
      },
      selLocation: [],
      selLvl: []

    }
  }

  onGetLocation = () => {
    const array = []
    const locationLength = this.state.spot.location.length

    for (let i = 0; i < locationLength; i += 1) {
      array.push(<SearchBtn text={this.state.spot.location[i].label} />)
    }
    return array
  }

  onGetLevel = () => {
    const array = []
    const levelLength = this.state.spot.level.length

    for (let i = 0; i < levelLength; i += 1) {
      array.push(<SearchBtn text={this.state.spot.level[i].label} />)
    }
    return array
  }

  onGetService = () => {
    const array = []
    const serviceLength = this.state.shop.service.length

    for (let i = 0; i < serviceLength; i += 1) {
      array.push(<SearchBtn text={this.state.shop.service[i].label} />)
    }
    return array
  }

  render() {
    return (

      <ImageBackground source={require('../assets/searchBg.png')} style={styles.bgImg}>
        <Text style={styles.title}>區域</Text>
        <View style={styles.hr} />
        <View style={styles.btnWrapper}>{this.onGetLocation()}</View>
        <Text style={styles.title}>難度</Text>
        <View style={styles.hr2} />
        <View style={styles.btnWrapper}>{this.onGetLevel()}</View>
        <Text style={styles.title}>區域</Text>
        <View style={styles.hr} />
        <View style={styles.btnWrapper}>{this.onGetLocation()}</View>
        <Text style={styles.title}>服務</Text>
        <View style={styles.hr2} />
        <View style={styles.btnWrapper}>{this.onGetService()}</View>
        <TouchableOpacity
          style={styles.goBtn}
          disabled={(this.state.selLocation == '' && this.state.selLvl == '')}
          onPress={this.test}
        >
          <Text style={styles.btnTxt}>GO !</Text>
        </TouchableOpacity>
      </ImageBackground>

    )
  }
}


// fetch(`http://e03d16df.ngrok.io/api/sites/search/${this.state.selLocation[0]}`)
//   .then((response) => { return response.json() })
//   .then((users) =>
//   {
//     return this.setState({
//       users
//     })
//   }
//   )
//   .then(() => { return console.log(this.state.users.site[0]) })
//   .catch((error) => {
//     console.log(error)
//   })
//   .done()

// <View style={styles.content}>
// <Text style={styles.title}>{titleArray[0]}</Text>
// <View style={styles.hr} />
// <View style={styles.btnWrapper}>
//   {array1.map((item) => {
//     return <Btn
//       label={item.label}
//       onPress={this.test1}

//     />
//   })}
// </View>
// <Text style={styles.title}>{titleArray[1]}</Text>
// <View style={styles.hr2} />
// <View style={styles.btnWrapper}>
//   {array2.map((item) => {
//     return <Btn
//       label={item.label}

//     />
//   })}
// </View>
// </View>
// <View style={styles.btnWrapper}>

//   <TouchableOpacity
//     style={styles.goBtn}
//     disabled={(this.state.selLocation == '' && this.state.selLvl == '')}
//     onPress={this.test}
//   >
//     <Text style={styles.btnTxt}>GO !</Text>
//   </TouchableOpacity>
// </View>
const styles = StyleSheet.create({
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
    top: 25,
    width: '100%'
  },
  hr2: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    position: 'absolute',
    left: 50,
    top: 195,
    width: '100%'
  },
  btn: {
    width: 80,
    height: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white'
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
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    fontSize: 20,
    color: 'white'
  },
  bgImg: {
    width: '100%',
    height: '100%'
  },
  btnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginBottom: 30
  }


})
