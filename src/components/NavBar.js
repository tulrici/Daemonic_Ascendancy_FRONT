// components/NavBar.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from '../styles/commonStyles';


export default function NavBar() {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    const navigateToProfile = () => {
        navigation.navigate('UserVue');
    };

    return (
        <View style={Style.containerNavBar}>
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

});
