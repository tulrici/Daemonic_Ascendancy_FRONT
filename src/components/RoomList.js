import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoomItem from './RoomItem';
import RoomsData from '../api/rooms.json';

export default function RoomList() {
    return (
        <View>
            {RoomsData.rooms.map((Room, index) => (
                <RoomItem
                    key={index}
                    name={Room.name}
                    namePlayers={Room.users}
                    game={Room.game} //jeu joué
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 10,
    },
});
