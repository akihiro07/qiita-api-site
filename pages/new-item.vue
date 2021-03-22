<template>
  <div>
    <OItemNew :item-data="itemData" :save-func="saveFunc" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'

interface PostItemData {
  body: string
  private: boolean
  tags: Array<object>
  title: string
  tweet: boolean
}

export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const router = useRouter()

    const itemData = reactive<PostItemData>({
      body: '',
      private: true, // 限定共有フラグ
      tags: [{ name: 'test' }],
      title: '',
      tweet: false,
    })

    // TODO:TEST
    const saveFunc = async () => {
      try {
        const getAccessToken = sessionStorage.getItem('access_token')
        const accessToken = `Bearer ${getAccessToken}`

        await $axios.$post(
          'https://qiita.com/api/v2/items',
          {
            body: itemData.body,
            private: itemData.private,
            tags: itemData.tags,
            title: itemData.title,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        )

        alert('投稿しました。')
        router.push('/mypage/')
      } catch (error) {
        const { response } = error
        // eslint-disable-next-line no-console
        console.log(response)
        console.error(
          `Error: ${response.data.message}\nstatus code is ${response.status}`
        )
        alert('投稿に失敗しました。')
      }
    }
    return { itemData, saveFunc }
  },
})
</script>
