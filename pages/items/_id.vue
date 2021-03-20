<template>
  <div>
    <OItemDetail :qiita-item="qiitaItem" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  Ref,
  useAsync,
  useContext,
  useRoute,
} from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const route = useRoute()

    // TODO:TEST
    const qiitaItem: Ref<Item | null | undefined> = useAsync(async () => {
      try {
        const id = route.value.params.id
        const data: Item = await $axios.$get(
          `https://qiita.com/api/v2/items/${id}`
        )

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
      qiitaItem,
    }
  },
})
</script>
