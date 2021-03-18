<template>
  <div class="flex">
    <AInput type="text" placeholder="marsstay07" />
    <AButton class="ml-3" text="検索" :click-func="searchFunc" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    searchFunc: {
      type: Function,
      required: true,
    },
  },

  setup() {
    return {}
  },
})
</script>
