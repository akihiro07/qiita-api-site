import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Component from '@/components/atoms/AButton.vue'

const text = 'テキスト'
const factory = (to) => {
  return shallowMount(Component, {
    propsData: {
      text,
      to,
    },
    stubs: { NuxtLink: RouterLinkStub },
  })
}

describe('AButton.vue', () => {
  test('propsのtoが空ときは<button>が表示', () => {
    const wrapper = factory('')

    expect(wrapper.find('button').exists()).toBe(true)
  })

  test('propsのtoが存在するときは<a>が表示', () => {
    const wrapper = factory('/link/')

    expect(wrapper.find('a').exists()).toBe(true)
  })
})
