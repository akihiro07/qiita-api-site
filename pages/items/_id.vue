<template>
  <div>
    <OItemDetail :qiita-item="qiitaItem" />
  </div>
</template>

<script lang="ts">
import { Item } from '@/types/qiita-types'

// MEMO: optionsAPI使用 => 動的ページへの画面遷移時、compositionAPIは挙動が怪しい為（https://composition-api.nuxtjs.org/helpers/useasync/）
export default {
  async asyncData({ $axios, route }) {
    try {
      const itemId = route.params.id
      const qiitaItem: Item = await $axios.$get(
        `https://qiita.com/api/v2/items/${itemId}`
      )

      return { qiitaItem }
    } catch (error) {
      const { response } = error
      // eslint-disable-next-line no-console
      console.error(
        `Error: ${response.data.message}\nstatus code is ${response.status}`
      )
    }
  },

  data() {
    return {
      qiitaItem: {},
    }
  },
}
</script>
