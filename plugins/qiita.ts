import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'
import axios from 'axios'

// 記事一覧を取得
const getItemList = async (userid: string): Promise<Item[]> => {
  try {
    const url = 'https://qiita.com/api/v2/items'
    // userid検索は｀query=user:${userid}｀という形でなければならない
    const uid = `user:${userid}`

    const response = await axios.get(url, {
      params: {
        page: 1,
        per_page: 100,
        query: uid,
      },
    })

    return response.data
  } catch (error) {
    const { response } = error
    // eslint-disable-next-line no-console
    console.error(
      `Error: ${response.data.message}\nstatus code is ${response.status}`
    )
    return []
  }
}

// 記事詳細を取得
const getItem = async (itemid: string): Promise<Item | {}> => {
  try {
    const response = await axios.get(`https://qiita.com/api/v2/items/${itemid}`)

    return response.data
  } catch (error) {
    const { response } = error
    // eslint-disable-next-line no-console
    console.error(
      `Error: ${response.data.message}\nstatus code is ${response.status}`
    )
    return {}
  }
}

const deleteItem = async (itemid: string, token: string): Promise<void> => {
  try {
    await axios.delete(`https://qiita.com/api/v2/items/${itemid}`, {
      headers: {
        Authorization: token,
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
declare module 'vue/types/vue' {
  interface Vue {
    $fetchQiita: {
      getItemList: (userid: string) => Promise<Item[]>
      getItem: (itemid: string) => Promise<Item[]>
      deleteItem: (itemid: string, token: string) => void
    }
  }
}

declare module '@nuxt/types' {
  interface Context {
    $fetchQiita: {
      getItemList: (userid: string) => Promise<Item[]>
      getItem: (itemid: string) => Promise<Item[]>
      deleteItem: (itemid: string, token: string) => void
    }
  }
}

const modules = {
  getItemList,
  getItem,
  deleteItem,
}

export default defineNuxtPlugin((_, inject) => {
  inject('fetchQiita', modules)
})
