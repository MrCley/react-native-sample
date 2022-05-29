import React from 'react';
import {Image, Text, View} from 'react-native';
import {EpisodeList} from '../../../list/episode/EpisodeList/EpisodeList';
import {CardTextView} from '../../CardTextView/CardTextView';
import {BlurContainer} from '../../BlurContainer/BlurContainer';
import {DescriptionView} from '../../DescriptionView/DescriptionView';
import {Props} from './types';
import {styles} from './styles';
import {AVATAR_URL} from '../../../../constants';
import {StatusLabel} from '../../StatusLabel/StatusLabel';

export const CharacterCard: React.FC<Props> = ({characterDetails}) => {
  return (
    <View style={styles.container}>
      <BlurContainer>
        <Text style={styles.nameText}>{characterDetails?.name}</Text>
      </BlurContainer>

      <BlurContainer top={'44%'}>
        <Text style={styles.typeText}>
          {characterDetails?.species}{' '}
          {characterDetails?.type === '' ? (
            <View />
          ) : (
            <Text>- {characterDetails?.type}</Text>
          )}
        </Text>
      </BlurContainer>

      <View style={styles.idContainer}>
        <Text style={styles.idText}>
          #{characterDetails?.id.padStart(3, '0')}
        </Text>
      </View>
      <View style={styles.statusContainer}>
        <StatusLabel status={characterDetails?.status} />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: AVATAR_URL + characterDetails?.id + '.jpeg',
        }}
      />
      <CardTextView height={'43%'}>
        <View>
          <DescriptionView
            category="First seen location"
            value={characterDetails?.origin?.name}
          />
          <DescriptionView
            category="Dimension"
            value={
              characterDetails?.origin?.name === 'unknown'
                ? ' unknown'
                : ' ' + characterDetails?.origin?.dimension
            }
          />
          <Text style={styles.episodesText}>Episodes:</Text>
          <View style={styles.episodeListContainer}>
            <EpisodeList characterId={characterDetails?.id} />
          </View>
        </View>
      </CardTextView>
    </View>
  );
};
