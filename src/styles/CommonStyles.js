import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a', // Dark background
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: '#ffffff', // White background for button
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#444444', // Slightly lighter border for button
        minWidth: 250, // Ensures buttons have the same width
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000', // Black text on buttons
        fontSize: 18,
        textAlign: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffcc00', // Gold color for a striking effect
        textShadowColor: '#000000', // Shadow for a more ominous effect
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginBottom: 15,
    },
    versionText: {
        fontSize: 12,
        color: '#aaaaaa', // Light grey text for the version number
        marginTop: 20,
    },
});
