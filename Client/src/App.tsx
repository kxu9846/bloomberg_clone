import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import QuickLinksBar from './components/quicklinksbar/QuickLinksBar'
// import { useQuery } from '@apollo/client';
// import { FETCH_USERS } from './Graphql/Queries'

function App() {
  // const {loading, error, data} = useQuery(FETCH_USERS)
  // if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`

  // let users = !data ? null : data.users
  return (
    <div>
      <Switch>
        <Route path = "/quicklinksbar"><QuickLinksBar /></Route>
        <Route path="/" component={Navbar} />
        <Redirect to = "/" />
      </Switch>
    </div>
  )
}

export default App;


