import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import week from "./reducers/week_choice"
import city from "./reducers/city"

const reducer = combineReducers({
    week,
    city
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;