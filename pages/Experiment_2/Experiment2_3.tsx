import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Experiment2_3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          source={{uri: 'https://avatars.githubusercontent.com/u/12345678?v=4'}}
          style={styles.image}
        />

        <Text style={styles.name}>Haris Desai</Text>
        <Text>PRN: 23UAM026</Text>
        <Text>Department: AIML</Text>
        <Text>Year: 4th Year</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '80%',
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default Experiment2_3;