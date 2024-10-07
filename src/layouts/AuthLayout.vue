<template>
  <main
    class="background h-screen w-full bg-cover before:absolute before:h-full before:w-full before:bg-black/10 before:content-['']"
  >
    <div
      class="relative left-1/2 top-1/2 w-[56vh] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/75 backdrop-blur-lg"
    >
      <slot name="header"></slot>
      <p class="my-12 text-center text-3xl text-[var(--p-sky-500)]">{{ props.title }}</p>
      <slot></slot>
    </div>
    <div class="absolute bottom-0 right-0 m-2 px-1 text-white/75">
      <p>Copyright © {{ currentYear }} MisakaNetwork Lab</p>
      <p class="text-end">
        Illustration by artist
        <a
          href="https://www.pixiv.net/users/33886650"
          target="_blank"
          class="text-[var(--p-sky-100)]"
          >いちご飴</a
        >
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title: string
}>()

const currentYear = ref(new Date().getFullYear())
</script>

<style lang="postcss">
.background {
  background-image: url('@/assets/background.webp');
}
</style>
