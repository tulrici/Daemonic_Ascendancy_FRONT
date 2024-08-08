import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserItem from './UserItem';
import UsersData from '../../api/users.json';

export default function RoomList() {
    return (
        <View>
            {UsersData.users.map((User, index) => (
                <RoomItem
                    key={index}
                    userName={User.userName}
                    email={Room.email}
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
