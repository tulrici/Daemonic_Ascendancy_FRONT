import React from 'react';
import { View, StyleSheet } from 'react-native';
import LeagueItem from './LeagueItem';
import leaguesData from '../api/games.json';

export default function LeagueList() {
  return (
    <View>
      {leaguesData.map((league, index, users, live) => (
        <LeagueItem
          key={index}
          name={league.name}
          namePlayers={league.users}
          live={league.live}
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
