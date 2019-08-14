import React, { Component } from 'react';

import MapView, { Marker } from 'react-native-maps'


export default class Map extends React.Component {

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        scrollEnabled={false}
        zoomEnabled={false}
        initialRegion={{
          latitude: Number(this.props.latitude),
          longitude: Number(this.props.longitude),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={this.props.onPress}>
        <Marker
          coordinate={{ latitude: Number(this.props.latitude), longitude: Number(this.props.longitude) }}
        />
      </MapView>
    );
  }

}
