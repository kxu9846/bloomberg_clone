import React from 'react';
import {gql, useQuery} from "@apollo/client"
// import gql from "graphql-tag"
// import {Query} from "react-apollo"

const FETCH_USERS = gql`
  {
    users {
      username
    }
  }
`
// interface user {
//   loading: boolean
// }

// interface Error {
//   error: (data: user) => React.ReactNode
// }

function App():any {
  const {loading, error, data} = useQuery(FETCH_USERS)
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  return (
    <>
      {data}
    </>
  )
}

export default App;
