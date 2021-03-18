<template>
  <input
    class="px-4 py-2 rounded border border-gray-400 outline-none"
    :type="type"
    :placeholder="placeholder"
    :value="text"
    @input="$emit('update:text', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    placeholder: {
      type: String,
      default: '',
    },
  },

  setup() {},
})
</script>
