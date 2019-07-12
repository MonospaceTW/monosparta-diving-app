import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
} from 'react-native';

// import PropTypes from 'prop-types';

export default class Tab extends React.Component {

  constructor(props){
    super(props);
    
  }

  

  render () {
    return (
      <View style={styles.container}>
      {this.props.tabs.map((value) =>
        // <View style={styles.tabsContainer + (value.id === this.state.active ? styles.tabsActcontainer : '')}>
        
        <View style={value.id === this.props.active ? styles.tabsActcontainer : styles.tabsContainer}> 
          <TouchableOpacity onPress={this.props.onChangeTab.bind(this, value.id)}>
            <Text>{value.name}</Text>
          </TouchableOpacity>
        </View>

        )}
      </View>

    );
  }

}

// Tab.propTyeps = {

// }

const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'space-evenly',
       flexDirection: 'row',

     },

     tabsContainer: {
       flex: 1,
       borderBottomColor: 'transparent',
       borderBottomWidth: 5,
       height: 30,
     },

     tabsActcontainer: {
       flex: 1,
       borderBottomColor: 'black',
       borderBottomWidth: 5,
       height: 30,
     },
   }
  )
