export interface Response {
    data: Data;
    loading: boolean;
    networkStatus: number;
  }
  export interface Data {
    episodes: Episodes;
  }
  export interface Episodes {
    __typename: string;
    info: Info;
    results?: (ResultsEntity)[] | null;
  }
  export interface Info {
    __typename: string;
    count: number;
    next: number;
  }
  export interface ResultsEntity {
    __typename: string;
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters?: (CharactersEntity)[] | null;
  }
  export interface CharactersEntity {
    __typename: string;
    id: string;
  }
  