import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfilePage from "../screens/ProfilePage";
import Explorepage from "../screens/ExplorePage";
import ChatPage from "../screens/ChatPage";
import FriendsPage from "../screens/FriendsPage";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="Signup" options={{headerShown: false}} component={SignUpScreen} />
                <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfilePage} />
                <Stack.Screen name="Explore" options={{headerShown: false}} component={Explorepage} />
                <Stack.Screen name="Chat" options={{headerShown: false}} component={ChatPage} />
                <Stack.Screen name="Friends" options={{headerShown: false}} component={FriendsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;