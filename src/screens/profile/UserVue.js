import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import UserList from '../../components/User/UserList';
import NavBar from '../../components/NavBar';

export default function UserVue({ navigation }) {
    return (
        <View style={styles.container}>
            <UserList />
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
