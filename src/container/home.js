import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {

  View,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base';
import Color from '../config/color'
import Images from '../config/images'

import GoBtn from '../components/goBtn'


const styles = StyleSheet.create({
  title: {
    color: Color.white,
    fontSize: 14,
    textShadowColor: 'rgba(0,0,0,.16)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    position: 'relative',
    margin: 15
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 200,
    height: 100,
    shadowColor: 'rgba(0,0,0,.35)',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    borderRadius: 20,
    marginLeft: 30,
    marginBottom: 10,
    position: 'relative'
  },
  name: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    bottom: 20,
    left: 45
  },
  hr: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    position: 'absolute',
    left: 80,
    top: 22,
    width: '100%'
  },
  btn: {
    width: 150,
    height: 40,
    backgroundColor: '#FF9100',
    shadowColor: 'rgba(0,0,0,.16)',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    borderRadius: 24,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  btnTxt: {
    color: 'white'
  }
})
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Object: [
        {
          title: '熱門潛點',
          img1: Images.recImg,
          img2: Images.recImg,
          img3: Images.recImg,
          name1: '貓鼻頭'
        },
        {
          title: '熱門潛店',
          img1: Images.recImg,
          img2: Images.recImg,
          img3: Images.recImg,
          name1: '藍波潛水'
        }
      ],
      btnTxt: '想去哪裡？'
    }
  }

  static navigationOptions = {
    title: 'LOGO',
    headerStyle: {
      backgroundColor: '#3FD2FF'

    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 31,
      textAlign: 'center',
      color: '#FFBC02'
    },
    headerLeft:
      (<View />),
    headerRight:
      (<View />)
  };


  onGoSearch = () => {
    const { navigate } = this.props.navigation
    navigate('Search')
  }

  // onGetAllSpot = async () => {
  //   const {navigate} = this.props.navigation;
  //   try {
  //     let response = await fetch(`http://e03d16df.ngrok.io/api/sites`);
  //     let responseJson = await response.json();
  //     let responseSpot = await navigate('spotList', { data: responseJson.item });
  //   }
  //   catch (err) {
  //     console.log('err:', err)
  //   }
  // }

  // onGetAllShop = async () => {
  //   const {navigate} = this.props.navigation;
  //   try {
  //     let response = await fetch(`http://84f9d39e.ngrok.io/DivingBackend/public/api/shops`);
  //     let responseJson = await response.json();
  //     let responseShop = await navigate('shopList', { data: responseJson.item });
  //   }
  //   catch (err) {
  //     console.log('err:', err)
  //   }
  // }

  render() {
    return (
      <Container>
        {
          this.state.Object.map((value) => {
            return <View key={value.title}>
              <Text style={styles.title}>{value.title}</Text>
              <View style={styles.hr} />
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.imageWrapper}>
                  <Button onPress={this.onGetAllSpot}>
                    <Text>Click Me!</Text>
                  </Button>
                  <View>
                    <Image style={styles.image} source={value.img1} />
                    <Text style={styles.name}>{value.name1}</Text>
                  </View>
                  <View>
                    <Image style={styles.image} source={value.img2} />
                    <Text style={styles.name}>{value.name1}</Text>
                  </View>
                  <View>
                    <Image style={styles.image} source={value.img3} />
                    <Text style={styles.name}>{value.name1}</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          })
        }
        <GoBtn
          btnTxt={this.state.btnTxt}
          onClick={this.onGoSearch} />
      </Container>
    )
  }
}
