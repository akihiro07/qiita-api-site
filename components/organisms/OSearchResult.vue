<template>
  <div>
    <template v-if="qiitaItems && qiitaItems > 1">
      <MPostCard
        v-for="item of qiitaItems"
        :key="item.id"
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

    qiitaItems: {
      type: Array,
      default: null,
    },
  },

  setup() {
    return {}
  },
})
</script>
