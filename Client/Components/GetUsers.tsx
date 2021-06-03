import { useEffect } from 'react'
import { useQuery} from "@apollo/client"
import { LOAD_USERS } from '../GraphQl/Queries'

function GetUsers() {
    const { data } = useQuery(LOAD_USERS)

    useEffect(() => {
        console.log(data)
    }, data)

    return (<div>
        <span>
            This is get users component!!
        </span>
    </div>)
}

export default GetUsers