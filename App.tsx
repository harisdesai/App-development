import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Experiment2_1 from './pages/Experiment2_1';
import Experiment2_2 from './pages/Experiment2_2';
import Experiment2_3 from './pages/Experiment2_3';
import Experiment2_4 from './pages/Experiment2_4';
import Experiment3_1 from './pages/Experiment3_1';
import Experiment3_2 from './pages/Experiment3_2';
import Experiment3_3 from './pages/Experiment3_3';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'My Experiments' }}
        />

        <Stack.Screen
          name="Experiment2_1"
          component={Experiment2_1}
        />

        <Stack.Screen
          name="Experiment2_2"
          component={Experiment2_2}
        />

        <Stack.Screen
          name="Experiment2_3"
          component={Experiment2_3}
        />

        <Stack.Screen
          name="Experiment2_4"
          component={Experiment2_4}
        />

        <Stack.Screen
          name="Experiment3_1"
          component={Experiment3_1}
        />

        <Stack.Screen
          name="Experiment3_2"
          component={Experiment3_2}
        />

        <Stack.Screen
          name="Experiment3_3"
          component={Experiment3_3}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}