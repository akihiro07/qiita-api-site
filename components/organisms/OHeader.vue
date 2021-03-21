<template>
  <header
    class="px-24 py-3 flex justify-between items-center"
    :class="$style.background"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-white">QiitaAPI</h1>
      <MSearch
        class="ml-10"
        :keyword.sync="keyword"
        :search-func="searchFunc"
      />
    </div>

    <div>
      <AButton
        v-if="isLogin"
        text="ログアウト"
        el="nuxtLink"
        :click-func="logoutFunc"
      />

      <AButton
        v-else-if="!isLogin"
        text="ログイン"
        el="nuxtLink"
        :click-func="toLoginFunc"
      />
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useRoute,
  useRouter,
  watch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()

    const isLogin = ref(false)
    onMounted(() => {
      isLogin.value = !!sessionStorage.getItem('access_token')
    })

    watch(
      () => route.value,
      () => {
        isLogin.value = !!sessionStorage.getItem('access_token')
      }
    )

    const keyword = ref('')
    const searchFunc = () => {
      const query = `?userid=${keyword.value}`
      router.push(`/search-result/${query}`)
    }

    const toLoginFunc = () => {
      router.push('/login/')
    }

    const logoutFunc = () => {
      sessionStorage.removeItem('access_token')
      isLogin.value = false
      router.push('/login/')
    }

    return {
      isLogin,
      keyword,
      searchFunc,
      toLoginFunc,
      logoutFunc,
    }
  },
})
</script>

<style lang="scss" module>
.background {
  background-color: $secondary;
}
</style>
