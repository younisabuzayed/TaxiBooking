/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React,{useState} from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SignUpUser } from "../src/actions/AuthAction";
import { connect } from "react-redux";

const height = Dimensions.get('window').height + 28;
const SignUp = (props) => {
  const [inputs, setInputs] = useState({
    name:'',
    email: '',
    password: '',
    phone: '',
});
const _onSignUpPressed = () =>
{
    const {email , password, phone, name } = inputs;
    SignUpUser({ email , password, phone, name });
};

const _renderButton = () =>
{
    return (
         <Button style={styles.btnSignUp}
         onPress={() => _onSignUpPressed()}
         >
         <Text style={styles.btnTextSignUp}>SIGN UP</Text>
       </Button>
    );
};
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Sign Up</Text>
          <View style={{ height: "10%" }} />
          <Text style={styles.textBioHeader}>
            Create an account to access the full{"\n"}
            version with all features.
          </Text>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.LabelText}>Name*</Text>
          <View style={{ height: "2%" }} />
          <Input
            placeholder="Lurch Schpellchek"
            // autoCapitalize=""
            autoCompleteType="name"
            onChangeText={(name) => setInputs({name})}
          />

          <View style={{ height: "3%" }} />

          <Text style={styles.LabelText}>Email ID*</Text>
          <View style={{ height: "2%" }} />
          <Input
            placeholder="schpellchek201@gmail.com"
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={(email) => setInputs({email})}
          />
          <View style={{ height: "3%" }} />

          <Text style={styles.LabelText}>Phone Number*</Text>
          <View style={{ height: "2%" }} />
          <Input
            placeholder="(+1) 352-262-5409"
            autoCapitalize="none"
            autoCompleteType="tel"
            onChangeText={(phone) => setInputs({phone})}
          />

          <View style={{ height: "3%" }} />

          <Text style={styles.LabelText}>Password*</Text>
          <View style={{ height: "2%" }} />
          <Input
            placeholder="*************"
            autoCapitalize="none"
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={(password) => setInputs({password})}
          />
          <Text style={styles.textRules}>
            By click you agree to our terms & Conditions as well as our Privacy
            policy.
          </Text>
          <View style={{ height: "5%" }} />
          {
            _renderButton()
          }
        </View>

        <View style={styles.footerContainer}>
          <View style={{ height: "10%" }} />
          <Button
            style={styles.btnSignin}
            onPress={() => props.navigation.navigate("SignIn")}
          >
            <Text style={styles.btnTextSignin}>
              Already have an account?{" "}
              <Text style={styles.btnTextSigninInside}>Sign In </Text>
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
    backgroundColor: "#fff",
    flexDirection: "column",
    height:height,
  },
  headerContainer: {
    flex: 0.3,
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 34,
    fontFamily: "raleway-extrabold",
    letterSpacing: 0.72,
    marginEnd: "2%",
    marginTop: "15%",
    marginStart: "5%",
  },
  textBioHeader: {
    fontSize: 15,
    letterSpacing: 1.4,
    padding: "1%",
    fontFamily: "roboto-regular",
    marginStart: "5%",
  },
  bodyContainer: {
    flex: 0.9,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "6%",
  },
  textRules: {
    fontSize: 12,
    fontFamily: "roboto-medium",
    color: "#000",
    letterSpacing: 0.48,
    paddingStart: "6%",
    paddingEnd: "6%",
    paddingTop: "5%",
  },
  btnSignUp: {
    backgroundColor: "#FB4C5A",
    borderRadius: 14,
    width: "90%",
    paddingTop: "4%",
    paddingBottom: "4%",
  },
  btnTextSignUp: {
    letterSpacing: 1.8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "roboto-blod",
    color: "#fff",
  },
  LabelText: {
    fontFamily: "roboto-medium",
    alignSelf: "flex-start",
    marginStart: "9%",
  },
  footerContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  LabelTextFooter: {
    fontFamily: "roboto-medium",
    color: "#000",
    fontSize: 13,
    letterSpacing: 0.45,
  },

  btnSignin: {
    marginBottom: "5%",
  },
  btnTextSignin: {
    fontFamily: "raleway-semibold",
  },
  btnTextSigninInside: {
    fontWeight: "bold",
    fontFamily: "roboto-blod",
  },
});

export default connect(null, {SignUpUser})(SignUp);
