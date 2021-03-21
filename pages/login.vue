<template>
  <div class="grid place-items-center">
    <div class="flex flex-col w-64">
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
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    const accessToken = ref('')

    const loginFunc = () => {
      // 0.ルーティング(未ログイン時はマイページ画面にいけない)
      // .入力した値をsessionStorageに格納
      // .そのtokenが有効であるか判定
      // .マイページに飛ばす（ログイン用ヘッダー、ルーティング(login画面にいけない)）
      // step1.とりあえずアクセストークンを保存
      // step2.有効でない値を保存する前に弾く
      sessionStorage.setItem('access_token', accessToken.value)
      router.push('/mypage/')
    }
    return { accessToken, loginFunc }
  },
})
</script>
