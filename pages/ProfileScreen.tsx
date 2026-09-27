import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ProfileScreen = () => {
  const [name, setName] = useState('Haris');
  const [email, setEmail] = useState('');

  const updateProfile = () => {
    Alert.alert('Success', 'Profile Updated');
  };

  return (
    <View style={styles.container}>

      <CustomHeader
        title="Profile"
      />

      <CustomCard>

        <Text style={styles.profileTitle}>
          My Profile
        </Text>

        <CustomInput
          label="Name"
          value={name}
          onChangeText={setName}
        />

        <CustomInput
          label="Email"
          value={email}
          onChangeText={setEmail}
        />

        <CustomButton
          title="Update Profile"
          onPress={updateProfile}
        />

      </CustomCard>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;