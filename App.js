/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Page1 from './Page1';
import Page2 from './Page2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name=" " component={Page1} />
        <Tab.Screen name="  " component={Page2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
  
*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from './Page1';
import Page2 from './Page2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Page1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Page2}
          options={{ title: 'Cart' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;