import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameItem from './GameItem';
import gamesData from '../../api/games.json';

export default function GameList() {
    return (
        <View>
            {gamesData.games.map((game, index) => (
                <GameItem
                    key={index}
                    name={game.name}
                    namePlayer1={game.users[0].name}
                    namePlayer2={game.users[1].name}
                    scorePlayer1={game.scorePlayer1}
                    scorePlayer2={game.scorePlayer2}
                    date={game.date}
                    league={game.league}
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
