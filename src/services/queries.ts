import {gql} from '@apollo/client';

export function getEpisodeByIdQuery(id: string) {
  return {
    query: gql`
        query {
          episodesByIds(ids: ${id}) {
            id
            name
            air_date
            episode
            characters {
              id
              name
            }
          }
        }
      `,
  };
}

export function getCharacterByIdQuery(id: string) {
  return {
    query: gql`
        query {
          charactersByIds(ids: ${id}) {
            id
            name
            status
            species
            type
            origin {
              name
              type
              dimension
            }
            episode {
              id
              name
            }
          }
        }
      `,
  };
}

export function episodesQuery(page: string) {
  return {
    query: gql`
        query {
          episodes(page: ${page}) {
            info {
              count
              next
            }
            results {
              id
              name
              air_date
              episode
              characters {
                id
              }
            }
          }
        }
      `,
  };
}
