import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Homepage from "../screens/Homepage";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="Signup" options={{headerShown: false}} component={SignUpScreen} />
                //<Stack.Screen name="Home" options={{headerShown: false}} component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;