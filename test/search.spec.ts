import { shallowMount } from '@vue/test-utils'
import Component from '@/components/molecules/MSearch.vue'
import ChildButton from '@/components/atoms/AButton.vue'
import ChildInput from '@/components/atoms/AInput.vue'

const keyword = 'ユーザーID検索'
const searchFunc = () => {}
const factory = () => {
  return shallowMount(Component, {
    propsData: {
      keyword,
      searchFunc,
    },
  })
}

describe('MSearch.vue', () => {
  test('入力したら親コンポーネントへイベント通知', () => {
    const wrapper = factory()
    // 子コンポーネントからイベントを通知させる
    wrapper.findComponent(ChildInput).vm.$emit('update:text', keyword)

    expect(wrapper.emitted()['update:keyword']![0][0]).toBe(keyword)
  })
})
