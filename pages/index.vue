<template>
  <div class="container">
    <div>HOGE</div>
    <div>FUGA</div>
    <div>PAPA</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  // your nuxt config
})
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
