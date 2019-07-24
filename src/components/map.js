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
          latitude: 24.148533,
          longitude: 120.673439,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}>
        <Marker
          coordinate={{ latitude: 24.148533, longitude: 120.673439 }}
        />
      </MapView>
    );
  }

}
