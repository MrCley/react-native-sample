import {Character} from '../../../context/types';

export const useCharacterSearchFilter = (
  listItems: Character[],
  search: string,
): Character[] =>
  search === ''
    ? listItems
    : listItems.filter((item: Character) =>
        item.name?.toLowerCase().includes(search.toLowerCase()),
      );
