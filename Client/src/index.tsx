import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from "apollo-client"
import {InMemoryCache} from "apollo-cache-inmemory"
import {createHttpLink} from "apollo-link-http"
import {ApolloProvider} from "react-apollo"
import {onError} from "apollo-link-error"
import {ApolloLink} from "apollo-link"

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
})

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql"
})

const errorLink = onError(({ graphQLErrors}) => {
  if (graphQLErrors) graphQLErrors.map(({message}) => console.log(message))
})

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache,
})

function Root() {
  debugger
  return (
    <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
