import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArticleJambon from '../components/ArticleJambon';
import jambonsData from '../api/Jambons.json';
import NavBar from '../components/NavBar';

export default function Jambon() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>Plus de Jambons, évidemment.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                <Text style={styles.buttonText}>Moins de Jambons, mais pourquoi ?</Text>
            </TouchableOpacity>

            <Text style={styles.countText}>Vous avez {count} jambons</Text>

            <TouchableOpacity style={styles.toggleButton} onPress={() => toggleVisible()}>
                <Text style={styles.toggleButtonText}>Toggle Jambon ci-dessous &#x1F447;</Text>
            </TouchableOpacity>

            {visible && jambonsData.jambonsData.map(element => (
                <ArticleJambon
                    key={element.id}  // Added key for list rendering
                    description={element.description}
                    url={element.url}
                />
            ))}

            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4E1D2',  // Light warm background color
        padding: 20,
    },
    button: {
        backgroundColor: '#D9743B',  // Warm, smoky orange
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFFFFF',  // White text for contrast
        fontSize: 16,
    },
    countText: {
        fontSize: 18,
        marginVertical: 10,
        color: '#6D4C41',  // Deep brown color
    },
    toggleButton: {
        backgroundColor: '#E4A25B',  // Light brown-orange
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    toggleButtonText: {
        color: '#FFFFFF',  // White text for contrast
        fontSize: 16,
    },
});
