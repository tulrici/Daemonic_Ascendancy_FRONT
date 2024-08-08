import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function RoomItem({ name, users, game, reservationDate, logo }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.roomName}>{name}</Text>
                <Text style={styles.users}>{users}</Text>
                <Text style={styles.game}>{game}</Text>
                <Text style={styles.date}>Date: {reservationDate}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row', // Align items horizontally
        backgroundColor: '#2c2c2c', // Dark background for the box
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444444', // Slightly lighter border
        alignItems: 'center', // Center items vertically
    },
    logoContainer: {
        marginRight: 15, // Space between logo and text
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25, // Optional: make the logo circular
    },
    textContainer: {
        flex: 1, // Allow text container to take up the remaining space
    },
    roomName: {
        color: '#ff6666', // Red color for room name
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    users: {
        color: '#ffcc00', // Gold color for users
        fontSize: 16,
        marginBottom: 5,
    },
    game: {
        color: '#cccccc', // Light grey color for game
        fontSize: 16,
        marginBottom: 5,
    },
    date: {
        color: '#cccccc', // Light grey color for date
        fontSize: 14,
    },
});
