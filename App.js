import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageRound from './Components/ImageRound';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://81.251.199.219:41235/API/utilisateurs")
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ImageRound name="test" url="https://w7.pngwing.com/pngs/344/176/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" />
      <ImageRound name="bonjour" url="https://cdn.motor1.com/images/mgl/NGOMej/s1/4x3/bmw-i5-edrive40-2023.webp" height="150" />
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
