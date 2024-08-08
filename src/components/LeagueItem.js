import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function LeagueItem({ name }) {

    function first() {
        return ("JeanMich(s) is currently first of the league with n points !");
    }
//TODO : return the first, firsts if exaequo of the league
// trier "user.thisleague.score" ?


    return (
        <View style={styles.itemContainer}>
            <Text style={styles.ligueName}>{name}</Text>
            {first()}

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameVue')}>
                <Text style={styles.buttonText}>Voir les games de la ligue</Text>
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
});
