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
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row'

  },

  tabsContainer: {
    flex: 1,
    borderBottomColor: 'transparent',
    borderBottomWidth: 5,
    height: 30
  },

  ActiveTabs: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    height: 30
  }
})

export default class Tab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.tabs.map((value) => {
          return <View
                  style={value.id === this.props.active ? styles.ActiveTabs : styles.tabsContainer}
                  >
            <TouchableOpacity onPress={this.props.onChangeTab.bind(this, value.id)}>
              <Text>{value.name}</Text>
            </TouchableOpacity>
          </View>
        })}
      </View>

    )
  }
}

// Tab.propTyeps = {

// }
