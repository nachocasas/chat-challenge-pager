import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import UserList from '../../src/components/UserList';

const mockStore = configureStore();

const INITIAL_STATE = 
{
  chat: {
    connected: true,
    username: 'Mike',
    history: [{username:'Luke', data:"Hi uncle"}, {username:'Obi', data:"Use the force"}],
    userlist: ['Mike'],
    isTyping: []
    }
}

const store = mockStore(INITIAL_STATE);

describe('<UserList />', () => {
  describe('render()', () => {

    test('render component', () => {
      const wrapper = shallow(<UserList store={store} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });
});