import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function UserItem({ userName, email }) {

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#2c2c2c', // Dark background for the box
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444444', // Slightly lighter border
    },
    gameName: {
        color: '#ff6666',
        fontSize: 18,
        fontWeight: 'bold',
    },
    players: {
        color: '#cccccc',
        fontSize: 16,
    },
    score: {
        color: '#ff6666',
        fontSize: 16,
    },
    winner: {
        color: '#ffcc00',
        fontSize: 16,
    },
    date: {
        color: '#cccccc',
        fontSize: 14,
    },
});
