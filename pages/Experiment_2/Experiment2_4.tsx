import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Experiment2_4 = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter App</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => setCount(count + 1)}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={() => setCount(count - 1)}
        />
      </View>  

      <Button
        title="Reset"
        onPress={() => setCount(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  count: {
    fontSize: 40,
    marginBottom: 50,
  },

  button: {
    marginBottom: 10,
  },
});

export default Experiment2_4;