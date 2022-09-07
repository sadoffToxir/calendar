"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = __importDefault(require("redux-saga"));
const rootSaga_1 = __importDefault(require("@saga/rootSaga"));
const sagaMiddleware = (0, redux_saga_1.default)();
const rootReducers = (0, redux_1.combineReducers)({});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const store = (0, redux_1.createStore)(rootReducers, composeEnhancers((0, redux_1.applyMiddleware)(sagaMiddleware)));
sagaMiddleware.run(rootSaga_1.default);
exports.default = store;
