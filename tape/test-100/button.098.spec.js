import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../components/button'

test(t => {
  t.plan(1);
  const wrapper = shallow(React.createElement(Button))
  t.equal(wrapper.text(), 'Yo')
})
