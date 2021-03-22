<template>
  <div class="grid grid-cols-10 gap-x-8">
    <div class="col-span-8">
      <textarea
        v-model="item.title"
        placeholder="title"
        class="w-full font-bold text-3xl bg-transparent outline-none resize-none h-12 py-2"
      />

      <div class="bg-white mt-4 py-4 px-5">{{ tags }}</div>

      <client-only>
        <vue-simplemde
          v-show="!isPreview"
          v-model="item.body"
          :configs="configs"
          class="markdown-body bg-white mt-4"
        />
      </client-only>

      <div v-show="isPreview" class="markdown-body bg-white mt-4 py-4 px-5">
        <div v-html="$md.render(qiitaItem.body)" />
      </div>
    </div>

    <div class="col-span-2 flex flex-col">
      <AButton :text="modeText" :click-func="modeChange" />
      <AButton class="mt-4" text="更新" :click-func="saveFunc" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  ref,
} from '@nuxtjs/composition-api'
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
    const configs = ref({
      toolbar: [
        'bold',
        'italic',
        'heading',
        'quote',
        'strikethrough',
        '|',
        'heading-1',
        'heading-2',
        'heading-3',
        '|',
        'code',
        'link',
        'image',
      ],
    })
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

    const item = computed(() => props.qiitaItem)

    const tags = computed(() => {
      // eslint-disable-next-line prettier/prettier
      const tagList: Array<string> = props.qiitaItem.tags.map(({ name }) => name)
      const toStringTags = tagList.join()
      return toStringTags
    })
    return { configs, isPreview, modeText, modeChange, item, tags }
  },
})
</script>
