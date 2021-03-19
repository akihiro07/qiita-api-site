<template>
  <div>
    <OSearchResult />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios, query } = useContext()

    // 記事一覧取得
    const qiitaItems = useAsync(async () => {
      try {
        const params = query.value
        const userid = params.userid

        const data = await $axios.$get('https://qiita.com/api/v2/items', {
          params: {
            page: '1',
            per_page: '3',
            query: userid,
          },
        })

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
