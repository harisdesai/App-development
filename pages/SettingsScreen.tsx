import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import CustomButton from '../components/CustomButton';

const SettingsScreen = () => {

  const accountSettings = () => {
    Alert.alert('Settings', 'Account Settings clicked');
  };

  const notificationSettings = () => {
    Alert.alert('Settings', 'Notification Settings clicked');
  };

  const aboutApp = () => {
    Alert.alert('About App', 'This is my React Native application.');
  };

  return (
    <View style={styles.container}>

      <CustomHeader
        title="Settings"
      />

      <CustomCard>

        <Text style={styles.title}>
          App Settings
        </Text>

        <CustomButton
          title="Account Settings"
          onPress={accountSettings}
        />

        <CustomButton
          title="Notification Settings"
          onPress={notificationSettings}
        />

        <CustomButton
          title="About App"
          onPress={aboutApp}
        />

      </CustomCard>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;