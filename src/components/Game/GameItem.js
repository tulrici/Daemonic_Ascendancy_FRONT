import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function GameItem({ name, namePlayer1, namePlayer2, scorePlayer1, scorePlayer2, date }) {
  
  function winner(){
    if(scorePlayer1 > scorePlayer2){
      return "Winner: " + namePlayer1;
    }else if(scorePlayer1 < scorePlayer2){
        return "Winner: " + namePlayer2;
    }else{
        return "Draw";
    }}

    //add touchableopacity to navigate to the game details as in the league
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.gameName}>{name}</Text>
      <Text style={styles.players}>{namePlayer1} vs {namePlayer2}</Text>
      <Text style={styles.score}>Score: {scorePlayer1} - {scorePlayer2}</Text>
      <Text style={styles.winner}>{winner()}</Text>
      <Text style={styles.date}>Date: {date}</Text>
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
  gameName: {
    color: '#ff6666',
    fontSize: 18,
    fontWeight: 'bold',
  },
  players: {
    color: '#cccccc',
    fontSize: 16,
  },
  score: {
    color: '#ff6666',
    fontSize: 16,
  },
  winner: {
    color: '#ffcc00',
    fontSize: 16,
  },
  date: {
    color: '#cccccc',
    fontSize: 14,
  },
});
