import { SET_HISTORY, SET_CONNECTION_STATUS, SET_TYPING, SET_USERLIST, SET_USERNAME } from '../actions';

const INIT_STATE = {
  connected: false,
  username: null,
  history: [],
  userlist: [],
  isTyping: []
}

export default function(state = INIT_STATE, action){
  
  switch(action.type){
    case SET_CONNECTION_STATUS:
      return Object.assign({}, state, { connected: action.payload });
    break;

    case SET_USERNAME:
      return Object.assign({}, state, { username: action.payload });
    break;

    case SET_HISTORY:
      if(action.payload.length > 0){
        const newHistory = [ ...state.history, ...action.payload ]
        return Object.assign({}, state, { history: newHistory })
      }
      return state;
    break;

    case SET_USERLIST:
      return Object.assign({}, state, { userlist: action.payload })
    break;

    case SET_TYPING:
      const whoIsTyping = filterWhoIsTyping(action.payload, state)
      return Object.assign({}, state, { isTyping: whoIsTyping });
    break;

    default:
      return state
  }
}

function filterWhoIsTyping(obj, { username }) {
  let filtered = [];
  Object.keys(obj).forEach(key => {
    (obj[key] && key != username) ? filtered.push(key) : filtered;
  })

  return filtered;
}