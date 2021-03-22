<template>
  <div>
    <template v-if="qiitaItems.length > 1">
      <MPostCard
        v-for="item of qiitaItems"
        :id="item.id"
        :key="item.id"
        :to-edit-page-func="toEditPageFunc"
        :delete-func="deleteFunc"
        :is-mypage="isMypage"
        :picture="item.user.profile_image_url"
        :name="item.user.id"
        :created-at="item.created_at"
        :title="item.title"
      />
    </template>

    <div v-else>該当する記事が見つかりませんでした。</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    isMypage: {
      type: Boolean,
      default: false,
    },

    toEditPageFunc: {
      type: Function,
      default: () => {},
    },

    deleteFunc: {
      type: Function,
      default: () => {},
    },

    qiitaItems: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    return {}
  },
})
</script>
