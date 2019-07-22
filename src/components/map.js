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
          latitude: 25.206375,
          longitude: 121.690234,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}>
        <Marker
          coordinate={{ latitude: 25.206375, longitude: 121.690234 }}
        />
      </MapView>
    );
  }

}
