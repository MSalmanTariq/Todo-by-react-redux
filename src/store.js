import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import TaskReducer from './reducers/taskReducer'

export default createStore(
    combineReducers({
        TaskReducer
    }),
    applyMiddleware(thunk,logger)
)