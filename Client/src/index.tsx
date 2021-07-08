import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css'
import { ApolloClient, createHttpLink, ApolloProvider, ApolloLink } from '@apollo/client'
import { onError } from "@apollo/client/link/error"
import { BrowserRouter } from 'react-router-dom'
import {cache} from './cache'

// httpLink used for subscriptions, authentication, web sockets -> personal link
const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql"
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache
})

function Root() {
    return (
        <ApolloProvider client = {client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </ApolloProvider>
    )
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
