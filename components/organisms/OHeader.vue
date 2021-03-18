<template>
  <div class="px-24 py-3 flex justify-between" :class="$style.background">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-white">QiitaAPI</h1>
      <MSearch class="ml-10" :search-func="searchFunc" />
    </div>

    <div>
      <AButton text="ログイン" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const searchFunc = () => {
      console.log('search')
    }

    return {
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
