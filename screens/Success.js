/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { Component } from 'react';
import { Text,StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import { RFPercentage } from "react-native-responsive-fontsize";

 class Success extends Component {

     _renderButton = () =>
    {
        return (
            <Button style={styles.btnSignIn}
            onPress={() => {}}>
               <Text style={styles.btnTextSignIn}>
               GET STARTED
               </Text>
           </Button>
        );
    };
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.bodyContainer}>

                    <Text style={styles.bodyTextTitle}>
                    You are ready to go.!
                    </Text>
                    <View style={{height: "2%"}} />
                        <Text
                          style={styles.textBio}>
                            Thanks for taking your time to create account with us. Now
                        </Text>
                    <Text
                        style={styles.textBio}>
                            this is the fun part Let’s explore the app. </Text>
                    {this._renderButton()}

                </View>
                <View style={styles.footerContainer} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FCC332',
        flexDirection:'column',
      },
    bodyContainer:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:"8%",
        paddingTop:'6%',
        padding: '5%',

    },
    bodyTextTitle:
    {
        fontSize:RFPercentage(3.8),
        fontFamily: 'raleway-extrabold',
        alignItems:'center',
        marginTop:'15%',
    },
    btnSignIn:
    {
        backgroundColor:'#FB4C5A',
        borderRadius: 14,
        width:'90%',
        paddingTop: "4%",
        paddingBottom:"4%",
        marginTop: "15%",
    },
    btnTextSignIn:
    {
        letterSpacing: 1.8,
        fontSize:25,
        textAlign:'center',
        fontFamily:'roboto-blod',
        color:'#fff',

    },
    footerContainer:
    {
        backgroundColor: '#000',
        flex:0.30,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    textBio:
    {
        fontSize:10,
        fontFamily: 'roboto-medium',
        letterSpacing: 0.5,
    },
});
// eslint-disable-next-line eol-last
export default Success;