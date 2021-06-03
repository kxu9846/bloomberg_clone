"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const App = () => {
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("span", { children: "react connected!!" }, void 0) }, void 0));
};
document.addEventListener('DOMContentLoaded', () => {
    react_dom_1.default.render(jsx_runtime_1.jsx(App, {}, void 0), document.getElementById('app'));
});
//# sourceMappingURL=App.js.map