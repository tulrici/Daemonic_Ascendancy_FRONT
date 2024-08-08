import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LeagueItem from './LeagueItem';
import leaguesData from '../../api/leagues.json';

export default function LeagueListEnd() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ligues terminées:</Text>
            {leaguesData.leagues
                .filter(league => !league.live)
                .map((league, index) => (
                    <LeagueItem
                        key={index}
                        name={league.name}
                        namePlayers={league.users}
                        live={league.live}
                        navigation={navigation}
                    />
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 10,
        marginTop: 20, // Margin to separate from the previous section
    },
    title: {
        color: '#ffcc00', // Gold color for the title
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10, // Margin below the title
    },
});
