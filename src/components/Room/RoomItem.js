import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Style from '../../styles/commonStyles';


export default function RoomItem({ name, users, game, reservationDate, logo }) {
    return (
        <View style={Style.itemContainerRoomItem}>
            <View style={Style.logoContainer}>
                <Image source={logo} style={Style.logo} />
            </View>
            <View style={Style.textContainerRoomItem}>
                <Text style={Style.roomName}>{name}</Text>
                <Text style={Style.users}>{users}</Text>
                <Text style={Style.game}>{game}</Text>
                <Text style={Style.date}>Date: {reservationDate}</Text>
            </View>
        </View>
    );
}

