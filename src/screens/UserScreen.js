import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { getUserApi } from '../api/userApi';
import NavBar from '../components/NavBar';

export default function UserScreen({ navigation }) {
  const [utilisateurs, setUser] = useState([]); // useState update view when the state changes
  const [loading, setLoading] = useState(false);
  
  // useEffect is a hook that runs after the first render and every time the component updates
  useEffect(() => {
    fetchUsers();
  }, []);

  // async function linked to await because we have to wait for the response from the server
  async function fetchUsers() {
    try {
      setLoading(true);
      setUser(await getUserApi());
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally { // passage obligatoire
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {Array.isArray(utilisateurs) && utilisateurs.map((user, index) => (
          <View key={index} style={styles.userCard}>
            <Text style={styles.userName}>{user.nom}</Text>
            <Text style={styles.userInfo}>Other Info: {user.otherInfo}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateUser')}>
        <Text style={styles.buttonText}>Ajouter un Utilisateur</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={fetchUsers}>
        <Text style={styles.buttonText}>Refresh Users</Text>
      </TouchableOpacity>

      <NavBar />
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
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 14,
    color: '#666',
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
