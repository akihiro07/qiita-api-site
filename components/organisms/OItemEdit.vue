<template>
  <div class="grid grid-cols-10 gap-x-8">
    <div class="col-span-8">
      <textarea
        v-model="item.title"
        placeholder="title"
        class="w-full font-bold text-3xl bg-transparent outline-none resize-none h-12 py-2"
      />

      <MTagInput :qiita-tags.sync="item.tags" />

      <MMarkdownEditor
        v-show="!isPreview"
        class="mt-4"
        :md-text.sync="item.body"
      />

      <div v-show="isPreview" class="markdown-body bg-white mt-4 py-4 px-5">
        <div v-html="$md.render(qiitaItem.body)" />
      </div>
    </div>

    <div class="col-span-2 flex flex-col">
      <AButton
        :text="visibility.text"
        :type="visibility.type"
        :click-func="visibilityChangeFunc"
      />
      <AButton class="mt-4" :text="modeText" :click-func="modeChange" />
      <AButton class="mt-4" text="更新する" :click-func="saveFunc" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
} from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  props: {
    qiitaItem: {
      type: Object as PropType<Item>,
      required: true,
    },

    visibilityChangeFunc: {
      type: Function,
      required: true,
    },

    saveFunc: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    const item = computed(() => props.qiitaItem)

    const isPreview = ref(false)
    const modeText = ref('プレビュー')
    const modeChange = () => {
      if (isPreview.value) {
        isPreview.value = false
        modeText.value = 'プレビュー'
      } else {
        isPreview.value = true
        modeText.value = '編集'
      }
    }

    const visibility = computed(() => {
      const isPrivate = item.value.private
      const text = isPrivate ? '限定共有投稿' : '公開投稿'
      const type = isPrivate ? 'tertiary' : 'quaternary'
      return { text, type }
    })

    return { item, isPreview, modeText, modeChange, visibility }
  },
})
</script>
