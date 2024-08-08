import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';

// Replace this with your local data source or a mock data update
import gamesData from '../../api/games.json'; // Adjust path as necessary

export default function AddGame({ navigation }) {
    const [formData, setFormData] = useState({
        name: 'Nom de la Game',
        namePlayer1: 'Player 1',
        namePlayer2: 'Player 2',
        scorePlayer1: 'Score Player 1',
        scorePlayer2: 'Score Player 2',
        date: new Date().toISOString().split('T')[0],
    });

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        const isValid = validateForm();
        if (!isValid) return;

        // Simulate adding the game to the local data source
        const newGame = {
            id: gamesData.length + 1, // Increment ID based on existing games length
            name: formData.name,
            users: [
                { id: 1, name: formData.namePlayer1 },
                { id: 2, name: formData.namePlayer2 },
            ],
            scorePlayer1: parseInt(formData.scorePlayer1, 10),
            scorePlayer2: parseInt(formData.scorePlayer2, 10),
            date: formData.date,
        };

        // Here you would add `newGame` to your local storage or state management solution

        Alert.alert('Succès', 'Game ajoutée avec succès.');
        navigation.navigate('GameVue'); // Navigate to the GameVue or relevant screen
    };

    const validateForm = () => {
        const requiredFields = ['name', 'namePlayer1', 'namePlayer2', 'scorePlayer1', 'scorePlayer2', 'date'];
        for (let field of requiredFields) {
            if (!formData[field] || (typeof formData[field] === 'string' && formData[field].trim() === '')) {
                Alert.alert('Erreur', `Le champ ${field.replace(/([A-Z])/g, ' $1').toUpperCase()} est obligatoire.`);
                return false;
            }
        }
        if (isNaN(formData.scorePlayer1) || isNaN(formData.scorePlayer2)) {
            Alert.alert('Erreur', 'Les scores doivent être des nombres.');
            return false;
        }
        return true;
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Object.keys(formData).map((key) => (
                <View key={key} style={styles.formGroup}>
                    <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={formData[key]}
                        value={formData[key]}
                        onChangeText={(text) => handleChange(key, text)}
                        keyboardType={key.includes('score') ? 'numeric' : 'default'}
                    />
                </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Valider</Text>
            </TouchableOpacity>

            <NavBar />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#1a1a1a', // Dark background
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        color: '#ffcc00', // Yellow color for labels
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#444', // Darker border color
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#333', // Dark input background
        color: '#fff', // White text color
    },
    button: {
        backgroundColor: '#ff4d4d', // Blue button
        padding: 15,
        borderRadius: 8,
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});
