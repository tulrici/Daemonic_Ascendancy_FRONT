import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoomItem from './RoomItem';
import RoomsData from '../../api/rooms.json';
import Style from '../../styles/commonStyles';

export default function RoomList() {
    return (
        <View>
            {RoomsData.rooms.map((Room, index) => (
                <RoomItem
                    key={index}
                    name={Room.name}
                    namePlayers={Room.users}
                    logo={Room.logo}
                    reservationDate={Room.reservationDate}
                    game={Room.game} //jeu joué
                />
            ))}
        </View>
    );
}
