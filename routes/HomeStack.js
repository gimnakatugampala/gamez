import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/home'
import ReviewDetails from '../screens/ReviewDetails'

import Header from '../shared/Header';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title:'Gamezone', 
          headerStyle: {
            backgroundColor: '#eee',
            height:60
          },
          headerTitle:() => <Header />
        }}
        />
        

        <Stack.Screen name="ReviewDetails" component={ReviewDetails}  options={{title:'Review Details', headerStyle: {
            backgroundColor: '#eee', height:60
          }}} />

      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default HomeStack