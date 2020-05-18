import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

 const Button =(props)=> {

        return (
            <TouchableOpacity 
            style={props.style}
            onPress={props.onPress} >
                {props.children}
            </TouchableOpacity>
        )
  
}

const styles = StyleSheet.create({})
export default Button;