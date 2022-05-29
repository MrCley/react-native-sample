import {BlurView} from '@react-native-community/blur';
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Context from '../../../../context/Context';
import {styles} from './styles';

export const SeasonDivider: React.FC<{index: number; episode: string}> = ({
  index,
  episode,
}) => {
  const context = useContext(Context);
  const season = context.episodes[index].episode.substring(1, 3);
  const previousSeason =
    index === 0 ? null : context.episodes[index - 1].episode.substring(1, 3);

  return index === 0 || season !== previousSeason ? (
    <View style={styles.container}>
      <BlurView style={styles.blur} />
      <Text style={styles.seasonText}>Season {episode.substring(2, 3)}</Text>
    </View>
  ) : (
    <View />
  );
};
