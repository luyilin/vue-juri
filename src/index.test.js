import { mount } from 'vue-test-utils'
import Juri from './'

test('it works', () => {
  const wrapper = mount(Juri)
  expect(wrapper.isVueInstance()).toBe(true)
})
