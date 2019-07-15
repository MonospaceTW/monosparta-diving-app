import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
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
    let titlearray = []
    const tabs = this.state.tabs.length
    for (let i = 1; i <= tabs; i++) {
      if (this.state.active === i) {
        array1 = this.state.button1[i - 1]
        array2 = this.state.button2[i - 1]
        titlearray = this.state.title[i - 1]
      }
    }

    return (

      <View>
        <Tab tabs={this.state.tabs}
            active={this.state.active}
            onChangeTab={this.onChangeTab.bind(this)} />
        <View style={styles.padding}>
        <Text>{titlearray[0]}</Text>
        {array1.map((item) => { return <Button title={item.label} onPress={this.onFristselect.bind(this, item.label)} color={this.state.selLocation.includes(item.label) ? 'blue' : '#5CA0FC'} /> })}

        <Text>{titlearray[1]}</Text>
        {array2.map((item) => { return <Button title={item.label} onPress={this.onSecondselect.bind(this, item.label)} color={this.state.selLvl.includes(item.label) ? 'blue' : '#5CA0FC'} /> })}
        </View>

        <View style={styles.padding}>
          <Button disabled={(this.state.selLocation == '' && this.state.selLvl == '') ? true : false} title="GO!" onPress={this.test} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  padding: {
    paddingTop: 30
  }

})
