<template>
  <div class="flex flex-col py-4 px-5 bg-white">
    <div class="flex items-center text-xs">
      <img
        class="w-8 h-8 rounded-full object-cover shadow"
        :src="picture"
        alt="avatar"
      />
      <p class="text-gray-700 ml-3">投稿者：{{ name }}</p>
      <p class="text-gray-700 ml-3">投稿日：{{ data }}</p>
    </div>

    <div class="mt-3 text-xl font-bold leading-6">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    picture: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    name: {
      type: String,
      default: 'テスト',
    },
    data: {
      type: String,
      default: 'テスト月テスト日',
    },
    title: {
      type: String,
      default:
        '画像生成も畳み込まない！TransformerによるGAN「TransGAN」誕生&解説！',
    },
  },

  setup() {
    return {}
  },
})
</script>
