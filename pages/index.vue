<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { redirect } = useContext()
    useAsync(() => redirect('/login'))

    return {}
  },
})
</script>
