import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import NavBar from '../../components/NavBar';

export default function UserPreferences({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Nothing Burger for now</Text>

            {/* Placeholder image, replace with a valid source */}
            <Image
                source={'assets/nothing.jpeg'}
                style={{ width: 200, height: 200 }}
            />

            {/* Placeholder buttons */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button 3</Text>
            </TouchableOpacity>

            <NavBar />
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
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffcc00', // Gold color for a striking effect
        textShadowColor: '#000000', // Shadow for a more ominous effect
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#ffffff', // White background for button
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#444444', // Slightly lighter border for button
        width: '80%', // Ensuring all buttons are the same width
        alignItems: 'center', // Center the text inside the button
    },
    buttonText: {
        color: '#000000', // Black text on buttons
        fontSize: 18,
        textAlign: 'center',
    },
    appVersion: {
        fontSize: 12, // Much smaller font size for version information
        color: '#ffffff', // White text
        marginTop: 10,
    },
});
