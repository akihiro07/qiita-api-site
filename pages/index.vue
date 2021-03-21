<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { redirect } = useContext()
    useAsync(() => {
      if (process.client && sessionStorage.getItem('access_token')) {
        redirect('/mypage/')
      } else if (process.client && !sessionStorage.getItem('access_token')) {
        redirect('/login/')
      }
    })

    return {}
  },
})
</script>
