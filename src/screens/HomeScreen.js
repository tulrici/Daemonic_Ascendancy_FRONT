import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/albericdevordeux-.jpg')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Daemonic Ascendency</Text>
      <Text style={styles.subtitle}> Try to climb your path to immortality</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User')}>
        <Text style={styles.buttonText}>Voir les utilisateurs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateUser')}>
        <Text style={styles.buttonText}>Create User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameVue')}>
        <Text style={styles.buttonText}>Liste des Games jouées</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Jambon')}>
        <Text style={styles.buttonText}>Exercices React Native</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200, // Larger size for a more dramatic effect
    height: 200,
    borderRadius: 100, // Circular image
    marginBottom: 30,
    borderColor: '#444444', // Light border to make the image stand out
    borderWidth: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffcc00', // Gold color for a striking effect
    textShadowColor: '#000000', // Shadow for a more ominous effect
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#cccccc', // Lighter gray for subtitle
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333333', // Dark button background
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#444444', // Slightly lighter border for button
  },
  buttonText: {
    color: '#ffcc00', // Gold text on buttons
    fontSize: 18,
    textAlign: 'center',
  },
});
