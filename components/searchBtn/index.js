import React, { Component } from 'react'

import Btn from '../button/index'

export default class SearchBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Btn text={this.props.text} />
    )
  }
}