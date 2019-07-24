import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';
import Styles from '../config/style';
import Map from '../components/map';


const styles = StyleSheet.create({

  wrapper: {
    height: 200
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class SpotDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = {
    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    }
  }

  render() {
    return (
      <ScrollView>
        <Container style={Styles.container}>
          <Swiper style={styles.wrapper} showsButtons={false} dotColor="#F5F5F5">
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
          </Swiper>
          <Content style={Styles.bodyContent}>
            <View style={Styles.component}>
              <Text style={Styles.title}>{this.props.navigation.state.params.data.name} {this.props.navigation.state.params.data.level}</Text>
              <Text style={Styles.content}>{this.props.navigation.state.params.data.description}</Text>
              <View style={Styles.hr} />
            </View>

            <View style={Styles.component}>
              <Text style={Styles.title}>地址</Text>
              <View style={Styles.map}>
                <Map />
              </View>
              <View style={Styles.hr} />
            </View>

            <View style={Styles.component}>
              <Text style={Styles.title}>附近潛店</Text>
              <View style={Styles.hr} />
            </View>

            <View style={Styles.component}>
              <Text style={Styles.title}>評論</Text>
            </View>
          </Content>
        </Container>
      </ScrollView>
    )
  }
}
