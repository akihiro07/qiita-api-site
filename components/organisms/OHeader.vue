<template>
  <header
    class="px-24 py-3 flex justify-between items-center"
    :class="$style.background"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-white">QiitaAPI</h1>
      <MSearch
        class="ml-10"
        :keyword.sync="keyword"
        :search-func="searchFunc"
      />
    </div>

    <div>
      <AButton text="ログイン" el="nuxtLink" :click-func="toLoginFunc" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()

    const keyword = ref('')
    const searchFunc = () => {
      const query = `?userid=${keyword.value}`
      router.push(`/search-result/${query}`)
    }

    const toLoginFunc = () => {
      router.push('/login/')
    }

    return {
      keyword,
      searchFunc,
      toLoginFunc,
    }
  },
})
</script>

<style lang="scss" module>
.background {
  background-color: $secondary;
}
</style>
