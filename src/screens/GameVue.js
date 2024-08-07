import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GameList from '../components/GameList';

export default function GameVue() {
  return (
    <View style={styles.container}>
      <GameList />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  });