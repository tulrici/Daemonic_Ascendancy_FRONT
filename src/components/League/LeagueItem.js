import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Style from '../../styles/commonStyles';

export default function LeagueItem({ name, league, navigation }) {  // Accept 'league' as a prop

    function first() {
        //TODO BACKEND: return the first(s) of the league
        return (
            <Text style={Style.textContainerLeague}>
                JeanMich(s) is currently first of the league with n points!
            </Text>
        );
    }

    // GameVueLeague link doesn't work for the dead leagues yet because the games don't have the league attribute yet
    return (
        <View style={Style.itemContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('GameVueLeague', { league })}  // Pass 'league' as a param
>
                <Text style={Style.ligueName}>{name}</Text>
                {first()}
                <Text style={Style.buttonTextLeague}>See the league's games</Text>
            </TouchableOpacity>
        </View>
    );
}
