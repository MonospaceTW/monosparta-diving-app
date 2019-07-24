import React, { Component } from 'react';

import Btn from '../components/button';

export default class Location extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
  
        spot: {
          location: [
            { label: '北部', value: 'north' },
            { label: '中部', value: 'mid' },
            { label: '南部', value: 'south' },
            { label: '東部', value: 'east' },
            { label: '離島', value: 'outer' }]
        },
        selLocation: ''
  
      }
    }
    onLocationChange = (value) => {
      if (this.state.selLocation === value) {
        this.setState({
          selLocation: ''
        })
      } else {
        this.setState({
          selLocation: value
        })
      }
    }
    render() {
      const array = []
      const locationLength = this.state.spot.location.length
      
  
      for (let i = 0; i < locationLength; i += 1) {
        array.push(<Btn
          key={this.state.spot.location[i].value}
          text={this.state.spot.location[i].label}
          onChangeState={this.onLocationChange.bind(this, this.state.spot.location[i].value)}
          select={this.state.selLocation}
          value={this.state.spot.location[i].value}
        />)
      }
      return array
    }
  }