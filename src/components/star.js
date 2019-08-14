import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';

export default class Star extends React.Component {

  render() {
    return (
      <StarRating
        disabled={this.props.isDisabled}
        maxStars={5}
        rating={this.props.starCount}
        selectedStar={this.props.onStarRatingPress}
        emptyStarColor='#0288D1'
        fullStarColor='#0288D1'
        halfStarEnabled
        starSize={this.props.size}
        containerStyle={this.props.startStyle}
      />

    )
  }

}
