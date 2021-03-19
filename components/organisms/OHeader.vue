<template>
  <header class="px-24 py-3 flex justify-between" :class="$style.background">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-white">QiitaAPI</h1>
      <MSearch
        class="ml-10"
        :keyword.sync="keyword"
        :search-func="searchFunc"
      />
    </div>

    <div>
      <AButton text="ログイン" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const keyword = ref('')

    const searchFunc = () => {
      console.log('search')
    }

    return {
      keyword,
      searchFunc,
    }
  },
})
</script>

<style lang="scss" module>
.background {
  background-color: $secondary;
}
</style>
