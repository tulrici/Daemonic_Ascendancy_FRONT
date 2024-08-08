import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import HooksExampleScreen from '../screens/HooksExampleScreen';
import DemoMenu from '../screens/DemoMenu';
import CreateUserScreen from '../screens/CreateUserScreen';
import Jambon from '../screens/Jambon';
import GameVue from '../screens/Game/GameVue';
import AddGame from '../screens/Game/AddGame';
import LeagueVue from '../screens/league/LeagueVue';
import User from '../screens/profile/UserVue';
import RoomVue from '../screens/room/RoomVue';

import GameVueLeague from '../screens/Game/GameVueLeague';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1c1c1c', // Same dark gray color as the bottom navbar
          },
          headerTintColor: '#fff', // White color for the header text and icons
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="HooksExample" component={HooksExampleScreen} options={{ title: 'Exemples de Hooks' }} />
        <Stack.Screen name="DemoMenu" component={DemoMenu} options={{ title: 'DemoMenu' }} />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{ title: 'Créer un Utilisateur' }} />
        <Stack.Screen name="Jambon" component={Jambon} options={{ title: 'Jambon' }} />
        <Stack.Screen name="GameVue" component={GameVue} options={{ title: 'Liste des Games' }} />
        <Stack.Screen name="GameVueLeague" component={GameVueLeague} options={{ title: 'Games jouées dans la ligue' }} /> 
        <Stack.Screen name="AddGame" component={AddGame} options={{ title: 'Ajouter une Game' }} />  
        <Stack.Screen name="LeagueVue" component={LeagueVue} options={{ title: 'Liste des Leagues' }} />  
        <Stack.Screen name="UserVue" component={User} options={{ title: 'Votre compte' }} />
        <Stack.Screen name="RoomVue" component={RoomVue} options={{ title: 'Liste des Salles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
