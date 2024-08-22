import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import GameList from '../../components/Game/GameList';
import NavBar from '../../components/NavBar';
import styles from '../../styles/commonStyles';


export default function GameVueLeague({ route, navigation }) {
    const { league } = route.params;  // Destructure league from route params

    const [visible, setVisible] = useState(league.live);

    return (
        <View style={styles.container}>
            <GameList leagueId={league.id} />

            {/* Add a game button only if league is alive */}
            {visible &&
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('AddGame', { leagueId: league.id })}>
                    <Text style={styles.buttonText}>Add a Game</Text>
                </TouchableOpacity>
            }
            <NavBar />
        </View>
    );
}

//TODO: finish the refactoring of the styles
// const styles = StyleSheet.create({
//     containerVue: {
//         flex: 1,
//         backgroundColor: '#1a1a1a',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20,
//     },
//     button: {
//         backgroundColor: '#ff4d4d', // Red background
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//         marginTop: 20, // Space above the button
//         alignItems: 'center',
//         justifyContent: 'center',
//         // Ensure button is smaller than game containers
//         width: '70%', // Adjust as needed
//         maxWidth: 300, // Limit maximum width
//     },
//     buttonText: {
//         color: '#fff', // White text
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });
