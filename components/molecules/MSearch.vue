<template>
  <div class="flex">
    <AInput :text.sync="keywordRef" type="text" placeholder="marsstay07" />
    <AButton class="ml-3" text="検索" :click-func="searchFunc" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    keyword: {
      type: String,
      required: true,
    },

    searchFunc: {
      type: Function,
      required: true,
    },
  },

  setup(props, context) {
    const keywordRef = computed({
      get: () => props.keyword,
      set: (value) => context.emit('update:keyword', value),
    })

    return { keywordRef }
  },
})
</script>
