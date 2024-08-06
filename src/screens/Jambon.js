import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArticleJambon from '../components/ArticleJambon';
import jambonsData from '../api/Jambons.json';

export default function Jambon() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text>Plus de Jambons, évidemment.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCount(count - 1)}>
                <Text>Moins de Jambons, mais pourquoi ?</Text>
            </TouchableOpacity>

            <Text>Vous avez {count} jambons</Text>

            <TouchableOpacity onPress={() => toggleVisible()}>
                <Text>Toggle Jambon ci-dessous &#x1F447;</Text>
            </TouchableOpacity>

            {visible && jambonsData.jambonsData.map(element => (
                <ArticleJambon description={element.description} url={element.url} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
