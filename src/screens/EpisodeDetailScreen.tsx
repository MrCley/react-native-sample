import React from 'react';
import {ImageBackground} from 'react-native';
import {NavigationHeader} from '../components/detail/NavigationHeader/NavigationHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/types';
import {styles} from './styles';
import {EpisodeDetailCard} from '../components/detail/episode/EpisodeDetailCard/EpisodeDetailCard';

type Props = NativeStackScreenProps<RootStackParamList, 'EpisodeDetailScreen'>;

export const EpisodeDetailScreen: React.FC<Props> = ({route}) => {
  return (
    <ImageBackground
      style={styles.detailContainer}
      blurRadius={10}
      resizeMode={'cover'}
      source={require('../assets/images/rickmortybackground.jpg')}>
      <NavigationHeader />
      <EpisodeDetailCard episodeDetails={route.params.episodeDetails} />
    </ImageBackground>
  );
};
