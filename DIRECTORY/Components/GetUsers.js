import React, { useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from '../GraphQL/Queries';
function GetUsers() {
    var _a = useQuery(LOAD_USERS), error = _a.error, loading = _a.loading, data = _a.data;
    useEffect(function () {
        console.log(data);
    }, data);
    return (React.createElement("div", null,
        React.createElement("span", null, "This is get users component!!")));
}
export default GetUsers;
