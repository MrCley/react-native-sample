import React, {useContext, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import Context from '../../../../context/Context';
import {Episode} from '../../../../context/types';
import { useEpisodeSearchFilter } from '../../useEpisodeSearchFilter/useEpisodeSearchFilter';
import {useIdFilter} from '../../useIdFilter/useIdFilter'; 
import {EpisodeListItem} from '../EpisodeListItem/EpisodeListItem';
import {styles} from './styles';
import {Props} from './types';

export const EpisodeList: React.FC<Props> = ({
  search = '',
  characterId = undefined,
}) => {
  const context = useContext(Context);

  const filteredEpisodes = useMemo(() => {
    let filteredEpisodes = useEpisodeSearchFilter(context.episodes, search);
    filteredEpisodes = useIdFilter(filteredEpisodes as Episode[], characterId);
    return filteredEpisodes;
  }, [search]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={filteredEpisodes}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <EpisodeListItem index={index} episodes={filteredEpisodes} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
