import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'
import axios from 'axios'

export const getItemList = async (userid: string): Promise<Item[]> => {
  try {
    // userid検索は｀user:${params.userid}｀という形でなければならない
    const uid = `user:${userid}`

    const response = await axios.get('https://qiita.com/api/v2/items', {
      params: {
        // keyはquery,valueはuser:xxxx
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

const modules = {
  getItemList,
}

declare module 'vue/types/vue' {
  interface Vue {
    $fetchQiita: any
  }
}

declare module '@nuxt/types' {
  interface Context {
    $fetchQiita: any
  }
}

export default defineNuxtPlugin((_, inject) => {
  inject('fetchQiita', modules)
})
