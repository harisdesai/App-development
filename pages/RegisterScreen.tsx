import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  firstInput: {
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  loginText: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const validateRegister = () => {
    setError('');

    if (name === '') {
      setError('Name is required');
      return;
    }

    if (email === '') {
      setError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Enter a valid email');
      return;
    }

    if (password === '') {
      setError('Password is required');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (confirmPassword === '') {
      setError('Confirm password is required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    Alert.alert('Success', 'Registration Successful');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.firstInput}
      />

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.errorText}>{error}</Text>

      <Button title="Register" onPress={validateRegister} />

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Already have an account? Login
      </Text>
    </View>
  );
};

export default RegisterScreen;
