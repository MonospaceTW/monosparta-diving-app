import React, { Component } from 'react';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'


export default class Map extends React.Component {

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        scrollEnabled={false}
        zoomEnabled={false}
        initialRegion={{
          latitude: Number(this.props.latitude),
          longitude: Number(this.props.longitude),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={this.props.onPress}>
        <Marker
          coordinate={{ latitude: Number(this.props.latitude), longitude: Number(this.props.longitude) }}
        />
      </MapView>
    );
  }

}
