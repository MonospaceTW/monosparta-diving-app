import React, { Component } from 'react'
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'
import { Container, Button } from 'native-base';
import Color from '../config/color'
import Images from '../config/images'
import Styles from '../config/style'
import ExploreHome from '../components/exploreHome'


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
      exploreSpot: [
        {
          title: '熱門潛點',
          img1: Images.recImg,
          img2: Images.recImg,
          img3: Images.recImg,
          name1: '貓鼻頭'
        }
      ],
      exploreShop: [
        {
          title: '熱門潛店',
          img1: Images.recImg,
          img2: Images.recImg,
          img3: Images.recImg,
          name1: '藍波潛水'
        }
      ],
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

  onGetAllSpot = async () => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(`http://51457f91.ngrok.io/DivingBackend/public/api/sites`);
      let responseValue = await response.json();
      let responseSpot = await navigate('spotList', { data: responseValue.item });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  onGetAllShop = async () => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(`http://51457f91.ngrok.io/DivingBackend/public/api/shops`);
      let responseValue = await response.json();
      let responseShop = await navigate('shopList', { data: responseValue.item });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (

      <Container>
        <ExploreHome data={this.state.exploreSpot} onClick={this.onGetAllSpot} />
        <ExploreHome data={this.state.exploreShop} onClick={this.onGetAllShop} />
        <ExploreHome data={this.state.exploreSpot} />
      </Container>
    )
  }
}
