<template>
  <div
    class="background h-screen w-full bg-cover before:absolute before:h-full before:w-full before:bg-black/10 before:content-['']"
  >
    <div
      class="relative left-1/2 top-1/2 w-[56vh] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/75 backdrop-blur-lg"
    >
      <div class="h-2 w-full rounded-t-lg bg-[var(--p-sky-500)]" />
      <p class="my-12 text-center text-3xl text-[var(--p-sky-500)]">登录</p>
      <form @submit.prevent="" class="space-y-8 px-12 pb-12">
        <FloatLabel>
          <InputText
            class="w-full"
            :style="{ boxShadow: 'none' }"
            id="username"
            v-model="username"
          />
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
            <Button label="Reset Password" class="!px-0" link>重设密码</Button>
          </div>
        </div>
        <Button type="submit" label="submit" class="w-full">登录</Button>
      </form>
    </div>
    <div class="absolute bottom-0 right-0 m-2 px-1 text-white/75">
      <p>Copyright © {{ currentYear }} MisakaNetwork Lab</p>
      <p class="text-end">
        Illustration by artist
        <a href="https://www.pixiv.net/users/33886650" class="text-[var(--p-sky-100)]">いちご飴</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
const username = ref<string>('')
const password = ref<string>('')

</script>
<style lang="postcss">
.background {
  background-image: url('@/assets/background.webp');
}
</style>
