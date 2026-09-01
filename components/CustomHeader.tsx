import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomHeader = ({
  title,
}: {
  title: string;
}) => {
  return (
    <View style={styles.header}>

      <Text style={styles.title}>
        {title}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 15,
    backgroundColor: '#007AFF',
  },

  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;