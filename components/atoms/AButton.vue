<template>
  <button
    class="font-bold py-2 px-5 rounded"
    :class="[$style.button, $style[type]]"
    @click="clickFunc"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: 'primary',
    },

    clickFunc: {
      type: Function,
      default: () => {},
    },
  },

  setup() {
    return {}
  },
})
</script>

<style lang="scss" module>
.button {
  outline: none !important;
  color: $tertiary;

  &.primary {
    background-color: $quaternary;
  }
}
</style>
