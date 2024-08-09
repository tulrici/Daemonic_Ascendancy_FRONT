import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function LeagueItem({ name, league, navigation }) {  // Accept 'league' as a prop

    function first() {
        //TODO BACKEND: return the first(s) of the league
        return (
            <Text style={styles.textContainer}>
                JeanMich(s) is currently first of the league with n points!
            </Text>
        );
    }

    // GameVueLeague link doesn't work for the dead leagues yet because the games don't have the league attribute yet
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('GameVueLeague', { league })}  // Pass 'league' as a param
            >
                <Text style={styles.ligueName}>{name}</Text>
                {first()}
                <Text style={styles.buttonText}>See the league's games</Text>
            </TouchableOpacity>
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
    ligueName: {
        color: '#ff6666',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#ffcc00', // Gold text on buttons
        fontSize: 12,
        textAlign: 'center',
    },
    textContainer: {
        color: '#ffcc00',
        fontSize: 14,
    },
});
