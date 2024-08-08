// components/NavBar.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NavBar() {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    const navigateToProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToHome} style={styles.navButton}>
                <Icon name="home" size={30} color="#fff" /> 
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToProfile} style={styles.navButton}>
                <Icon name="person" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1c', // Dark gray background
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#333', // Slightly lighter gray for border
        width: Dimensions.get('window').width, // Full width of the screen
        position: 'absolute',
        bottom: 0,
    },
    navButton: {
        padding: 10,
    },
});
