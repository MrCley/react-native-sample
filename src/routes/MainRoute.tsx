import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListScreen} from './TabBarRoute';
import {CharacterDetailScreen} from '../screens/CharacterDetailScreen';
import {EpisodeDetailScreen} from '../screens/EpisodeDetailScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainRoute: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CharacterDetailScreen"
          component={CharacterDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EpisodeDetailScreen"
          component={EpisodeDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
