<template>
  <div
    class="background h-screen w-full bg-cover before:absolute before:h-full before:w-full before:bg-black/10 before:content-['']"
  >
    <div
      class="relative left-1/2 top-1/2 w-[56vh] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/75 backdrop-blur-lg"
    >
      <ProgressBar 
        :value="progressValue"  
        :showValue="false"
        class="custom-progress-bar"
      />
      <p class="my-12 text-center text-3xl text-[var(--p-sky-500)]">重设密码</p>
      <form @submit.prevent="submitForm" class="space-y-8 px-12 pb-12">
        <FloatLabel>
          <InputText
            class="w-full"
            :style="{ boxShadow: 'none' }"
            id="username"
            v-model="username"
          />
          <label for="username">用户名</label>
        </FloatLabel>

        <div class="flex items-center space-x-4">
          <FloatLabel class="flex-1">
            <InputText
              class="w-full"
              id="email"
              v-model="email"
            />
            <label for="email">邮箱</label>
          </FloatLabel>
          <Button 
              label="Send Code"
              @click="sendCode"
            >
            发送验证码
          </Button>
        </div>

        <div class="card flex justify-center">
          <InputOtp v-model="verification" style="display: flex; justify-content: space-between;">
            <template #default="{ attrs, events }">
              <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            </template>
          </InputOtp>
        </div>
        <Button type="submit" label="submit" class="w-full">确认</Button>
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
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputOtp from 'primevue/inputOtp'
import ProgressBar from 'primevue/progressbar';
import { ref, watch } from 'vue'

const currentYear = ref(new Date().getFullYear())
const username = ref<string>('')   
const email = ref<string>('')      
const verification = ref<string | null>('')  
const progressValue = ref<number>(0) 

watch([username, email], () => {
  if (username.value !== '' && email.value !== '') {
    progressValue.value = 33.33; 
  } else {
    progressValue.value = 0; 
  }
})

function sendCode() {
  if (username.value !== '' && email.value !== '') {  
    progressValue.value = 66.66; 
  }
}


function submitForm() {
  if (verification.value) {
    progressValue.value = 100;   
  }
}
</script>

<style lang="postcss">
.background {
  background-image: url('@/assets/background.webp');
}

.custom-progress-bar  {
  border-radius: 8px 8px 0 0 !important; /* 设置圆角 */
  height: 8px !important; /* 设置高度 */
}


.custom-otp-input {
  width: 18%;
  font-size: 25px;
  margin: 0 10px 0 10px;
  border: 0 none;
  appearance: none;
  text-align: center;
  transition: all 0.2s;
  background: transparent;
  border-bottom: 2px solid var(--p-inputtext-border-color);
}

.custom-otp-input:focus {
  outline: 0 none;
  border-bottom-color: var(--p-primary-color);
}
</style>
