/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
 const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const currentLocationButton = (props) => {
    const cb = props.cb ? props.cb : () => console.log('callback Function not passed');
    const top = top ? top : 65;
    return (
        <View style={[styles.container, {bottom:height - top}]}>
            <MaterialIcons
             name="my-location"
             color="#000"
             size={25}
             onPress={() => {cb();} }
              />
        </View>
    );
};

export default currentLocationButton;

const styles = StyleSheet.create({
    container:
    {
        zIndex:9,
        position:'absolute',
        width: 45,
        height:45,
        backgroundColor:'#fff',
        left: width - 70,
        borderRadius: 50,
        shadowColor: '#000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity:1.0,
        justifyContent:'space-around',
        alignItems:'center',
    },
});

