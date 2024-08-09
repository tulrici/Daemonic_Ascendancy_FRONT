import React from 'react';
import { Text, View } from 'react-native';
import Style from '../../styles/commonStyles';

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
    <View style={Style.itemContainer}>
      <Text style={Style.gameName}>{name}</Text>
      <Text style={Style.players}>{namePlayer1} vs {namePlayer2}</Text>
      <Text style={Style.score}>Score: {scorePlayer1} - {scorePlayer2}</Text>
      <Text style={Style.winner}>{winner()}</Text>
      <Text style={Style.date}>Date: {date}</Text>
    </View>
  );
}