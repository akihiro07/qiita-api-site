<template>
  <input
    class="px-4 py-2 rounded border border-gray-400 outline-none"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text',
    },

    placeholder: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {}
  },
})
</script>
