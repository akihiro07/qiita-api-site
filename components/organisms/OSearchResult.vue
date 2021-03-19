<template>
  <div>
    <template v-for="item of qiitaItems">
      <MPostCard
        :key="item.id"
        :is-mypage="isMypage"
        :picture="item.user.profile_image_url"
        :name="item.user.id"
        :created-at="item.created_at"
        :title="item.title"
      />
    </template>
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
      required: true,
    },
  },

  setup() {
    return {}
  },
})
</script>
