import { SET_HISTORY, ADD_USER_LIST, REMOVE_USER_LIST, SET_TYPING, SET_USERLIST, SET_USERNAME } from '../actions';

const INIT_STATE = {
  connected: false,
  username: null,
  history: [],
  userlist: [],
  isTyping: []
}

export default function(state = INIT_STATE, action){
  
  switch(action.type){
    
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

    case ADD_USER_LIST:
        const newUserlist = [ ...state.userlist, action.payload ]
        return Object.assign({}, state, { userlist: newUserlist })
    break;

    case REMOVE_USER_LIST:
      const userListClone = state.userlist.slice(0);
      const filteredUserlist = removeElements(userListClone, action.payload)
      return Object.assign({}, state, { userlist: filteredUserlist })
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


function removeElements(arr, str) {
  for (let i=arr.length-1; i>=0; i--) {
    if (arr[i] === str) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
}