import { shallowMount } from '@vue/test-utils'
import Component from '@/components/atoms/AInput.vue'

describe('AInput.vue', () => {
  test('inputイベントが発火したらemitが呼ばれる', () => {
    const wrapper = shallowMount(Component)
    const input = wrapper.find('input[type="text"]')
    const text = '何かしら入力'
    input.setValue(text)
    // ↑エイリアス
    input.element.value = text
    input.trigger('input')
    expect(wrapper.emitted()['update:text'][0][0]).toBe(text)
  })
})
