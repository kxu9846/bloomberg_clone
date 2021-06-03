var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var LOAD_USERS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query {\n        users{\n            username\n        }\n    }\n"], ["\n    query {\n        users{\n            username\n        }\n    }\n"])));
var templateObject_1;
