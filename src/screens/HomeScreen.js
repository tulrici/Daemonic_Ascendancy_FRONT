import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/NavBar';

export default function HomeScreen({ navigation }) {
  const [maxButtonWidth, setMaxButtonWidth] = useState(0);

  // Hard-coded button padding
  // TODO create a .env file to store this value
  const buttonPadding = 40;

  const onTextLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    if (width > maxButtonWidth) {
      setMaxButtonWidth(width);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/albericdevordeux-.jpg')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Daemonic Ascendency</Text>
      <Text style={styles.subtitle}> Try to climb your path to immortality</Text>
      <TouchableOpacity
        style={[styles.button, { width: maxButtonWidth + buttonPadding * 2 }]} // Dynamic width with hard-coded padding
        onPress={() => navigation.navigate('LeagueVue')}
      >
        <Text style={styles.buttonText} onLayout={onTextLayout}>Leagues</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: maxButtonWidth + buttonPadding * 2 }]} // Dynamic width with hard-coded padding
        onPress={() => navigation.navigate('GameVue')}
      >
        <Text style={styles.buttonText} onLayout={onTextLayout}>Games</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: maxButtonWidth + buttonPadding * 2 }]} // Dynamic width with hard-coded padding
        onPress={() => navigation.navigate('RoomVue')}
      >
        <Text style={styles.buttonText} onLayout={onTextLayout}>Salles</Text>
      </TouchableOpacity>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderColor: '#444444',
    borderWidth: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffcc00',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#444444',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffcc00',
    fontSize: 18,
    textAlign: 'center',
  },
});
