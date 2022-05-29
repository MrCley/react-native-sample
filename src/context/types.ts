export type CharacterOrigin = {
  name: string;
  type: string;
  dimension: string;
};

export type Character = {
  name: string;
  id: string;
  type?: string;
  status?: string;
  species?: string;
  episodes?: Episode[];
  origin?: CharacterOrigin;
};

export interface Episode { 
  id: string;
  name: string;
  episode: string;
  air_date: string;
  characters: Character[] | null;
}
 
