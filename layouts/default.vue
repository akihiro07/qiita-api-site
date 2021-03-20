<template>
  <div class="min-h-screen" :class="$style.wrapper">
    <OHeader class="sticky top-0 h-16" />

    <Nuxt class="px-20 xl:px-56 pt-12 xl:pt-20 pb-10" :class="$style.content" />
  </div>
</template>

<style lang="scss" module>
.wrapper {
  background-color: $primary;
}

.content {
  min-height: calc(100vh - 4rem);
}
</style>
