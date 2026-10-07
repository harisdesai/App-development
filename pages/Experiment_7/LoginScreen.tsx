import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import {Context} from './Context';

const LoginScreen = ({navigation}: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(Context);

  const handleLogin = () => {

    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    login(email);

    Alert.alert('Success', 'Login Successful');

    navigation.navigate('Experiment7Home');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Experiment 7
      </Text>

      <Text style={styles.subtitle}>
        Context API Login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button
        title="Login"
        onPress={handleLogin}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
});

export default LoginScreen;