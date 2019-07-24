import React from 'react'
import {
  StyleSheet,

  TouchableHighlight
} from 'react-native';
import { Content, Button, Text } from 'native-base';
import Styles from '../config/style';
// const styles = StyleSheet.create({
//   btn: {
//     margin: 15,
//     width: 80,
//     height: 30,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   btnPress: {
//     margin: 15,
//     width: 80,
//     height: 30,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: 'white',
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   btnTxt: {
//     color: 'white',
//     fontSize: 14
//   },
//   btnTxtPress: {
//     color: '#031F4B',
//     fontSize: 14
//   }

// })

export default class Btn extends React.Component {
  render() {
    return (
      

        <Content>
          <Button bordered 
          // this.props.select === this.props.value ? transparent : ''
            >
            <Text>{this.props.text}</Text>
          </Button>
        </Content>


    )
  }
}
