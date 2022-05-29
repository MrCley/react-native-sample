import {Episode} from '../../../context/types';
import {useIdFilter} from './useIdFilter';

test('All episodes', () => {
  expect(useIdFilter(episodes, '1')).toStrictEqual(episodes);
});

test('3 episodes', () => {
  expect(useIdFilter(episodes, '249')).toStrictEqual([
    episodes[0],
    episodes[1],
    episodes[2],
  ]);
});

test('No episodes', () => {
  expect(useIdFilter(episodes, '-1')).toStrictEqual([]);
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
      {name: 'dummy', id: '1'},
      {name: 'dummy', id: '2'},
      {name: 'dummy', id: '35'},
      {name: 'dummy', id: '38'},
      {name: 'dummy', id: '62'},
      {name: 'dummy', id: '92'},
      {name: 'dummy', id: '127'},
      {name: 'dummy', id: '144'},
      {name: 'dummy', id: '158'},
      {name: 'dummy', id: '175'},
      {name: 'dummy', id: '179'},
      {name: 'dummy', id: '181'},
      {name: 'dummy', id: '239'},
      {name: 'dummy', id: '249'},
      {name: 'dummy', id: '271'},
      {name: 'dummy', id: '338'},
      {name: 'dummy', id: '394'},
      {name: 'dummy', id: '395'},
      {name: 'dummy', id: '435'},
    ],
  },
  {
    id: '2',
    name: 'Lawnmower Dog',
    air_date: 'December 9, 2013',
    episode: 'S01E02',
    characters: [
      {name: 'dummy', id: '1'},
      {name: 'dummy', id: '2'},
      {name: 'dummy', id: '38'},
      {name: 'dummy', id: '46'},
      {name: 'dummy', id: '63'},
      {name: 'dummy', id: '80'},
      {name: 'dummy', id: '175'},
      {name: 'dummy', id: '221'},
      {name: 'dummy', id: '239'},
      {name: 'dummy', id: '246'},
      {name: 'dummy', id: '249'},
      {name: 'dummy', id: '304'},
      {name: 'dummy', id: '305'},
      {name: 'dummy', id: '306'},
      {name: 'dummy', id: '329'},
      {name: 'dummy', id: '338'},
      {name: 'dummy', id: '396'},
      {name: 'dummy', id: '397'},
      {name: 'dummy', id: '398'},
      {name: 'dummy', id: '405'},
    ],
  },
  {
    id: '3',
    name: 'Anatomy Park',
    air_date: 'December 16, 2013',
    episode: 'S01E03',
    characters: [
      {name: 'dummy', id: '1'},
      {name: 'dummy', id: '2'},
      {name: 'dummy', id: '12'},
      {name: 'dummy', id: '17'},
      {name: 'dummy', id: '38'},
      {name: 'dummy', id: '45'},
      {name: 'dummy', id: '96'},
      {name: 'dummy', id: '97'},
      {name: 'dummy', id: '98'},
      {name: 'dummy', id: '99'},
      {name: 'dummy', id: '100'},
      {name: 'dummy', id: '101'},
      {name: 'dummy', id: '108'},
      {name: 'dummy', id: '112'},
      {name: 'dummy', id: '114'},
      {name: 'dummy', id: '169'},
      {name: 'dummy', id: '175'},
      {name: 'dummy', id: '186'},
      {name: 'dummy', id: '201'},
      {name: 'dummy', id: '249'},
      {name: 'dummy', id: '268'},
      {name: 'dummy', id: '300'},
      {name: 'dummy', id: '302'},
      {name: 'dummy', id: '338'},
      {name: 'dummy', id: '356'},
    ],
  },
  {
    id: '4',
    name: 'M. Night Shaym-Aliens!',
    air_date: 'January 13, 2014',
    episode: 'S01E04',
    characters: [
      {name: 'dummy', id: '1'},
      {name: 'dummy', id: '2'},
      {name: 'dummy', id: '38'},
      {name: 'dummy', id: '87'},
      {name: 'dummy', id: '175'},
      {name: 'dummy', id: '179'},
      {name: 'dummy', id: '181'},
      {name: 'dummy', id: '191'},
      {name: 'dummy', id: '239'},
      {name: 'dummy', id: '241'},
      {name: 'dummy', id: '270'},
      {name: 'dummy', id: '337'},
      {name: 'dummy', id: '338'},
    ],
  },
  {
    id: '5',
    name: 'Meeseeks and Destroy',
    air_date: 'January 20, 2014',
    episode: 'S01E05',
    characters: [
      {name: 'dummy', id: '1'},
      {name: 'dummy', id: '2'},
      {name: 'dummy', id: '38'},
      {name: 'dummy', id: '41'},
      {name: 'dummy', id: '89'},
      {name: 'dummy', id: '116'},
      {name: 'dummy', id: '117'},
      {name: 'dummy', id: '120'},
      {name: 'dummy', id: '175'},
      {name: 'dummy', id: '193'},
      {name: 'dummy', id: '238'},
      {name: 'dummy', id: '242'},
      {name: 'dummy', id: '271'},
      {name: 'dummy', id: '303'},
      {name: 'dummy', id: '326'},
      {name: 'dummy', id: '333'},
      {name: 'dummy', id: '338'},
      {name: 'dummy', id: '343'},
      {name: 'dummy', id: '399'},
      {name: 'dummy', id: '400'},
    ],
  },
];
