<template>
  <div>
    <MPostCard
      :id="qiitaItem.id"
      :is-mypage="isMypage"
      :picture="qiitaItem.user.profile_image_url"
      :name="qiitaItem.user.id"
      :created-at="qiitaItem.created_at"
      :title="qiitaItem.title"
    />

    <MItemBody :body="qiitaItem.body" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Item } from '@/types/qiita-types'

export default defineComponent({
  props: {
    isMypage: {
      type: Boolean,
      default: false,
    },

    qiitaItem: {
      type: Object as PropType<Item>,
      required: true,
    },
  },

  setup() {
    return {}
  },
})
</script>
