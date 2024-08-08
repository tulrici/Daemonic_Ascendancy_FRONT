import React from 'react';
import { View, StyleSheet } from 'react-native';
import LeagueItem from './LeagueItem';
import leaguesData from '../../api/leagues.json';

export default function LeagueList({navigation}) {
    return (
        <View>
            {leaguesData.leagues
                .filter(league => league.live)
                .map((league, index) => (
                    <LeagueItem
                        key={index}
                        name={league.name}
                        namePlayers={league.users}
                        league={league}
                        live={league.live}
                        navigation={navigation}
                    />
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 10,
    },
});
