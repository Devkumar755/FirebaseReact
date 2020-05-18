import React from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
             <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 30.7333,
            longitude: 76.7794,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
         
        >
        <Marker
            draggable
            coordinate={{
              latitude: 30.7333,
              longitude: 76.7794,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
