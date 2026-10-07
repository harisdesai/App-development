import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Experiment3_3 = () => {

  const intro = [
    `Hello, my name is Haris Desai. I am currently pursuing my Bachelor of Technology in Artificial Intelligence and Machine Learning. I am interested in software development, artificial intelligence, machine learning, and building real-world applications.

I enjoy learning new technologies and improving my programming skills. I have worked with Java, Python, JavaScript, React, React Native, Node.js, Express, and MySQL.

During my academic journey, I have worked on different projects related to artificial intelligence, machine learning, web development, and generative AI. These projects have helped me understand how technology can be used to solve real-world problems.

I am also interested in REST APIs, databases, backend development, and mobile application development. I enjoy creating applications and learning how the frontend, backend, and database communicate with each other.

Apart from academics, I regularly practice programming and problem-solving. I believe that solving coding problems helps me improve my logical thinking and programming skills.

My goal is to become a skilled AI and full-stack developer. I want to build useful applications using artificial intelligence and modern software technologies.

I believe that learning is a continuous process. I always try to learn new concepts and apply them by creating projects.

Thank you for taking the time to know about me.`
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Flat List</Text>

      <FlatList
        style={styles.flatList}
        data={intro}
        renderItem={({item}) => (
          <Text style={styles.paragraph}>{item}</Text>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 50,
  },

  heading: {
    fontSize: 26,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  flatList: {
    width: '90%',
    height: 400,
    borderWidth: 2,
    borderColor: 'white',
  },

  paragraph: {
    fontSize: 18,
    color: 'white',
    lineHeight: 30,
    padding: 20,
  },
});

export default Experiment3_3;