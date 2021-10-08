import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack