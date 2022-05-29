import React, {useContext, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import Context from '../../../../context/Context';
import {CharacterListItem} from '../CharacterListItem/CharacterListItem';
import {useCharacterSearchFilter} from '../../useCharacterSearchFilter/useCharacterSearchFilter';
import {styles} from './styles';
import {Props} from './types';

export const CharacterList: React.FC<Props> = ({search}) => {
  let context = useContext(Context);

  const filteredEpisodes = useMemo(() => {
    return useCharacterSearchFilter(context.characters, search);
  }, [search]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <CharacterListItem character={item} />}
        data={filteredEpisodes}
      />
    </View>
  );
};
