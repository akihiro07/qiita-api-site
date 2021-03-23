import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'
import axios from 'axios'

const getItemList = async (userId: string): Promise<Item[]> => {
  try {
    const uid = `user:${userId}`

    const response = await axios.get('https://qiita.com/api/v2/items', {
      params: {
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

export default defineNuxtPlugin((_, inject: any) => {
  inject('fetchQiita', modules)
})
