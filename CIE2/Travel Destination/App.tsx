import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Make sure these paths match your folder structure exactly
import Home from './src/screens/Home';
import Account from './src/screens/Account';

// Types for navigation
export type RootStackParamList = {
  Home: undefined;
  Account: { destination: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          // This line removes the "Home" and "Account" headers you see in your screenshots
          headerShown: false 
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="Account" 
          component={Account} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}