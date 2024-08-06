import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, textButton
 }) {
  return (

    <TouchableOpacity className={color+"-500 hover:bg-"+color+"-700 text-white font-bold py-2 px-4 rounded shadow-lg"} onPress={() => navigation}>
    <Text className="text-center text-white text-lg">{textButton}</Text>
  </TouchableOpacity>

);
}

