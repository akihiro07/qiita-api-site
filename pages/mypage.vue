<template>
  <div>
    <OSearchResult
      :is-mypage="true"
      :to-edit-page-func="toEditPageFunc"
      :delete-func="deleteFunc"
      :qiita-items="qiitaItems"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  Ref,
  onMounted,
  useRouter,
} from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  setup() {
    const { $fetchQiita } = useContext()
    const router = useRouter()

    const qiitaItems: Ref<Item[]> = ref([])
    // 認証ユーザーの記事一覧
    onMounted(async () => {
      try {
        // MEMO:sessionStorageはサーバーサイド側では取得できない
        const getAccessToken = sessionStorage.getItem('access_token')
        const accessToken = `Bearer ${getAccessToken}`
        const data = await $fetchQiita.getUserItemList(accessToken)
        qiitaItems.value.splice(0, qiitaItems.value.length, ...data)
      } catch (error) {
        console.log('error', error)

        sessionStorage.removeItem('access_token')
        await alert('有効なアクセストークンではありません。')
        router.push('/login/')
      }
    })

    // 認証ユーザーの記事編集画面遷移
    const toEditPageFunc = (itemID: string) => {
      router.push(`/edit/${itemID}`)
    }

    // 認証ユーザーの記事削除
    const deleteFunc = async (itemID: string) => {
      if (window.confirm('本当に削除しますか？')) {
        try {
          const getAccessToken = sessionStorage.getItem('access_token')
          const accessToken = `Bearer ${getAccessToken}`
          await $fetchQiita.deleteItem(itemID, accessToken)
          location.reload()
        } catch (error) {
          const { response } = error
          // eslint-disable-next-line no-console
          console.error(
            `Error: ${response.data.message}\nstatus code is ${response.status}`
          )
        }
      } else {
        window.alert('削除をキャンセルしました。')
      }
    }

    return {
      qiitaItems,
      toEditPageFunc,
      deleteFunc,
    }
  },
})
</script>
