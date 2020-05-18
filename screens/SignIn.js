/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { LoginUser } from '../src/actions/AuthAction';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
 const height = Dimensions.get('window').height + 28;
const SignIn = (props) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
   const _onLoginPressed = () =>
    {
        const {email , password } = inputs;
        props.LoginUser({ email , password });
    };
    const _renderButton = () =>
    {
        return (
            <Button style={styles.btnSignIn}
            onPress={() => _onLoginPressed()}>
               <Text style={styles.btnTextSignIn}>
                   SIGN IN
               </Text>
           </Button>
        );
    };
    return (
        <KeyboardAwareScrollView  >
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Sign In</Text>
                    <View style={{height:"10%"}} />
                    <Text style={styles.textBioHeader}>
                        Welcome Back! Please login to your {"\n"}
                        account to access the full version.
                    </Text>

                </View>

                <View style={styles.bodyContainer}>

                    <Text style={styles.LabelText}>Email ID*</Text>
                    <View style={{height:"2%"}} />
                    <Input
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCompleteType="email"
                        onChangeText={(email) => setInputs({email})} />

                    <View style={{height:"4%"}} />

                    <Text style={styles.LabelText} >Password*</Text>
                    <View style={{height:"2%"}} />
                    <Input
                        placeholder="*************"
                        autoCapitalize="none"
                        autoCompleteType="password"
                        onChangeText={(password) => setInputs({password})}
                        secureTextEntry={true} />
                    <Button style={styles.btnForgotPassword} >
                        <Text style={styles.btnTextForgotPassword}>
                            Forgot Password?
                        </Text>
                    </Button>
                    <View style={{height:"6%"}} />
                    {_renderButton()}
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.LabelTextFooter}>
                    Or Connect using social Account
                    </Text>
                    <View style={{height:"6%"}} />
                    <Button style={styles.btnFacbook}>
                        <Text style={styles.btnTextFacbook}>
                        Connect with Facebook
                        </Text>
                    </Button>
                    <View style={{height:"6%"}} />
                    <Button style={styles.btnPhone}>
                        <Text style={styles.btnTextPhone}>
                        Connect with Phone Number
                        </Text>
                    </Button>
                    <View style={{height:"10%"}} />
                    <Button
                    style={styles.btnSignup}
                    onPress={() => props.navigation.navigate('SignUp')} >
                        <Text style={styles.btnTextSignup}>
                        Don’t have an account? <Text style={styles.btnTextSignupInside}>Sign Up </Text>
                        </Text>

                    </Button>
                </View>

            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        height: height,
      },
    headerContainer:
    {
        flex:3,
        alignItems:'flex-start',
    },
    headerText:
    {
        fontSize:34,
        fontFamily: 'raleway-extrabold',
        letterSpacing: 0.72,
        marginEnd: "2%",
        marginTop:"20%",
        marginStart: "5%",

    },
    textBioHeader:
    {
        fontSize:15,
        letterSpacing: 1.4,
        padding:'1%',
        fontFamily: 'roboto-regular',
        marginStart: "5%",
    },
    bodyContainer:
    {
        flex:5,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:'6%',

    },
    btnForgotPassword:
    {
        marginTop:'6%',
        alignSelf:'flex-end',
        marginEnd:'5%',
    },
    btnTextForgotPassword:
    {
        fontSize:13.5,
        fontFamily:"roboto-medium",
        color:'#000',
        letterSpacing: 0.48,
    },
    btnSignIn:
    {
        backgroundColor:'#FB4C5A',
        borderRadius: 14,
        width:'90%',
        paddingTop: "4%",
        paddingBottom:"4%",
    },
    btnTextSignIn:
    {
        letterSpacing: 1.8,
        fontSize:25,
        textAlign:'center',
        fontFamily:'roboto-blod',
        color:'#fff',

    },
    LabelText:
    {
        fontFamily:'roboto-medium',
        alignSelf:'flex-start',
        marginStart:"9%",

    },
    footerContainer:
    {
        flex:2,
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:'2%',

    },
    LabelTextFooter:
    {
        fontFamily:'roboto-medium',
        color:'#000',
        fontSize:13,
        letterSpacing: 0.45,
    },
    btnFacbook:
    {
        width:"90%",
        backgroundColor:"#1877F2",
        borderRadius: 12,

    },
    btnTextFacbook:
    {
        textAlign: 'center',
        paddingTop:'3%',
        paddingBottom:'3%',
        color:'#fff',
    },
    btnPhone:
    {
        width:"90%",
        borderRadius: 12,
        borderWidth:1,
        borderColor:'#FB4C5A',

    },
    btnTextPhone:
    {
        textAlign: 'center',
        paddingTop:'3%',
        paddingBottom:'3%',
        color:'#FB4C5A',
    },
    btnSignup:
    {

    },
    btnTextSignup:
    {
        fontFamily:'raleway-semibold',
    },
    btnTextSignupInside:
    {
        fontWeight:'bold',
        fontFamily:'roboto-blod',
    },
});
const mapStateToProps = state =>
{
    return {
        isLoading: state.auth.isLoading,
        user: state.auth.user,
        error: state.auth.error,
    };
};
export default connect(mapStateToProps, {LoginUser})(SignIn);
