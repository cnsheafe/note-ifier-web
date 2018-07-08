import * as React from 'react'
import { shallow } from 'enzyme'
import Counter from './counter'

describe('<Counter />', () => {
  let wrapper = shallow(<Counter />)

  beforeEach(() => {
    wrapper = shallow(<Counter />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('#increment', () => {
    it('should increment counter by 1', () => {
      const instance = wrapper.instance() as Counter
      instance.increment()
      expect(instance.state.counter).toBe(1)
    })
  })

  describe('#decrement', () => {
    it('should decrement counter by 1', () => {
      const instance = wrapper.instance() as Counter
      instance.decrement()
      expect(instance.state.counter).toBe(-1)
    })
  })
})
