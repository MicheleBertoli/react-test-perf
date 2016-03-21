import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../components/button'

test(t => {
  const wrapper = shallow(React.createElement(Button))
  t.same(wrapper.text(), 'Yo')
})
