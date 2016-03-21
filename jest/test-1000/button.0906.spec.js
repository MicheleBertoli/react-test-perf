jest.unmock('../../components/button')

import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../components/button'

describe('Button', () => {
  it('renders', () => {
    const wrapper = shallow(React.createElement(Button))
    expect(wrapper.text()).toBe('Yo')
  });
});
