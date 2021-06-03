"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_USERS = void 0;
const client_1 = require("@apollo/client");
exports.LOAD_USERS = client_1.gql `
    query {
        users{
            username
        }
    }
`;
//# sourceMappingURL=Queries.js.map