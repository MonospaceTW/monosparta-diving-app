import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

// import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    marginBottom: 35,
    marginTop: 35
  },
  tabs: {
    flex: 1,
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    height: 30,
   justifyContent: 'center',
   alignItems: 'center'
  },
  activeTabs: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    height: 30,
    justifyContent: 'center',
   alignItems: 'center'
  },
  tabTxt: {
    color: 'white'
  }
})

export default class Tab extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.tabs.map((value) => {
          return <TouchableOpacity
                   style={value.id === this.props.active ? styles.activeTabs : styles.tabs}
                   onPress={this.props.onChangeTab.bind(this, value.id)}>
            <Text style={styles.tabTxt}>{value.name}</Text>
          </TouchableOpacity>
        })}
      </View>

    )
  }
}

// Tab.propTyeps = {

// }
