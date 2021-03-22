<template>
  <div class="grid grid-cols-10 gap-x-8">
    <div class="col-span-8">
      <textarea
        v-model="item.title"
        placeholder="title"
        class="w-full font-bold text-3xl bg-transparent outline-none resize-none h-12 py-2"
      />

      <div class="bg-white mt-4">{{ tags }}</div>

      <div class="markdown-body bg-white mt-4 py-4 px-5">
        <div v-html="$md.render(qiitaItem.body)" />
      </div>
    </div>

    <div class="col-span-2 flex flex-col">
      <AButton text="プレビュー" />
      <AButton class="mt-4" text="更新" :click-func="saveFunc" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  props: {
    qiitaItem: {
      type: Object as PropType<Item>,
      required: true,
    },

    saveFunc: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    const item = computed(() => props.qiitaItem)

    const tags = computed(() => {
      // eslint-disable-next-line prettier/prettier
      const tagList: Array<string> = props.qiitaItem.tags.map(({ name }) => name)
      const toStringTags = tagList.join()
      return toStringTags
    })
    return { item, tags }
  },
})
</script>
