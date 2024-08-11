import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import GameList from '../../components/Game/GameList';
import NavBar from '../../components/NavBar';
import styles from '../../styles/commonStyles';


export default function GameVue({ navigation }) {
    return (
        <View style={styles.containerVue}>
            <GameList />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AddGame')}>
                <Text style={styles.buttonText}>Add a Game</Text>
            </TouchableOpacity>

            <NavBar />
        </View>
    );
}
