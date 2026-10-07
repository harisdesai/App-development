import React from 'react';
import {View, StyleSheet,Text } from 'react-native';

const Experiment2_1 = () => {
    return <View style={styles.container}>
      <Text>My name is Haris and this is my first MAD app</Text>
    </View>;
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Experiment2_1;