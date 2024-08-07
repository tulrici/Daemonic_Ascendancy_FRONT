import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function LeagueItem({ name }) {
  
  return (
    <View style={styles.itemContainer}>
    <Text style={styles.ligueName}>{name}</Text>
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameVue')}>
        <Text style={styles.buttonText}>Voire les games</Text>
      </TouchableOpacity>


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
  ligueName: {
    color: '#ff6666',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
