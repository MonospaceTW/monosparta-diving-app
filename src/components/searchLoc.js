import React, { Component } from 'react';

import Btn from '../components/button';

export default class Location extends React.Component {
    
    
    render() {
      const array = [];
      const locationLength = this.props.length;
      
  
      for (let i = 0; i < locationLength; i += 1) {
        array.push(<Btn
          key={this.props.key[i]}
          text={this.props.text[i]}
          onChangeState={this.props.onLocationChange}
          select={this.props.select}
          value={this.props.value[i]}
        />)
      }
      return array
    }
  }