# Daemonic Ascendancy

## Description

**Daemonic Ascendancy** est une application mobile développée en React Native destinée à la gestion de parties de jeux compétitifs, comme Warhammer 40K. Elle permet de réserver des salles de jeu, suivre les résultats des joueurs, gérer les ligues et accéder aux historiques de parties. Le projet est basé sur une architecture modulaire avec une navigation fluide, une API locale JSON simulée, et utilise Tailwind CSS pour la mise en forme rapide et responsive.

## Installation

1. Clonez ce dépôt :
```bash
git clone https://github.com/tulrici/Daemonic_Ascendancy_FRONT.git
```

2. Accédez au dossier :
```bash
cd Daemonic_Ascendancy_FRONT
```

3. Installez les dépendances :
```bash
npm install
```

4. Lancez le projet :
```bash
npm start
```

## Structure du projet

```
Daemonic_Ascendancy_FRONT/
├── assets/                 # Logos, icônes, splash screens, etc.
├── src/
│   ├── api/               # JSON simulant des endpoints API : rooms, users, games, leagues
│   ├── components/        # Composants réutilisables classés par feature (Room, Game, User...)
│   ├── navigation/        # Fichiers de navigation de l'application
│   ├── screens/           # Écrans fonctionnels regroupés par thématique
│   │   ├── Game/
│   │   ├── league/
│   │   ├── profile/
│   │   ├── room/
│   │   └── ...
├── App.js                 # Point d’entrée de l’application
├── tailwind.config.js     # Configuration Tailwind CSS
├── app.json / .env        # Fichiers de configuration divers
├── package.json           # Dépendances du projet
└── README.md
```

## Composants notables

- `RoomList`, `RoomItem` : affichent la liste des salles et les détails de chaque réservation.
- `UserList`, `UserItem` : composants de gestion de profil et des utilisateurs.
- `LeagueList`, `LeagueItem` : visualisation des ligues et classement des joueurs.
- `GameVue`, `GameList` : affichage des parties jouées ou à venir.
- `MenuRight`, `MenuBurger`, `NavBar` : éléments de navigation latérale ou supérieure.

## API (Mockée en JSON)

Dans `src/api/`, plusieurs fichiers JSON simulent les données retournées par une API :

- `rooms.json` : liste des salles disponibles.
- `users.json` : joueurs avec leurs données personnelles.
- `leagues.json` : informations de ligue et classements.
- `games.json` : historique ou parties planifiées.

## Fonctionnalités

- Réservation de salle (Room)
- Liste de joueurs et profils (User)
- Gestion des ligues et parties (League & Game)
- Navigation animée
- Design responsive via Tailwind CSS
- Menu latéral personnalisable
- Données mockées modifiables facilement

## Configuration Tailwind CSS

```js
// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
