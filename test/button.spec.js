import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Component from '@/components/atoms/AButton.vue'

const text = 'テキスト'
const mockFunc = jest.fn()
const factory = (to) => {
  return shallowMount(Component, {
    propsData: {
      text,
      to,
      clickFunc: mockFunc,
    },
    stubs: { NuxtLink: RouterLinkStub },
  })
}

describe('AButton.vue', () => {
  describe('propsのtoが空とき', () => {
    const wrapper = factory('')

    test('<button>が表示', () => {
      expect(wrapper.find('button').exists()).toBe(true)
    })

    test('clickイベントが発火したらclickFuncが呼ばれる', () => {
      // clickイベントが発火した様にふるまう=>clickFuncメソッドが呼ばれる
      wrapper.find('button').trigger('click')
      expect(mockFunc).toHaveBeenCalled()
    })
  })

  describe('propsのtoが存在するとき', () => {
    const wrapper = factory('/link/')

    test('<a>が表示', () => {
      expect(wrapper.find('a').exists()).toBe(true)
    })
  })
})
