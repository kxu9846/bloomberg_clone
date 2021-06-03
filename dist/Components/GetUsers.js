"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const client_1 = require("@apollo/client");
const Queries_1 = require("../GraphQl/Queries");
function GetUsers() {
    const { data } = client_1.useQuery(Queries_1.LOAD_USERS);
    react_1.useEffect(() => {
        console.log(data);
    }, data);
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("span", { children: "This is get users component!!" }, void 0) }, void 0));
}
exports.default = GetUsers;
//# sourceMappingURL=GetUsers.js.map