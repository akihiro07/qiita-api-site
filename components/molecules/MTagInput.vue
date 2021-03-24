<template>
  <client-only>
    <VueTagsInput
      v-model="tag"
      :tags="formatQiitaTags"
      placeholder="タグ"
      @tags-changed="changeTags"
    />
  </client-only>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  PropType,
} from '@nuxtjs/composition-api'

interface PackageTags {
  text: string
  tiClasses: Array<string>
}

export default defineComponent({
  props: {
    qiitaTags: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
  },

  setup(props, context) {
    const tag = ref('')

    // objectのkeyを`name`->`text`に変換(packageの使用上)
    const formatQiitaTags = computed(() => {
      const filterData = props.qiitaTags.map((item) => {
        return {
          text: item.name,
          style:
            'color: #56c1da; background-color: transparent; border: 1px solid #52bd95',
        }
      })
      return filterData
    })
    const changeTags = (e: Array<PackageTags>) => {
      const filterData = e.map((item) => {
        return { name: item.text }
      })
      context.emit('update:qiitaTags', filterData)
    }
    return { tag, formatQiitaTags, changeTags }
  },
})
</script>
