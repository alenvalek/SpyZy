import {combineReducers} from 'redux'
import websReducer from './websReducer'

export default combineReducers({
    webs: websReducer
})
