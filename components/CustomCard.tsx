import React from 'react';
import {View, StyleSheet} from 'react-native';

const CustomCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
});

export default CustomCard;