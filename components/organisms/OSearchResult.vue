<template>
  <div>
    <template v-for="n of 3">
      <MPostCard
        :key="n"
        :is-mypage="isMypage"
        :picture="'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'"
        :name="'テスト'"
        :data="'テスト月テスト日'"
        :title="'画像生成も畳み込まない！TransformerによるGAN「TransGAN」誕生&解説！'"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
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
