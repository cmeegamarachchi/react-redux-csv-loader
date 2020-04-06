import {combineReducers} from "redux";
import {recordReducer} from './reducers'

const rootReducer  = combineReducers({
    records: recordReducer
});

export default rootReducer;