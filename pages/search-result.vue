<template>
  <div>
    <OSearchResult :qiita-items="qiitaItems" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  watch,
  useRoute,
  ref,
  Ref,
} from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  setup() {
    const { $axios, query } = useContext()

    const qiitaItems: Ref<Item[]> = ref([])
    // 記事の一覧
    // MEMO:useAsyncとmethodの処理を共通化したい=>pluginsにまとめるのありかも
    // TODO:TEST
    useAsync(async () => {
      try {
        // Input:クエリパラメータの`userid`を取得
        // axiosでQiitaAPIにrequest
        // axiosでQiitaAPIのresponse
        // Array<Item>をdataに格納
        const params = query.value
        const searchUserItems = `user:${params.userid}`

        const data: Item[] = await $axios.$get(
          'https://qiita.com/api/v2/items',
          {
            params: {
              query: searchUserItems,
            },
          }
        )

        qiitaItems.value.splice(0, qiitaItems.value.length, ...data)
      } catch (error) {
        const { response } = error
        // eslint-disable-next-line no-console
        console.error(
          `Error: ${response.data.message}\nstatus code is ${response.status}`
        )
      }
    })

    const route = useRoute()
    watch(
      () => route.value.query,
      () => fetchQiitaItems()
    )

    // 記事の一覧
    const fetchQiitaItems = async () => {
      try {
        const params = query.value
        const userid = `user:${params.userid}`

        const data: Item[] = await $axios.$get(
          'https://qiita.com/api/v2/items',
          {
            params: {
              query: userid,
            },
          }
        )

        qiitaItems.value.splice(0, qiitaItems.value.length, ...data)
      } catch (error) {
        const { response } = error
        // eslint-disable-next-line no-console
        console.error(
          `Error: ${response.data.message}\nstatus code is ${response.status}`
        )
      }
    }

    return {
      qiitaItems,
      fetchQiitaItems,
    }
  },
})
</script>
