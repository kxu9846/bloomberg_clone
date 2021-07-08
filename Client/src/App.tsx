import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
// import Navbar from './components/navbar/index'
import Homepage from './Pages/Homepage/Homepage'
import Stockpage from './Pages/Stockpage/Stockpage';
// import { useQuery } from '@apollo/client';
// import { FETCH_USERS } from './Graphql/Queries'

function App() {
  // const {loading, error, data} = useQuery(FETCH_USERS)
  // if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`

  // let users = !data ? null : data.users
  // const history = useHistory()
  return (
    <div>
      <Switch>
        <Route path="/aapl" component={Stockpage} />
        <Route path="/" component={Homepage} />
        <Redirect to = "/" />
      </Switch>
    </div>
  )
}

export default App;


