import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Component from '@/components/atoms/AButton.vue'

describe('AButton.vue', () => {
  // describe('textの型がstringか', () => {
  //   test('result', () => {
  //     const text = 12
  //     const wrapper = shallowMount(Component, {
  //       propsData: { text },
  //     })
  //     expect(wrapper.text()).toMatch(text)
  //   })
  // })

  // test('propsのtoが空のときは<button>を表示', () => {

  // })

  test('propsのtoが空ときは<button>が表示', () => {
    const text = 'テキスト'
    const to = ''
    const wrapper = shallowMount(Component, {
      propsData: { text, to },
      stubs: { NuxtLink: RouterLinkStub },
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })

  test('propsのtoが存在するときは<a>が表示', () => {
    const text = 'テキスト'
    const to = '/link/'
    const wrapper = shallowMount(Component, {
      propsData: { text, to },
      stubs: { NuxtLink: RouterLinkStub },
    })

    expect(wrapper.find('a').exists()).toBe(true)
  })
})
