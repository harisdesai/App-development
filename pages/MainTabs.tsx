import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createMaterialTopTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />

    </Tab.Navigator>
  );
};

export default MainTabs;