import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Experiment3_1=() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>Haris</Text>

      <Button title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  text: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 10,
  },

  scrollContainer: {
    height: 250,
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
  },
});

export default Experiment3_1;