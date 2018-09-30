import configureStore from 'redux-mock-store';

import * as chatActions from '../../src/actions/';

const mockStore = configureStore();
const store = mockStore();


describe('chat_actions', () => {
  beforeEach(() => { 
    store.clearActions();
  });


  test('Set the current username', () => {
    const expectedActions = [
      {
        'payload': 'Mike',
        'type': 'SET_USERNAME',
      },
    ];

    store.dispatch(chatActions.setUsername('Mike'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Set the initial history', () => {
    const expectedActions = [
      {
        'payload': [{ username: 'Mike', data: "message"}],
        'type': 'SET_HISTORY',
      },
    ];

    store.dispatch(chatActions.setHistory([{ username: 'Mike', data: "message"}]));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Set a new message', () => {
    const expectedActions = [
      {
        'payload': [{ username: 'Mike', data: "message"}],
        'type': 'SET_HISTORY',
      },
    ];

    store.dispatch(chatActions.setMessage({ username: 'Mike', data: "message"}));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Set isTyping status', () => {
    const expectedActions = [
      {
        'payload': { 'Mike' : true },
        'type': 'SET_TYPING',
      },
    ];

    store.dispatch(chatActions.setIsTyping({ 'Mike' : true }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Set isTyping status', () => {
    const expectedActions = [
      {
        'payload': ['Mike', 'Myers'],
        'type': 'SET_USERLIST',
      },
    ];

    store.dispatch(chatActions.setUserlist(['Mike', 'Myers']));
    expect(store.getActions()).toEqual(expectedActions);
  });

});