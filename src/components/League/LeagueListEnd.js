import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LeagueItem from './LeagueItem';
import leaguesData from '../../api/leagues.json';
import Style from '../../styles/commonStyles';

export default function LeagueListEnd() {
    return (
        <View style={Style.containerListEnd}>
            <Text style={Style.titleListEnd}>Ligues terminées:</Text>
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

