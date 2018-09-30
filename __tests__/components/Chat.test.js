import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Chat from '../../src/components/Chat';

const mockStore = configureStore();

const INITIAL_STATE = 
{
  chat: {
    connected: true,
    username: 'Mike',
    history: [],
    userlist: ['Mike'],
    isTyping: []
    }
}

const store = mockStore(INITIAL_STATE);

describe('<Chat />', () => {
  describe('render()', () => {

    test('render component', () => {
      const wrapper = shallow(<Chat store={store} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });
});