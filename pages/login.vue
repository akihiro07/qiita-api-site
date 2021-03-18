<template>
  <div class="grid place-items-center">
    <div class="flex flex-col w-64">
      <AInput placeholder="アクセストークンを入力" />
      <AButton class="mt-4" text="ログイン" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
