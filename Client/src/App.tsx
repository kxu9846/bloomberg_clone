import React from 'react';
import { useQuery, gql } from '@apollo/client';
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

function App() {
  const {loading, error, data} = useQuery(FETCH_USERS)
  // if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`
  let users 
  if (data) users = data.users
  return (
    <ul>
      {users.map((user:any) => (
        <li>
          {user.username}
        </li>
      ))}
    </ul>
  )
}

export default App;


