import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider, ApolloLink } from '@apollo/client'
import { onError } from "@apollo/client/link/error"
import QuickLinksBar from './QuickLinksBar'
// import {ApolloLink} from "apollo-link"

// const cache = new InMemoryCache({
//   dataIdFromObject: object => object._id || null
// })

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql"
})

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({message}) => console.log(message))
})

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache()
})

function Root() {
  return (
    <ApolloProvider client={client}>
      <QuickLinksBar />
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
