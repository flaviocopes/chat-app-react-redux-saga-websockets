import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import AddMessage from './AddMessage'

const setup = () => {
  const props = {
    users: [],
    addUser: jest.fn()
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<AddMessage {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('AddMessage', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('section#new-message').length).toBe(1)
  })
})
