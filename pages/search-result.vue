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
    const { query, $fetchQiita } = useContext()

    const qiitaItems: Ref<Item[]> = ref([])
    // 記事一覧
    useAsync(async () => {
      const params = query.value
      const userid = params.userid
      const itemList = await $fetchQiita.getItemList(userid as string)
      qiitaItems.value.splice(0, qiitaItems.value.length, ...itemList)
    })

    const route = useRoute()
    watch(
      () => route.value.query,
      () => fetchQiitaItems()
    )

    // 記事一覧
    const fetchQiitaItems = async () => {
      const params = query.value
      const userid = params.userid
      const itemList = await $fetchQiita.getItemList(userid as string)
      qiitaItems.value.splice(0, qiitaItems.value.length, ...itemList)
    }

    return {
      qiitaItems,
      fetchQiitaItems,
    }
  },
})
</script>
