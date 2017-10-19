import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from './Sidebar'

const setup = () => {
  const props = {
    users: [],
    addUser: jest.fn()
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Sidebar {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Sidebar', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('aside').length).toBe(1)
  })
})
