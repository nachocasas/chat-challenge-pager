import { combineReducers } from 'redux';
import ChatReducer from './chat';

const mainReducer = combineReducers({
  chat: ChatReducer
});

export default mainReducer;