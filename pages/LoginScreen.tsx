import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  registerText: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
  emailInput: {
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  passwordInput: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
  },
});

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateLogin = () => {
    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (email === '') {
      setEmailError('Email is required');
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setEmailError('Enter a valid email');
        valid = false;
      }
    }

    if (password === '') {
      setPasswordError('Password is required');
      valid = false;
    }

    if (valid) {
      Alert.alert('Success', 'Login Successful');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.loginTitle}>
        Login
      </Text>

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.emailInput}
      />

      <Text style={styles.errorText}>
        {emailError}
      </Text>

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.passwordInput}
      />

      <Text style={styles.errorText}>
        {passwordError}
      </Text>

      <Button
        title="Login"
        onPress={validateLogin}
      />

      <Text
        style={styles.registerText}
        onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register
      </Text>

    </View>
  );
};

export default LoginScreen;