import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LeagueList from '../components/LeagueList';
import LeagueListEnd from '../components/LeagueListEnd';
import NavBar from '../components/NavBar';

export default function LeagueVue({ navigation }) {

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  }
  return (
    <View style={styles.container}>
      <LeagueList />

      <TouchableOpacity style={styles.button} onPress={() => toggleVisible}>
        <Text style={styles.buttonText}>Voir les ligues terminées</Text>
        {visible && <LeagueListEnd />}
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
  button: {
    backgroundColor: '#ff4d4d', // Red background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20, // Space above the button
    alignItems: 'center',
    justifyContent: 'center',
    // Ensure button is smaller than game containers
    width: '70%', // Adjust as needed
    maxWidth: 300, // Limit maximum width
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});
