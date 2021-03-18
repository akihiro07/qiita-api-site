<template>
  <div class="min-h-screen" :class="$style.wrapper">
    <OHeader class="sticky top-0" />

    <Nuxt class="px-56 pt-20" />
  </div>
</template>

<style lang="scss" module>
.wrapper {
  background-color: $primary;
}
</style>
