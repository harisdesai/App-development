import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Experiment3_2 = () => {

  const numbers = Array.from({length: 100}, (_, index) => index + 1);

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Scroll View</Text>

      <ScrollView style={styles.scrollContainer}>

        {numbers.map((number) => (
          <Text style={styles.text} key={number}>
           Product : {number}
          </Text>
        ))}

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  text: {
    textAlign: 'center',
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

export default Experiment3_2;