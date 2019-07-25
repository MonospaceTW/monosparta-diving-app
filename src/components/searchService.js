import React, { Component } from 'react';
import Btn from '../components/button';

export default class Service extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
  
        shop: {
          service: [
            { label: '潛水體驗', value: 'ExploreDiving' },
            { label: '證照課程', value: 'LicenseCourse' },
            { label: '器材銷售', value: 'EquipmentSale' },
            { label: '飲食', value: 'Food' },
            { label: '住宿', value: 'Accommodation' }]
        },
        selService: ''
  
      }
    }
    onServiceChange = (value) => {
      if (this.state.selService === value) {
        this.setState({
          selService: ''
        })
      } else {
        this.setState({
          selService: value
        })
      }
    }
    render() {
      const array = []
      const serviceLength = this.state.shop.service.length
  
      for (let i = 0; i < serviceLength; i += 1) {
        array.push(<Btn
          key={this.state.shop.service[i].value}
          text={this.state.shop.service[i].label}
          onChangeState={this.onServiceChange.bind(this, this.state.shop.service[i].value)}
          select={this.state.selService}
          value={this.state.shop.service[i].value}
  
        />)
      }
      return array
    }
  }