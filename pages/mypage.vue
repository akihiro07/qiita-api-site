<template>
  <div>
    <OSearchResult
      :is-mypage="true"
      :delete-func="deleteFunc"
      :qiita-items="qiitaItems"
    />

    <MModal />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
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

    // 認証ユーザーの記事一覧
    // TODO:TEST
    const deleteFunc = async (itemID: string) => {
      try {
        const getAccessToken = sessionStorage.getItem('access_token')
        const accessToken = `Bearer ${getAccessToken}`
        await $axios.$delete(`https://qiita.com/api/v2/items/${itemID}`, {
          headers: {
            Authorization: accessToken,
          },
        })
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
      deleteFunc,
    }
  },
})
</script>
