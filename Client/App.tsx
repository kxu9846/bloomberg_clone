// import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
// import { onError } from "@apollo/client/link/error"
// import GetUsers from "./Components/GetUsers"
// import React from "react"
import ReactDOM from "react-dom"
// import fetch from 'cross-fetch'


// const errorLink = onError(({ graphqlErrors, networkError}): any => {
//     if (graphqlErrors) {
//         graphqlErrors.map(({ message, location, path }) => {
//             alert(`Graphql error ${message}`)
//         })
//     }
// })

// const link = from([
//     // errorLink,
//     new HttpLink({uri: "http://localhost:5000/graphql"})
// ])

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: link

// })

// function App() {
//     return <ApolloProvider client={client}>
//         <span>hello?????</span>
//         <GetUsers />
//     </ApolloProvider>
// }



// export default App


const App = () => {
    return (
        <div>
            <span>react connected!!</span>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
      );
})

