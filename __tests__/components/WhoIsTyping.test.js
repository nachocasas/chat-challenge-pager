import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { WhoIsTyping } from '../../src/components/WhoIsTyping';

describe('<WhoIsTyping />', () => {
  describe('render()', () => {

    test('render component', () => {
      const wrapper = shallow(<WhoIsTyping />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });
});