import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>


      <Image source={require('../../assets/favicon.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenue chez Location de Véhicules</Text>
      <Text style={styles.subtitle}>Réservez votre véhicule préféré facilement et rapidement</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User')}>
        <Text style={styles.buttonText}>Voir les utilisateurs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HooksExample')}>
        <Text style={styles.buttonText}>Voir les Exemples de Hooks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DemoMenu')}>
        <Text style={styles.buttonText}>Demo Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Jambon')}>
        <Text style={styles.buttonText}>Jambon</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
