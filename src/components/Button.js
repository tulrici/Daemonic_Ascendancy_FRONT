import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ url, textButton, color, navigation }) {
  return (

    <TouchableOpacity className={color+"-500 hover:bg-"+color+"-700 text-white font-bold py-2 px-4 rounded shadow-lg"} onPress={() => navigation}>
      <Text className="text-center text-white text-lg">{textButton}</Text>
    </TouchableOpacity>

);
}

const styles = StyleSheet.create({
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuText: {
    color: 'white',
    fontSize: 18,
  },
});