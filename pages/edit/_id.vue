<template>
  <div>
    <OItemEdit
      :qiita-item="qiitaItem"
      :visibility-change-func="visibilityChangeFunc"
      :save-func="saveFunc"
    />
  </div>
</template>

<script lang="ts">
import { Item } from '@/types/qiita-types'
import Prism from '@/plugins/prism'
import { Context } from '@nuxt/types'

// MEMO: optionsAPI使用 => 動的ページへの画面遷移時、compositionAPIは挙動が怪しい為（https://composition-api.nuxtjs.org/helpers/useasync/）
// TODO:TEST
export default {
  async asyncData({ $axios, route }: Context) {
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
      qiitaItem: {} as Item,
    }
  },

  mounted: () => {
    Prism.highlightAll()
  },

  methods: {
    // 公開範囲変更
    visibilityChangeFunc() {
      const app = this as any
      app.qiitaItem.private = !app.qiitaItem.private
    },

    // 更新処理
    // TODO:TEST
    async saveFunc() {
      try {
        const getAccessToken = sessionStorage.getItem('access_token')
        const accessToken = `Bearer ${getAccessToken}`
        const app = this as any
        const item = app.qiitaItem

        await app.$axios.$patch(
          `https://qiita.com/api/v2/items/${item.id}`,
          {
            body: item.body,
            private: item.private,
            tags: item.tags,
            title: item.title,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        )

        alert('更新しました。')
        app.$router.push('/mypage/')
      } catch (error) {
        const { response } = error
        // eslint-disable-next-line no-console
        console.error(
          `Error: ${response.data.message}\nstatus code is ${response.status}`
        )
      }
    },
  },
}
</script>
