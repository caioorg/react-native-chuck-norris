// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Category from './src/containers/Category';
import Jokes from './src/containers/Jokes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Jokes" component={Jokes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
