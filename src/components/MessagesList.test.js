import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MessagesList from './MessagesList'

const setup = () => {
  const props = {
    messages: []
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<MessagesList {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('MessagesList', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('section#messages-list').length).toBe(1)
  })
})
