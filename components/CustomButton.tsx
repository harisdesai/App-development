import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 30,
  },

  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CustomButton;
