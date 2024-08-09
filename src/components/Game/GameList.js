import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import GameItem from './GameItem';
import gamesData from '../../api/games.json';
import Style from '../../styles/commonStyles';  // Using the centralized styles

export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames(gamesData.games);
    }, []);

    return (
        <View style={Style.listContainer}>
            {games.map((game, index) => (
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
