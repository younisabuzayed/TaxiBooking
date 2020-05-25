/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import React, { useState } from "react";
import Intro from "./screens/Intro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { Provider } from "react-redux";
import Store from './src/store/index';
import Success from './screens/Success';
import Map from "./screens/Map";

const getFonts = async () => {
  await Font.loadAsync({
    "raleway-extrabold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "raleway-blod": require("./assets/fonts/Raleway-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-blod": require("./assets/fonts/Raleway-Bold.ttf"),
    "raleway-semibold": require("./assets/fonts/Raleway-SemiBold.ttf"),
  });
};
const Stack = createStackNavigator();
export default function App({ navigator, route }) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
