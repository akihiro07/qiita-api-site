<template>
  <div>
    <OSearchResult :qiita-items="qiitaItems" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  setup() {
    const { $axios, query } = useContext()

    // 記事一覧取得
    const qiitaItems = useAsync(async () => {
      try {
        const params = query.value
        const userid = params.userid

        const data: Item[] = await $axios.$get(
          'https://qiita.com/api/v2/items',
          {
            params: {
              query: userid,
            },
          }
        )

        return data
      } catch (error) {
        const { response } = error
        // eslint-disable-next-line no-console
        console.error(
          `Error: ${response.data.message}\nstatus code is ${response.status}`
        )
      }
    })

    return {
      qiitaItems,
    }
  },
})
</script>
