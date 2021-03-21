<template>
  <div>
    <OSearchResult :is-mypage="true" :qiita-items="qiitaItems" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  ref,
  Ref,
  onMounted,
} from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  setup() {
    const { $axios } = useContext()

    const qiitaItems: Ref<Item[]> = ref([])
    // 認証ユーザーの記事一覧
    // TODO:TEST
    onMounted(async () => {
      try {
        // MEMO:sessionStorageはサーバーサイド側では取得できない
        const getAccessToken = sessionStorage.getItem('access_token')
        const accessToken = `Bearer ${getAccessToken}`
        const data: Item[] = await $axios.$get(
          'https://qiita.com/api/v2/authenticated_user/items',
          {
            headers: {
              Authorization: accessToken,
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

    return {
      qiitaItems,
    }
  },
})
</script>
