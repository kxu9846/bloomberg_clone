import { gql } from '@apollo/client';

export const FETCH_USERS = gql`
    {
        users {
        id,
        username
        }
    }
`

export const FETCH_TICKERS = gql`
    {
        tickers {
        name,
        symbol
        }
    }
`

// example with variables inputs from useQuery
const FETCH_COUNTRY = gql`
    query Country($code: ID!) {
        country(code: $code) {
            name
            emoji
            userWithEmail @client 
            # add @client directive to force to be read from cache instead of API
            # userWithEmail will proc once name and emoji is queried from API
        }
    }
`

// const {data, loading, error} = useQuery(FETCH_COUNTRY, {
//  variables: {code: "IT"},
//  skip: 
// })

// data.userWithEmail --> knows to call field from our typePolicy.


// const FETCH_COUNTRY = gql`
//     query Country($code: ID!) {
//         country(code: $code) {
//             name
//             emoji
//             userWithEmail @client 
//             # add @client directive to force to be read from cache instead of API
//         }
//         sortedUsers @client {
//             username
//             firstName
//         }
//     }
// `