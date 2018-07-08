import * as React from 'react'
import { shallow } from 'enzyme'
import Counter from './counter'

describe('<Counter />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper).toMatchSnapshot()
  })
})