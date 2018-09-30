import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UsernamePropmtModal from '../../src/components/UsernamePropmtModal';

describe('<UsernamePropmtModal />', () => {
  describe('render()', () => {

    test('render component', () => {
      const wrapper = shallow(<UsernamePropmtModal />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });
});