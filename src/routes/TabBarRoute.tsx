import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from '../screens/CharacterListScreen';
import {EpisodeListScreen} from '../screens/EpisodeListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants';

const screenOptions = (route: {name: string}) => {
  return {
    tabBarActiveTintColor: COLORS.icon,
    tabBarInactiveTintColor: COLORS.icon,
    tabBarInactiveBackgroundColor: COLORS.tabBarInactiveBackground,
    labelStyle: {
      fontSize: 20,
    },
    tabBarStyle: {
      backgroundColor: COLORS.tabBarBackground,
    },
    tabBarIcon: () => {
      return (
        <Icon
          name={route.name === 'CharacterScreen' ? 'users' : 'tv'}
          size={30}
          color={COLORS.icon}
        />
      );
    },
    headerShown: false,
  };
};

export const ListScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={route => screenOptions(route.route)}>
      <Tab.Screen
        name="CharacterScreen"
        options={{tabBarLabel: 'Characters'}}
        component={CharacterListScreen}
      />
      <Tab.Screen
        name="EpisodeListScreen"
        options={{tabBarLabel: 'Episodes'}}
        component={EpisodeListScreen}
      />
    </Tab.Navigator>
  );
};
