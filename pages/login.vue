<template>
  <div class="grid place-items-center">
    <div class="flex flex-col w-64">
      <AInput
        :text.sync="token"
        type="text"
        placeholder="アクセストークンを入力"
      />
      <AButton class="mt-4" text="ログイン" :click-func="loginFunc" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const token = ref('')

    const loginFunc = () => {
      console.log(token.value)
    }
    return { token, loginFunc }
  },
})
</script>
