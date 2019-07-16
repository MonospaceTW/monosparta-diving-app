import React, { Component } from 'react'
import {
  View
} from 'react-native'

import Btn from '../button/index'

export default class SearchBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      search =
      {
        title :['區域','難度','服務'],
        spot = {
          location: [{'north':'北部' }, {'mid':'中部'}, {'south':'南部'}, {'east':'東部'}, {'outer':'離島'}],
          level: [{'hard':'高階'}, {'medium':'中階'}, {'easy':'低階'}]
        },
        shop = {
          location: [{'north':'北部' }, {'mid':'中部'}, {'south':'南部'}, {'east':'東部'}, {'outer':'離島'}],
          service: [{'exp':'潛水體驗'}, {'course':'證照課程'}, {'sale':'器材銷售'}, {'food':'飲食'}, {'sleep':'住宿'}]
        }
      }


    }
  }

  render() {
    return (
      <View>
        <Btn label={item}/>
        <Btn label={item}/>
        <Btn label={item}/>
        <Btn label={item}/>
        <Btn label={item}/>
      </View>
    )
  }
}