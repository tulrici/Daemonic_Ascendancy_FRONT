import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import LeagueList from '../../components/League/LeagueList'; // Assuming this component displays live leagues
import LeagueListEnd from '../../components/League/LeagueListEnd'; // Assuming this component displays completed leagues
import NavBar from '../../components/NavBar';

export default function LeagueVue({ navigation=navigation }) {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => setVisible(!visible);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LeagueList navigation={navigation} />
                
                <View style={styles.toggleContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleVisible}>
                        <Text style={styles.buttonText}>Voir les ligues terminées</Text>
                    </TouchableOpacity>
                </View>
                
                {/* Conditionally render the completed leagues */}
                {visible && <LeagueListEnd />}
            </ScrollView>
            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    toggleContainer: {
        marginTop: 20, // Space between the leagues and the button
    },
    button: {
        backgroundColor: '#ff4d4d', // Red background
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%', // Adjust as needed
        maxWidth: 300, // Limit maximum width
    },
    buttonText: {
        color: '#fff', // White text
        fontSize: 16,
        fontWeight: 'bold',
    },
});
