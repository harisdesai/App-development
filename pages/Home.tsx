import React from 'react';
import { ScrollView } from 'react-native';
import ExperimentCard from '../components/ExperimentCard';

const Home = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ExperimentCard
        title="Experiment 2_1"
        onPress={() => navigation.navigate('Experiment2_1')}
      />

      <ExperimentCard
        title="Experiment 2_2"
        onPress={() => navigation.navigate('Experiment2_2')}
      />

      <ExperimentCard
        title="Experiment 2_3"
        onPress={() => navigation.navigate('Experiment2_3')}
      />

      <ExperimentCard
        title="Experiment 2_4"
        onPress={() => navigation.navigate('Experiment2_4')}
      />

      <ExperimentCard
        title="Experiment 3_1"
        onPress={() => navigation.navigate('Experiment3_1')}
      />

      <ExperimentCard
        title="Experiment 3_2"
        onPress={() => navigation.navigate('Experiment3_2')}
      />
      
      <ExperimentCard
        title="Experiment 3_3"
        onPress={() => navigation.navigate('Experiment3_3')}
      />

      <ExperimentCard
        title="LoginScreen"
        onPress={() => navigation.navigate('LoginScreen')}
      />

      <ExperimentCard
        title="RegisterScreen"
        onPress={() => navigation.navigate('RegisterScreen')}
      />

      <ExperimentCard
        title="Experiment 5"
        onPress={() => navigation.navigate('Experiment5')}
      />

      <ExperimentCard
        title="MainTabs"
        onPress={() => navigation.navigate('MainTabs')}
      />

    </ScrollView>
  );
};

export default Home;