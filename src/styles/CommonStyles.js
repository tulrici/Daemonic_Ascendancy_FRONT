import { StyleSheet, Dimensions } from 'react-native';

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
    containerListEnd: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 10,
        marginTop: 20, // Margin to separate from the previous section
    },
    titleListEnd: {
        color: '#ffcc00', // Gold color for the title
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10, // Margin below the title
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25, // Optional: make the logo circular
    },
    textContainerRoomItem: {
        flex: 1, // Allow text container to take up the remaining space
    },

    roomName: {
        color: '#ff6666', // Red color for room name
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    logoContainer: {
        marginRight: 15, // Space between logo and text
    },
    itemContainerRoomItem: {
        flexDirection: 'row', // Align items horizontally
        backgroundColor: '#2c2c2c', // Dark background for the box
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444444', // Slightly lighter border
        alignItems: 'center', // Center items vertically
    },
    users: {
        color: '#ffcc00', // Gold color for users
        fontSize: 16,
        marginBottom: 5,
    },
    game: {
        color: '#cccccc', // Light grey color for game
        fontSize: 16,
        marginBottom: 5,
    },
    date: {
        color: '#cccccc', // Light grey color for date
        fontSize: 14,
    },
    containerNavBar: {
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
    ScreenOptions: {
        headerStyle: {
          backgroundColor: '#1c1c1c', // Same dark gray color as the bottom navbar
        },
        headerTintColor: '#fff', // White color for the header text and icons
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }

});

export default styles;
