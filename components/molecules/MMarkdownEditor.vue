<template>
  <client-only>
    <vue-simplemde
      v-model="text"
      :configs="configs"
      class="markdown-body bg-white"
    />
  </client-only>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    mdText: {
      type: String,
      default: '',
    },
  },

  setup(props, context) {
    const configs = ref({
      toolbar: [
        'bold',
        'italic',
        'quote',
        'strikethrough',
        '|',
        'heading',
        'heading-1',
        'heading-2',
        'heading-3',
        '|',
        'code',
        'link',
        'image',
      ],
    })

    const text = computed({
      get: () => props.mdText,
      set: (value) => context.emit('update:mdText', value),
    })

    return { text, configs }
  },
})
</script>
