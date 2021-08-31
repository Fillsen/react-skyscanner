// Redux
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import dataReducer from "./dataReducer";
// Redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

// Saga middleware init
const sagaMiddleware = createSagaMiddleware()

// Main reducer
const rootReducer = combineReducers({
    data: dataReducer
    // test: testReducer
})



// store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)