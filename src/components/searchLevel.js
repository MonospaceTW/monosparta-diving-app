import React, { Component } from 'react';
import Btn from '../components/button';

export default  class Level extends React.Component {
  
  
  render() {
    const array = []
    const levelLength = this.props.length

    for (let i = 0; i < levelLength; i += 1) {
      array.push(<Btn
        key={this.props.key}
        text={this.props.text}
        onChangeState={this.props.onLevelChange}
        select={this.props.level}
        value={this.props.value}
      />)
    }
    return array
  }
}