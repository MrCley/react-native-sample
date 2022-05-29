import React from 'react';
import {ImageBackground} from 'react-native';
import {NavigationHeader} from '../components/detail/NavigationHeader/NavigationHeader';
import {CharacterCard} from '../components/detail/character/CharacterDetailCard/CharacterDetailCard';
import {AVATAR_URL} from '../constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/types';
import {styles} from './styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'CharacterDetailScreen'
>;

export const CharacterDetailScreen: React.FC<Props> = ({route}) => {
  return (
    <ImageBackground
      style={styles.detailContainer}
      blurRadius={10}
      source={{
        uri: AVATAR_URL + route.params.characterDetails?.id + '.jpeg',
      }}>
      <NavigationHeader />
      <CharacterCard characterDetails={route.params.characterDetails} />
    </ImageBackground>
  );
};
