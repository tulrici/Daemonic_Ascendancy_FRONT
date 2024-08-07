import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import HooksExampleScreen from '../screens/HooksExampleScreen';
import DemoMenu from '../screens/DemoMenu';
import CreateUserScreen from '../screens/CreateUserScreen';
import Jambon from '../screens/Jambon';
import GameVue from '../screens/GameVue';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="User" component={UserScreen} options={{ title: 'Utilisateurs' }} />
        <Stack.Screen name="HooksExample" component={HooksExampleScreen} options={{ title: 'Exemples de Hooks' }} />
        <Stack.Screen name="DemoMenu" component={DemoMenu} options={{ title: 'DemoMenu' }} />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{ title: 'Créer un Utilisateur' }} />
        <Stack.Screen name="Jambon" component={Jambon} options={{ title: 'Jambon' }} />
        <Stack.Screen name="Games" component={GameVue} options={{ title: 'Games' }} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
