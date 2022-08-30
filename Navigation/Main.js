import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import DetallePlato from '../Screens/DetallePlato';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="DetallePlato"
          component={DetallePlato}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main