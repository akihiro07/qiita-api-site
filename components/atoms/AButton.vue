<template>
  <button
    v-if="!to"
    class="font-bold py-2 px-5 rounded"
    :class="[$style.button, $style[type]]"
    @click="clickFunc"
  >
    {{ text }}
  </button>

  <nuxt-link
    v-else-if="to"
    class="font-bold py-2 px-5 rounded"
    :class="[$style.button, $style[type]]"
    :to="to"
  >
    {{ text }}
  </nuxt-link>
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

    to: {
      type: String,
      default: '',
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

  &.secondary {
    background-color: initial;
  }

  &.tertiary {
    background-color: initial;
    border: 1px solid $quinary;
    color: $quinary;
  }

  &.quaternary {
    background-color: $quinary;
  }
}
</style>
