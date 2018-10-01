export const SET_HISTORY = 'SET_HISTORY';
export const SET_USERLIST = 'SET_USERLIST';
export const ADD_USER_LIST = 'ADD_USER_LIST';
export const REMOVE_USER_LIST = 'REMOVE_USER_LIST';
export const SET_TYPING = 'SET_TYPING';
export const SET_USERNAME = 'SET_USERNAME';

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username
  }
}

export function addUserToList(username) {
  return {
    type: ADD_USER_LIST,
    payload: username
  }
}


export function removeUserFromList(username) {
  return {
    type: REMOVE_USER_LIST,
    payload: username
  }
}

export function setHistory(history) {
  return {
    type: SET_HISTORY,
    payload: history
  }
}

export function setMessage(message) {
  return {
    type: SET_HISTORY,
    payload: [message]
  }
}

export function setIsTyping(typingObj) {
  return {
    type: SET_TYPING,
    payload: typingObj
  }
}

export function setUserlist(users) {
  return {
    type: SET_USERLIST,
    payload: users
  }
}


// Socket Events that dispatches actions
export function setIncommingHistoryEvent(socket) {
  return dispatch => {
    socket.on('history', (res) => {
      dispatch(setHistory(res.messages));
      dispatch(setUserlist(res.onlineUsers));
    });
  };
}

export function setIncommingUserlistEvent(socket) {
  return dispatch => {
    socket.on('users', (res) => {
      dispatch(setUserlist(res));
    });
  };
}


export function setIncommingMessageEvent(socket) {
  return dispatch => {
    socket.on('message', (res) => {
      dispatch(setMessage(res));
    });
  };
}

export function setIncommingIsTypingEvent(socket) {
  return dispatch => {
    socket.on('isTyping', (res) => {
      dispatch(setIsTyping(res));
    });
  };
}

export function handleConnectionStatusEvents(socket) {
  return dispatch => {
    socket.on('userConnected', (res) => {
      dispatch(addUserToList(res));
      dispatch(setMessage({ username: res, data: ' CONNECTED'}));
    });
    socket.on('userDisconnected', (res) => {
      dispatch(removeUserFromList(res));
      dispatch(setMessage({ username: res, data: ' DISCONNECTED'}));
    });
  };
}
