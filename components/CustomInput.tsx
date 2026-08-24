import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({
  label,
  value,
  onChangeText,
  error,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={'Enter ' + label}
      />

      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginBottom: 15,
    marginTop: 20,
    marginHorizontal: 10,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },

  error: {
    color: 'red',
    marginTop: 5,
  },

});

export default CustomInput;