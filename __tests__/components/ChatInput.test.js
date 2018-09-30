import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ChatInput from '../../src/components/ChatInput';

describe('<ChatInput />', () => {
  describe('render()', () => {

    test('render component', () => {
      const wrapper = shallow(<ChatInput />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });
});