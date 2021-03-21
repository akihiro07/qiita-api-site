<template>
  <div class="grid place-items-center">
    <div v-cloak class="flex flex-col w-64">
      <AInput
        :text.sync="accessToken"
        type="text"
        placeholder="アクセストークンを入力"
      />
      <AButton class="mt-4" text="ログイン" :click-func="loginFunc" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useAsync,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    const { redirect } = useContext()

    useAsync(() => {
      if (process.client && sessionStorage.getItem('access_token')) {
        redirect('/mypage/')
      }
    })

    const accessToken = ref('')
    const loginFunc = () => {
      sessionStorage.setItem('access_token', accessToken.value)
      router.push('/mypage/')
    }
    return { accessToken, loginFunc }
  },
})
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
