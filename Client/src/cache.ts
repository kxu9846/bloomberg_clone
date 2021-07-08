import {InMemoryCache} from '@apollo/client'

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                // sortedUsers: (existing, {readField}) => {
                //     const haveUser = hasUser()
                //     const users = readField("users") || []

                //     return users.sort()

                // },
                // user: {
                //     read: (existing, {toReference, args}) => {
                //         const userRef = toReference({
                //             __typename: "User", 
                //         })
                //         // nullish coalescing operator
                //         return existing ?? userRef
                //     }
                // }

                // when a function like onClick calls fetchMore our launches field policy will merge
                // old results and the new paginated results into 1 single id to be used
                // launches: {
                //     // keyArgs: false, tells caches to store under 1 single cache keyId
                //     keyArgs: false,
                //     merge(existing = {launches: []}, incoming) {
                //         const {launches: newLaunches} = incoming
                //         const {launches: oldLaunches} = existing
                //         return {
                //             ...incoming, 
                //             launches: [...oldLaunches, ...newLaunches]
                //         }
                //     }
                // }
            }
        },
        // Product: {
            // keyFields: ["upc"]
        // },
        // Country: {
        //     // keyFields: ['code', 'id'],
        //     fields: {
        //         userWithEmail: {

        //             // read allows you to intercept data and change it from the cache
        //             // nuiance: existing, cached data, might be undefined
        //             read: (existing, {readField}) => {
        //                 const username = readField('username')
        //                 const email = readField('email')

        //                 return `${username} ${email}`
        //             }
        //         }
        //     }
        // }
    }
})


export const userAuthModalIsOpened = cache.makeVar<boolean>(false)
// any query that depends on this react var, will update 
export const hasUser = cache.makeVar<boolean>(true)
// sortedUsers() -> getter
// sortedUsers('hank') -> setter
 