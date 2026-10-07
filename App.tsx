import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Experiment2_1 from './pages/Experiment_2/Experiment2_1';
import Experiment2_2 from './pages/Experiment_2/Experiment2_2';
import Experiment2_3 from './pages/Experiment_2/Experiment2_3';
import Experiment2_4 from './pages/Experiment_2/Experiment2_4';
import Experiment3_1 from './pages/Experiment_3/Experiment3_1';
import Experiment3_2 from './pages/Experiment_3/Experiment3_2';
import Experiment3_3 from './pages/Experiment_3/Experiment3_3';
import RegisterScreen from './pages/Experiment_4/RegisterScreen';
import LoginScreen from './pages/Experiment_4/LoginScreen';
import Experiment5 from './pages/Experiment_5/Experiment5';
import MainTabs from './pages/Experiment_6/MainTabs';
import Experiment7 from './pages/Experiment_7/Experiment7';


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

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Experiment5"
          component={Experiment5}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
        />

        <Stack.Screen
          name="Experiment7"
          component={Experiment7}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}