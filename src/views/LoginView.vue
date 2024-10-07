<template>
  <AuthLayout title="登录">
    <template #header>
      <div class="h-2 w-full rounded-t-lg bg-[var(--p-sky-500)]" />
    </template>
    <form @submit.prevent="" class="space-y-8 px-12 pb-12">
      <FloatLabel>
        <InputText class="w-full" :style="{ boxShadow: 'none' }" id="username" v-model="username" />
        <label for="username">用户名</label>
      </FloatLabel>
      <div>
        <FloatLabel>
          <InputText
            type="password"
            class="w-full"
            :style="{ boxShadow: 'none' }"
            id="password"
            v-model="password"
          />
          <label for="password">密码</label>
        </FloatLabel>
        <div class="flex w-full flex-row justify-end">
          <Button label="Reset Password" class="!px-0" link @click="ToResetPassword">
            重设密码</Button
          >
        </div>
      </div>
      <Button type="submit" label="submit" class="w-full">登录</Button>
    </form>
  </AuthLayout>
</template>

<script lang="ts" setup>
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import AuthLayout from '@/layouts/AuthLayout.vue'

import { ref } from 'vue'
import router from '@/router'

const username = ref<string>('')
const password = ref<string>('')

const ToResetPassword = () => {
  router.push('user/reset-password')
}
</script>

<style lang="postcss">
.background {
  background-image: url('@/assets/background.webp');
}
</style>
