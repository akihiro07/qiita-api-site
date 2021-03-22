<template>
  <div class="py-4 px-5 bg-white markdown-body">
    <div v-html="$md.render(body)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import Prism from '@/plugins/prism'

export default defineComponent({
  props: {
    renderedBody: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },

  setup() {
    onMounted(() => {
      Prism.highlightAll()
    })
    return {}
  },
})
</script>
