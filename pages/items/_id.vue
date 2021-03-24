<template>
  <div>
    <OItemDetail :qiita-item="qiitaItem" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

// MEMO: optionsAPI使用 => 動的ページへの画面遷移時、compositionAPIは挙動が怪しい為（https://composition-api.nuxtjs.org/helpers/useasync/）
export default {
  async asyncData({ route, $fetchQiita }: Context) {
    try {
      const itemId = route.params.id
      const qiitaItem = await $fetchQiita.getItem(itemId)
      return { qiitaItem }
    } catch (error) {
      console.error(error)
    }
  },

  data() {
    return {
      qiitaItem: {},
    }
  },
}
</script>
