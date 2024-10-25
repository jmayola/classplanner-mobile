import "../global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import LogInScreen from "./screens/LogInScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogInScreen">
        <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
