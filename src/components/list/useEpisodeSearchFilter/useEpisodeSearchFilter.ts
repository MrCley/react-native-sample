import {Episode} from '../../../context/types';

export const useEpisodeSearchFilter = (
  listItems: Episode[],
  search: string,
): Episode[] =>
  search === ''
    ? listItems
    : listItems.filter((item: Episode) =>
        item.name?.toLowerCase().includes(search.toLowerCase()),
      );
