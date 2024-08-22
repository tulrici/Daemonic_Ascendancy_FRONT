import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddGame from '../screens/game/AddGame';
import DemoMenu from '../screens/DemoMenu';
import GameVue from '../screens/game/GameVue';
import GameVueLeague from '../screens/game/GameVueLeague';
import HooksExampleScreen from '../screens/HooksExampleScreen';
import HomeScreen from '../screens/HomeScreen';
import Jambon from '../screens/Jambon';
import LeagueVue from '../screens/league/LeagueVue';
import RoomVue from '../screens/room/RoomVue';
import CreateUserScreen from '../screens/CreateUserScreen';
import User from '../screens/profile/UserVue';
import UserPreferences from '../screens/profile/UserPreferences';
import UserVue from '../screens/profile/UserVue';

import Style from '../styles/commonStyles';


const Stack = createStackNavigator();

// aligner les boutons, tous de la même taille
// aouter photos de profil, photos des games


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" screenOptions={Style.ScreenOptions} >
        <Stack.Screen name="AddGame" component={AddGame} options={{ title: 'Ajouter une Game' }} />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{ title: 'Créer un Utilisateur' }} />
        <Stack.Screen name="DemoMenu" component={DemoMenu} options={{ title: 'DemoMenu' }} />
        <Stack.Screen name="GameVue" component={GameVue} options={{ title: 'Liste des Games' }} />
        <Stack.Screen name="GameVueLeague" component={GameVueLeague} options={{ title: 'Games jouées dans la ligue' }} />
        <Stack.Screen name="HooksExample" component={HooksExampleScreen} options={{ title: 'Exemples de Hooks' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Jambon" component={Jambon} options={{ title: 'Jambon' }} />
        <Stack.Screen name="LeagueVue" component={LeagueVue} options={{ title: 'Liste des Leagues' }} />
        <Stack.Screen name="RoomVue" component={RoomVue} options={{ title: 'Liste des Salles' }} />
        <Stack.Screen name="User" component={User} options={{ title: 'Votre compte' }} />
        <Stack.Screen name="UserPreferences" component={UserPreferences} options={{ title: 'User Preferences' }} />
        <Stack.Screen name="UserVue" component={UserVue} options={{ title: 'User Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

