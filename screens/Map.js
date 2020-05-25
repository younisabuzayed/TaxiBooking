/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import CurrentLocationButton from '../components/currentLocationButton';

const Map = () => {
    const [Region,setRegion] = useState({region:null});
    useEffect(() => {
        _getLocationAsync();
    });

    const _getLocationAsync = async() =>
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
        setRegion({region: region});
    };
    const centerMap = () => {
        const {latitude, longitude, latitudeDelta, longitudeDelta} = Region.region;
       Map.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
        }, 1000);
    console.log(latitude);
    };

    return (
        <View style={styles.container}>
            <CurrentLocationButton cb={() => centerMap()}/>
            <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion ={Region.region}
            showsUserLocation={true}
            showsCompass={true}
            rotateEnabled={false}
            style={styles.mapStyle}
            ref={ref => {Map.map = ref;}}
            />
        </View>
    );
};
 const styles = StyleSheet.create({
     container:
     {
         flex: 1,
         backgroundColor: '#fff',
     },
     mapStyle:
     {
         flex:1,
         marginTop: '8%',
     },
 });
export default Map;