<template>
  <input
    v-model="textRef"
    class="px-4 py-2 rounded border border-gray-400 outline-none"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

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

  setup(props, context) {
    const textRef = computed({
      get: () => props.text,
      set: (value) => context.emit('update:text', value),
    })

    return { textRef }
  },
})
</script>
