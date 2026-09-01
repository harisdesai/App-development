import React, {useState} from 'react';
import {View, Alert,} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CustomCard from '../components/CustomCard';
import CustomHeader from '../components/CustomHeader';

const Experiment5 = () => {
  const [email, setEmail] = useState('');

  const sayHello = () => {
    Alert.alert('Hello User');
  };

  return (
    <View style={{flex: 1}}>

      <CustomHeader 
        title="My App"
      />

      <CustomCard>

        <CustomInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          error="Invalid email"
        />

        <CustomButton
          title="Say Hello"
          onPress={sayHello}
        />

      </CustomCard>

    </View>
  );
};

export default Experiment5;