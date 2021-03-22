<template>
  <div>
    <OItemNew :item-data="itemData" :save-func="saveFunc" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

interface PostItemData {
  body: string
  private: boolean
  tags: Array<object>
  title: string
  tweet: boolean
}

export default defineComponent({
  setup() {
    const itemData = reactive<PostItemData>({
      body: '',
      private: false, // 限定共有フラグ
      tags: [{ name: 'test' }],
      title: '',
      tweet: false,
    })
    const saveFunc = () => {
      alert('保存！！')
    }
    return { itemData, saveFunc }
  },
})
</script>
