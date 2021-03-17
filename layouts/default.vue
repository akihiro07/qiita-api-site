<template>
  <div class="min-h-screen" :class="$style.wrapper">
    <OHeader />

    <Nuxt />
  </div>
</template>

<style lang="scss" module>
.wrapper {
  background-color: $primary;
}
</style>
