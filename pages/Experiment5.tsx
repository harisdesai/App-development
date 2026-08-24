import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const Experiment5 = () => {
  const [email, setEmail] = useState('');

  const sayHello = () => {
    Alert.alert('Hello User');
  };

  return (
    <View>
      <CustomButton title="Say Hello" onPress={sayHello} />

      <CustomInput
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );
};

export default Experiment5;
