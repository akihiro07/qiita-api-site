<template>
  <div class="py-4 px-5 bg-white"><div v-html="body" /></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    body: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {}
  },
})
</script>
