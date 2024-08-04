import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import MenuRight from '../components/MenuRight';

export default function DemoMenu({ navigation }) {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-5">
      <MenuRight navigation={navigation} />
      <Image source={require('../../assets/favicon.png')} className="w-36 h-36 mb-10" />
      <Text className="text-2xl font-bold mb-5 text-center text-gray-800">Bienvenue chez Location de Véhicules</Text>
      <Text className="text-lg text-gray-600 text-center mb-5">Réservez votre véhicule préféré facilement et rapidement</Text>
      <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg mb-5" onPress={() => navigation.navigate('User')}>
        <Text className="text-center text-white text-lg">Voir les utilisateurs</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg" onPress={() => navigation.navigate('HooksExample')}>
        <Text className="text-center text-white text-lg">Voir les Exemples de Hooks</Text>
      </TouchableOpacity>
      
    </View>
  );
}
