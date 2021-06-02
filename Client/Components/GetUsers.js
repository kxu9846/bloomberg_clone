import React, { useEffect } from 'react'
import { userQuery, gql } from "@apollo/client"
import { LOAD_USERS } from '../GraphQL/Queries'

function GetUsers() {
    const { error, loading, data } = userQuery(LOAD_USERS)

    useEffect(() => {
        console.log(data)
    }, data)

    return(<div></div>)
}

export default GetUsers