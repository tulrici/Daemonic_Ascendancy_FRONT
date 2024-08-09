import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Styles for GameList component
    listContainer: {
        flex: 1,
        backgroundColor: '#1c1c1c', // Dark background for the list
        padding: 10,
    },
    // Styles for GameItem component
    itemContainer: {
        backgroundColor: '#2c2c2c', // Dark background for each game item
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444444', // Slightly lighter border
    },
    gameName: {
        color: '#ff6666',
        fontSize: 18,
        fontWeight: 'bold',
    },
    players: {
        color: '#cccccc',
        fontSize: 16,
    },
    score: {
        color: '#ff6666',
        fontSize: 16,
    },
    winner: {
        color: '#ffcc00',
        fontSize: 16,
    },
    date: {
        color: '#cccccc',
        fontSize: 14,
    },
    // Styles for LeagueItem component
    ligueName: {
        color: '#ff6666',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Common styles for buttons
    button: {
        backgroundColor: '#ff4d4d', // Red background
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20, // Space above the button
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%', // Adjust as needed
        maxWidth: 300, // Limit maximum width
    },
    buttonText: {
        color: '#fff', // White text
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Styles for text containers
    textContainer: {
        color: '#ffcc00',
        fontSize: 14,
    },
    ligueName: {
        color: '#ff6666',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonTextLeague: {
        color: '#ffcc00', // Gold text on buttons
        fontSize: 12,
        textAlign: 'center',
    },
    textContainerLeague: {
        color: '#ffcc00',
        fontSize: 14,
    },




    
});

export default styles;
