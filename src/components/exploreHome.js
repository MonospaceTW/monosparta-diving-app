import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'

import { Container, Button } from 'native-base';
import Color from '../config/color'
import Styles from '../config/style'


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
    width: 100,
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

export default class ExploreHome extends React.Component {
  render() {
    return (
      <Container style={Styles.container}>
        {
          this.props.data.map((value) => {
            return <View key={value.title}>
              <Text style={styles.title}>{value.title}</Text>
              <View style={styles.hr} />
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.imageWrapper}>
                  <Button style={styles.btn} onPress={this.props.onClick}>
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
      </Container>
    )
  }
}
