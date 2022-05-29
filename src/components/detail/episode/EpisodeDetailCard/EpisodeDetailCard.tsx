import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {BlurContainer} from '../../BlurContainer/BlurContainer';
import {CardTextView} from '../../CardTextView/CardTextView';
import {CharacterListItemSmall} from '../../../list/CharacterListItemSmall/CharacterListItemSmall';
import {DescriptionView} from '../../DescriptionView/DescriptionView';
import {styles} from './styles';
import {Props} from './types';

export const EpisodeDetailCard: React.FC<Props> = ({episodeDetails}) => {
  return (
    <View style={styles.container}>
      <BlurContainer top={'3%'}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Season {episodeDetails.episode.substring(2, 3)}
          </Text>
          <Text style={styles.headerText}>
            Episode {episodeDetails.episode.substring(4, 6).replace(/^0+/, '')}
          </Text>
        </View>
      </BlurContainer>

      <View style={styles.descriptionContainer}>
        <CardTextView height={'85%'}>
          <View>
            <DescriptionView
              category="Episode name"
              value={episodeDetails.name}
            />
            <DescriptionView
              category="Air date"
              value={episodeDetails.air_date}
            />
            <Text style={styles.charactersText}>Characters:</Text>
            <View style={styles.charactersContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                data={episodeDetails.characters}
                renderItem={item => (
                  <CharacterListItemSmall character={item.item} />
                )}
              />
            </View>
          </View>
        </CardTextView>
      </View>
    </View>
  );
};
