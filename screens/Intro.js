/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { Component } from 'react';
import { Text,StyleSheet, View } from 'react-native';
import Logo from '../assets/img/logo.svg';
import Button from '../components/Button';
import { RFPercentage } from "react-native-responsive-fontsize";

 class Intro extends Component {

    render() {
        return (
            <View style={styles.container}>

                 <View style={styles.headerContainer} >
                    <Button text="SKIP" style={styles.btnheaderStyle}
                                onPress={() =>  this.props.navigation.navigate('SignIn')}                                >
                    <Text style={styles.headerbtnText}>SKIP</Text>
                    </Button>

                </View>

                <View style={styles.bodyContainer}>

                    <Logo width={134} height={80} />
                    <View style={{height: 28}} />
                    <Text style={styles.bodyTextTitle}>
                        Airport Transfers & Long
                    </Text>
                    <Text  style={styles.bodyTextTitle}>
                        Distance Taxi
                    </Text>
                    <View style={{height: 23}} />
                    <Text
                        style={styles.textBio}>
                            Relax and do whatever fits with your design process. </Text>
                    <Text
                        style={styles.textBio}>
                            Don’t set a lot of restrictive hard and fast rules use </Text>
                    <Text
                     style={styles.textBio}>
                         filler text helps your design process.</Text>

                </View>
                <View style={styles.footerContainer}>
                    <Button
                     text="Create an Account"
                     style={styles.btnFooter}
                     onPress={() => this.props.navigation.navigate("SignUp")}  >
                        <Text style={{color: '#fff',fontFamily:'raleway-blod'}}>
                        Create an Account
                        </Text>
                    </Button>
                </View>

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
    headerContainer:
    {
        alignItems:'flex-end',
        marginTop:"7.9%",
    },
    btnheaderStyle:
    {
        marginTop:10,
        height:15,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    headerbtnText:
    {
        fontSize:20,
        fontFamily: 'raleway-extrabold',
        letterSpacing: 0.72,
        marginEnd: "2%",
    },
    bodyContainer:
    {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:"8%",
        paddingTop:'6%',

    },
    bodyTextTitle:
    {
        fontSize:RFPercentage(3.8),
        fontFamily: 'raleway-extrabold',
        alignItems:'center',
    },
    footerContainer:
    {
        backgroundColor: '#000',
        flex:0.30,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    btnFooter:
    {
        backgroundColor:'#FB4C5A',
        paddingBottom:15,
        paddingTop:15,
        paddingStart:85,
        paddingEnd:85,
        borderRadius: 50,
        marginVertical: "7%",
    },
    textBio:
    {
        fontSize:13.5,
        fontFamily: 'roboto-medium',
    },
});
// eslint-disable-next-line eol-last
export default Intro;