import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
// import Navbar from './components/navbar/index'
import QuickLinksBar from './components/quicklinksbar/QuickLinksBar'
import Homepage from './Pages/Homepage/Homepage'
import Stockpage from './Pages/Stockpage/Stockpage';
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
      <Route path="/stock" component={Stockpage} />
        <Route path="/" component={Homepage} />
        <Redirect to = "/" />
      </Switch>
    </div>
  )
}

export default App;


