<template>
  <AuthLayout title="重设密码">
    <template #header>
      <div class="h-2 bg-[var(--p-sky-500)] transition-all" :class="headerClassList" />
    </template>

    <!-- 发送验证码 -->
    <form @submit.prevent="sendCode" class="space-y-8 px-12 pb-12" v-show="state === 'send'">
      <FloatLabel>
        <InputText class="w-full" :style="{ boxShadow: 'none' }" id="username" v-model="username" />
        <label for="username">用户名</label>
      </FloatLabel>

      <div>
        <FloatLabel class="flex-1">
          <InputText class="w-full" :style="{ boxShadow: 'none' }" id="email" v-model="email" />
          <label for="email">邮箱</label>
        </FloatLabel>
        <div class="flex w-full flex-row justify-end">
          <Button label="Reset Password" class="!px-0" link @click="router.push('/login')">
            返回登录
          </Button>
        </div>
      </div>
      <Button type="submit" label="SendCode" class="w-full">发送验证码</Button>
    </form>

    <!-- 验证验证码 -->
    <form
      @submit.prevent="checkVerifyCode"
      class="space-y-8 px-12 pb-12"
      v-show="state === 'check'"
    >
      <label for="code" class="pl-[10px] text-[var(--p-floatlabel-color)]"
        >输入发送至邮箱的验证码
      </label>
      <div>
        <div class="flex justify-center">
          <InputOtp v-model="verifyCode" id="code">
            <template #default="{ attrs, events }">
              <input type="text" v-bind="attrs" v-on="events" class="verify-code-input" />
            </template>
          </InputOtp>
        </div>
        <div class="flex w-full flex-row justify-end pt-4">
          <span class="py-[var(--p-button-padding-y)] text-[var(--p-floatlabel-color)]"
            >没有收到验证码？
          </span>
          <Button label="Reset Password" class="!px-0" link @click="sendCode">重新发送</Button>
        </div>
      </div>
      <Button type="submit" label="CheckVerifyCode" class="w-full">确认</Button>
    </form>

    <!-- 重设密码 -->
    <form @submit.prevent="resetPassword" class="space-y-8 px-12 pb-12" v-show="state === 'reset'">
      <FloatLabel>
        <InputText
          class="w-full"
          :style="{ boxShadow: 'none' }"
          id="new-password"
          v-model="username"
        />
        <label for="new-password">输入新密码</label>
      </FloatLabel>
      <FloatLabel class="flex-1">
        <InputText
          class="w-full"
          :style="{ boxShadow: 'none' }"
          id="repeat-password"
          v-model="email"
        />
        <label for="repeat-password">重复新密码</label>
      </FloatLabel>
      <Button type="submit" label="ResetPassword" class="!mt-12 w-full">重设密码</Button>
    </form>
  </AuthLayout>
</template>

<script lang="ts" setup>
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputOtp from 'primevue/inputOtp'

import AuthLayout from '@/layouts/AuthLayout.vue'

import { ref, watch } from 'vue'
import router from '@/router'

const state = ref<'send' | 'check' | 'reset'>('send')
const headerClassList = ref('w-1/3 rounded-tl-lg')

const username = ref<string>('')
const email = ref<string>('')

const verifyCode = ref<string>('')

watch(state, () => {
  switch (state.value) {
    case 'send': {
      headerClassList.value = 'w-1/3 rounded-tl-lg'
      break
    }
    case 'check': {
      headerClassList.value = 'w-2/3 rounded-tl-lg'
      break
    }
    case 'reset': {
      headerClassList.value = 'w-full rounded-t-lg'
      break
    }
  }
})

const sendCode = () => {
  state.value = 'check'
}

const checkVerifyCode = () => {
  state.value = 'reset'
}

const resetPassword = () => {
  router.push('/login')
}
</script>

<style lang="postcss">
.background {
  background-image: url('@/assets/background.webp');
}

.verify-code-input {
  @apply mx-2 w-[18%] appearance-none border-0 border-b-2 border-[var(--p-inputtext-border-color)] bg-transparent text-center text-[25px] outline-none transition-all;
  @apply focus:border-b-2 focus:border-b-[var(--p-primary-color)];
}
</style>
