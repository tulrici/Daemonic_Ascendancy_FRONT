import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Style from '../../styles/commonStyles';


export default function UserItem({ userName, email }) {

    return (
        <View style={Style.itemContainer}>
            <Text style={Style.userName}>{userName}</Text>
            <Text style={Style.email}>{email}</Text>
        </View>
    );
}
