"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("@apollo/client");
var Queries_1 = require("../GraphQL/Queries");
function GetUsers() {
    var _a = client_1.useQuery(Queries_1.LOAD_USERS), error = _a.error, loading = _a.loading, data = _a.data;
    react_1.useEffect(function () {
        console.log(data);
    }, data);
    return (<div>
        <span>
            This is get users component!!
        </span>
    </div>);
}
exports["default"] = GetUsers;
