/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import CurrentLocationButton from '../components/currentLocationButton';

class Map extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            region: null
        }
    }
     _getLocationAsync = async() =>
    {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted')
        {console.log('Permission to acess location was denied.');}

        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045,
        };
        this.setState({region: region});
    };
    centerMap = () => {
        const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state.region;
       this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
        });
    console.log(latitude);
    };
    render()
 {
    return (
        <View style={styles.container}>
            <CurrentLocationButton cb={() => this.centerMap()}/>
            <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion ={this.state.region}
            showsUserLocation={true}
            showsCompass={true}
            rotateEnabled={false}
            style={styles.mapStyle}
            ref={(ref)=> {this.map = ref}}
            onRegionChange={this._getLocationAsync}
            />
        </View>
    );
};
}
 const styles = StyleSheet.create({
     container:
     {
         flex: 1,
         backgroundColor: '#fff',
     },
     mapStyle:
     {
         flex:1,
         marginTop: '8%'
     },
 });
export default Map;
