import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ContextProvider} from './Context';
import LoginScreen from './LoginScreen';
import Home from '../Home';

const Stack = createNativeStackNavigator();

const Experiment7 = () => {

  return (
    <ContextProvider>

      <Stack.Navigator>

        <Stack.Screen
          name="Experiment7Login"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />

        <Stack.Screen
          name="Experiment7Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />

      </Stack.Navigator>

    </ContextProvider>
  );
};

export default Experiment7;