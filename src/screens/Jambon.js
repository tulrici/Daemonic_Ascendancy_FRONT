import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import ArticleJambon from '../components/ArticleJambon';

export default function Jambon({}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
    };


  return (
    <View>
      <TouchableOpacity 
      onPress={() => setCount(count + 1)}>
        <Text>Plus de Jambons, évidemment.</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCount(count - 1)}>
        <Text>Moins de Jambons, mais pourquoi ?</Text>
      </TouchableOpacity>

      <Text>Vous avez {count} jambons</Text>

        <TouchableOpacity onPress={() => toggleVisible()}>
            <Text>Créer un Jambon à regarder</Text>
        </TouchableOpacity>
        {visible && <ArticleJambon />}
    </View>
  );
}

const styles = StyleSheet.create({
  TextTitre: {
    color: '#fff',
    fontSize: 25,
  },
});