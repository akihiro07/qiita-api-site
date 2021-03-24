import { shallowMount } from '@vue/test-utils'
import Component from '@/components/atoms/AInput.vue'

const text = '何かしら入力'
const type = 'text'
const placeholder = 'プレースホルダー'
const factory = () => {
  return shallowMount(Component, {
    propsData: {
      text,
      type,
      placeholder,
    },
  })
}

describe('AInput.vue', () => {
  test('inputイベントが発火したらemitが呼ばれる', () => {
    const wrapper = factory()
    const inputElement = wrapper.find('input')

    inputElement.setValue(text)
    // ↑エイリアス
    // inputElement.element.value = text
    // inputElement.trigger('input')
    expect(wrapper.emitted()['update:text']![0][0]).toBe(text)
  })

  test('propsのtypeを<input>にbind', () => {
    const wrapper = factory()
    const propsType = wrapper.props().type
    const inputElement = wrapper.find('input')

    expect(inputElement.attributes().type).toBe(propsType)
  })

  test('propsのplaceholderを<input>にbind', () => {
    const wrapper = factory()
    const propsPlaceholder = wrapper.props().placeholder
    const inputElement = wrapper.find('input')

    expect(inputElement.attributes().placeholder).toBe(propsPlaceholder)
  })
})
