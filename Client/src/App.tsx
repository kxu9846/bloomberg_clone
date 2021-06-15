import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_USERS } from './Graphql/Queries'

function App() {
  const {loading, error, data} = useQuery(FETCH_USERS)
  // if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`

  let users = !data ? null : data.users
  return (
    <ul>
      {users ?
        users.map((user: any) => (
        <li key = {user.id}>
            {user.username}
          </li>
        )) :
      <span>no users found</span>}
    </ul>
  )
}

export default App;


