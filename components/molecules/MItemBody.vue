<template>
  <div class="py-4 px-5 bg-white"><div v-html="$md.render(body)" /></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import Prism from '@/plugins/prism'

export default defineComponent({
  props: {
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
