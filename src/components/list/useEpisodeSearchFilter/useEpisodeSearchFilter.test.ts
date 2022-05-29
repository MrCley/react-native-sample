import {Episode} from '../../../context/types';
import {useEpisodeSearchFilter} from './useEpisodeSearchFilter';

test('Empty search', () => {
  expect(useEpisodeSearchFilter(episodes, '')).toStrictEqual(episodes);
});

test('Exact search', () => {
  expect(useEpisodeSearchFilter(episodes, 'Pilot')).toStrictEqual([
    episodes[0],
  ]);
});

test('Partial search - one result', () => {
  expect(useEpisodeSearchFilter(episodes, 'Pil')).toStrictEqual([episodes[0]]);
});

test('Partial search - multiple results', () => {
  expect(useEpisodeSearchFilter(episodes, 'dog')).toStrictEqual([
    episodes[1],
    episodes[2],
  ]);
});

test('Wrong search', () => {
  expect(useEpisodeSearchFilter(episodes, 'Malenia')).toStrictEqual([]);
});

/*
    Test data
*/

const episodes: Episode[] = [
  {
    id: '1',
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'S01E01',
    characters: [
      {id: '1', name: 'Rick'},
      {id: '2', name: 'Morty'},
      {id: '3', name: 'Beth'},
    ],
  },
  {
    id: '2',
    name: 'Lawnmower Dog',
    air_date: 'December 9, 2013',
    episode: 'S01E02',
    characters: [
      {id: '1', name: 'Rick'},
      {id: '2', name: 'Morty'},
      {id: '3', name: 'Beth'},
    ],
  },
  {
    id: '3',
    name: 'Anatomy Park Dog',
    air_date: 'December 16, 2013',
    episode: 'S01E03',
    characters: [
      {id: '1', name: 'Rick'},
      {id: '2', name: 'Morty'},
      {id: '3', name: 'Beth'},
    ],
  },
  {
    id: '4',
    name: 'M. Night Shaym-Aliens!',
    air_date: 'January 13, 2014',
    episode: 'S01E04',
    characters: [
      {id: '1', name: 'Rick'},
      {id: '2', name: 'Morty'},
      {id: '3', name: 'Beth'},
    ],
  },
  {
    id: '5',
    name: 'Meeseeks and Destroy',
    air_date: 'January 20, 2014',
    episode: 'S01E05',
    characters: [
      {id: '1', name: 'Rick'},
      {id: '2', name: 'Morty'},
      {id: '3', name: 'Beth'},
    ],
  },
];
