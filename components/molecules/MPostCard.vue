<template>
  <div class="flex flex-col py-4 px-5 bg-white">
    <div class="flex justify-between">
      <div class="flex items-center text-xs">
        <img
          class="w-8 h-8 rounded-full object-cover shadow"
          :src="picture"
          alt="avatar"
        />
        <p class="text-gray-700 ml-3">投稿者：{{ name }}</p>
        <p class="text-gray-700 ml-3">投稿日：{{ data }}</p>
      </div>

      <span v-if="isMypage" class="w-5 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </span>
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
    isMypage: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {}
  },
})
</script>
