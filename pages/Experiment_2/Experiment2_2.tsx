import React from 'react'; 
import {View, Text, Button, TextInput, StyleSheet} 
from 'react-native'; 

const Experiment2_2 = () => {
  return (
    <View style ={styles.container}>
      <Text style = {styles.text}>Login form</Text>
      <TextInput style = {styles.input} placeholder='Email' />
      <TextInput style = {styles.input} placeholder='Password' />
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    },

    text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: '5%',
    },

    input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: '1%',
    width: '80%',
    height: '5%',
    margin: '3%',
    },
});

export default Experiment2_2;