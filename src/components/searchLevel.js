import React, { Component } from 'react';
import Btn from '../components/button';

export default  class Level extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      spot: {
        level: [
          { label: '初階', value: 'easy' },
          { label: '中階', value: 'medium' },
          { label: '高階', value: 'hard' }]
      },
      selLevel: '',

    }
  }
  onLevelChange = (value) => {
    if (this.state.selLevel === value) {
      this.setState({
        selLevel: ''
      })
    } else {
      this.setState({
        selLevel: value
      })
    }
  }
  render() {
    const array = []
    const levelLength = this.state.spot.level.length

    for (let i = 0; i < levelLength; i += 1) {
      array.push(<Btn
        key={this.state.spot.level[i].value}
        text={this.state.spot.level[i].label}
        onChangeState={this.onLevelChange.bind(this, this.state.spot.level[i].value)}
        select={this.state.selLevel}
        value={this.state.spot.level[i].value}
      />)
    }
    return array
  }
}