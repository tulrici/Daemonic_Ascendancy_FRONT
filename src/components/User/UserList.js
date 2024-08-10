import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserItem from './UserItem';
import UsersData from '../../api/users.json';
import Style from '../../styles/commonStyles';


export default function UserList() {
    return (
        <View>
            {UsersData.users.map((User, index) => (
                <UserItem
                    key={index}
                    userName={User.userName}
                    email={Room.email}
                />
            ))}
        </View>
    );
}

