import {Character} from '../../../context/types';
import {useCharacterSearchFilter} from './useCharacterSearchFilter';

test('Empty search', () => {
  expect(useCharacterSearchFilter(characters, '')).toStrictEqual(characters);
});

test('Exact search', () => {
  expect(
    useCharacterSearchFilter(characters, '26 Years Old Morty'),
  ).toStrictEqual([characters[0]]);
});

test('Partial search - one result', () => {
  expect(useCharacterSearchFilter(characters, '26 Yea')).toStrictEqual([
    characters[0],
  ]);
});

test('Partial search - multiple results', () => {
  expect(useCharacterSearchFilter(characters, 'Years')).toStrictEqual([
    characters[0],
    characters[1],
    characters[2],
  ]);
});

test('Wrong search', () => {
  expect(useCharacterSearchFilter(characters, 'Malenia')).toStrictEqual([]);
});

/*
    Test data
*/

const characters: Character[] = [
  {id: '802', name: '26 Years Old Morty'},
  {id: '803', name: '40 Years Old Morty'},
  {id: '801', name: '7+7 Years Old Morty'},
  {id: '583', name: "80's snake"},
  {id: '6', name: 'Abadango Cluster Princess'},
  {id: '7', name: 'Abradolf Lincler'},
  {id: '597', name: 'Abradolf Lincler'},
  {id: '398', name: 'Accountant dog'},
  {id: '680', name: 'Adam'},
  {id: '681', name: "Adam's Mother"},
  {id: '8', name: 'Adjudicator Rick'},
  {id: '9', name: 'Agency Director'},
  {id: '722', name: 'Air Tina-Teer'},
  {id: '10', name: 'Alan Rails'},
  {id: '11', name: 'Albert Einstein'},
  {id: '12', name: 'Alexander'},
  {id: '792', name: 'Alien Crow'},
  {id: '793', name: 'Alien Crow'},
  {id: '13', name: 'Alien Googah'},
  {id: '411', name: 'Alien Mexican Armada'},
  {id: '14', name: 'Alien Morty'},
  {id: '15', name: 'Alien Rick'},
  {id: '470', name: 'Alien Spa Employee'},
  {id: '743', name: 'Alyson Hannigan'},
  {id: '734', name: 'Amazing Johnathan'},
  {id: '16', name: 'Amish Cyborg'},
  {id: '247', name: 'Amy Poopybutthole'},
  {id: '447', name: 'Anchor Gear'},
  {id: '510', name: 'Anchorman'},
  {id: '511', name: 'Anchorwoman'},
  {id: '581', name: 'Anchosnake'},
  {id: '582', name: 'Anchosnake'},
  {id: '804', name: 'Andy'},
  {id: '546', name: 'Angie Flint'},
  {id: '640', name: 'Angry Glorzo'},
  {id: '17', name: 'Annie'},
  {id: '18', name: 'Antenna Morty'},
  {id: '19', name: 'Antenna Rick'},
  {id: '20', name: 'Ants in my Eyes Johnson'},
  {id: '21', name: 'Aqua Morty'},
  {id: '22', name: 'Aqua Rick'},
  {id: '454', name: 'Arbolian Mentirososian'},
  {id: '23', name: 'Arcade Alien'},
  {id: '24', name: 'Armagheadon'},
  {id: '25', name: 'Armothy'},
  {id: '26', name: 'Arthricia'},
  {id: '27', name: 'Artist Morty'},
  {id: '28', name: 'Attila Starwar'},
  {id: '29', name: 'Baby Legs'},
  {id: '417', name: 'Baby Legs Chief'},
  {id: '805', name: 'Baby Mouse Skin Morty'},
  {id: '30', name: 'Baby Poopybutthole'},
  {id: '472', name: 'Baby Rick'},
  {id: '31', name: 'Baby Wizard'},
  {id: '814', name: 'Bald Rick'},
  {id: '562', name: 'Balthromaw'},
  {id: '584', name: 'Bar Customer'},
  {id: '585', name: 'Bartender'},
  {id: '473', name: 'Bartender Morty'},
  {id: '441', name: 'Bearded Jerry'},
  {id: '32', name: 'Bearded Lady'},
  {id: '392', name: 'Bearded Morty'},
  {id: '33', name: 'Beebo'},
  {id: '34', name: 'Benjamin'},
  {id: '35', name: 'Bepisian'},
  {id: '36', name: 'Beta-Seven'},
  {id: '37', name: 'Beth Sanchez'},
  {id: '807', name: 'Beth Sanchez'},
  {id: '4', name: 'Beth Smith'},
  {id: '38', name: 'Beth Smith'},
  {id: '39', name: 'Beth Smith'},
  {id: '628', name: 'Beth Smith'},
  {id: '40', name: "Beth's Mytholog"},
  {id: '598', name: 'Biblesaurus'},
  {id: '41', name: 'Big Boobed Waitress'},
  {id: '769', name: 'Big Fat rick'},
  {id: '42', name: 'Big Head Morty'},
  {id: '43', name: 'Big Morty'},
  {id: '45', name: 'Bill'},
  {id: '46', name: 'Bill'},
  {id: '47', name: 'Birdperson'},
];
