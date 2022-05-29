import React, {useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native'; 
import {RootStackParamList} from '../../../../routes/types';
import {SeasonDivider} from '../SeasonDivider/SeasonDivider';
import {styles} from './styles';
import {Props} from './types';
import {getEpisodeById} from '../../../../services/rickAndMortyApi';

export const EpisodeListItem: React.FC<Props> = ({episodes, index}) => { 
  const [loading, setLoading] = useState(false);
  let navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
  return (
    <View>
      <SeasonDivider index={index} episode={episodes[index].episode} />
      <TouchableOpacity
        style={styles.touchable}
        onPress={async () => {
          setLoading(true);
          getEpisodeById(episodes[index].id).then(response => {
            setLoading(false);
            navigation.push('EpisodeDetailScreen', {episodeDetails: response});
          });
        }}>
        <View style={styles.blurContainer}>
          <BlurView style={styles.episodeNumberBlur} />
          <Text style={styles.episodeNumber}>
            {episodes[index].episode.substring(4, 6).replace(/^0+/, '')}
          </Text>
        </View>
        <BlurView style={styles.episodeNameBlur} />
        {loading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.episodeNameContainer}>
            <Text numberOfLines={1} style={styles.episodeName}>
              {episodes[index].name}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
