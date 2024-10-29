<template>
  <main class="h-[1000px] w-full bg-[var(--p-gray-100)]">
    <MenuBar />
    <div class="flex px-[100px] mt-[25px]">

      <div class="flex flex-col w-[600px]">
        <Card class="!bg-blue-300 w-[500px] h-[250px] mb-4">
          <template #content>
            <p class="text-[15px] text-gray-500 font-bold">用户统计:</p>
            <p class="text-[70px] text-gray-50 font-bold">{{ userStats.totalUsers }}</p>
            <div class="mt-4 text-gray-200">
              <div class="flex">
                <p class="text-[15px] text-gray-500 font-bold mr-[150px]">
                  男性用户: <span class="text-white font-semibold text-lg ml-4">{{ userStats.maleUsers }}</span>
                </p>
                <p class="text-[15px] text-gray-500 font-bold">
                  女性用户: <span class="text-white font-semibold text-lg ml-4">{{ userStats.femaleUsers }}</span>
                </p>
              </div>
              <div class="mt-4">
                <p class="text-[18px] font-semibold">月增长: {{ userStats.monthlyIncrease }}%</p>
              </div>
            </div>
          </template>
        </Card>
        <div class="w-[500px] h-[300px] bg-white rounded-lg shadow-md p-[20px] flex flex-col justify-between">
          <div class="flex-1">
            <canvas id="createDailyUcntChart" style="width: 90%; height: 90%;"></canvas>
          </div>
        </div>

        <div class="w-[500px] h-[250px] bg-white rounded-lg shadow-md mt-4 p-4">
          <canvas id="createTimelyCompletionChart"></canvas>
        </div>
      </div>

      <div class="w-full h-[835px] ml-[50px] bg-gray-100 shadow-md rounded-lg p-10">
        <div class="flex w-full">
          <div class="w-[400px] h-[350px] bg-white shadow-lg rounded-lg p-4 mr-10">
            <canvas id="createWordsCntChart"></canvas>
          </div>
          <div class="w-[800px] h-[350px] bg-white rounded-lg shadow-md p-4 overflow-y-auto">
            <p class="text-gray-500 font-semibold mb-2">常错单词列表:</p>
            <ul class="space-y-2">
              <li v-for="(word, index) in sortedErrorWords" :key="index" class="flex justify-between p-2 bg-gray-50 rounded-md shadow-sm">
                <div class="flex-1 text-gray-700 font-semibold">{{ word.word }}</div>
                <div class="w-[80px] text-gray-500 text-center">{{ word.partOfSpeech }}</div>
                <div class="flex-1 text-gray-400">{{ word.translation }}</div>
                <div class="w-[80px] text-right text-red-500 font-semibold">{{ word.errorCount }} 次</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-auto mt-[40px]">
          <div class="h-[350px] bg-white shadow-lg rounded-lg mt-[15px] p-4">
            <canvas id="createRequestVolumeChart"></canvas>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script lang="ts" setup>
import MenuBar from '@/components/MenuBar.vue';
import { onMounted, computed } from 'vue';
import createWordsCntChart from '@/components/chart/WordsCntChart';
import createDailyUcntChart from '@/components/chart/DailyUserChart'; 
import createDailyRequestChart from '@/components/chart/DailyRequestChart'
import createTimelyCompletionChart from '@/components/chart/timelyCompletionChart.js'
import Card from 'primevue/card';

onMounted(() => {
  const dailyUserCntCtx = (document.getElementById('createDailyUcntChart') as HTMLCanvasElement)?.getContext('2d');
  if (dailyUserCntCtx) {
    createDailyUcntChart(dailyUserCntCtx); 
  }

  const CompletionCtx = (document.getElementById('createTimelyCompletionChart') as HTMLCanvasElement)?.getContext('2d');
  if (CompletionCtx) {
    createTimelyCompletionChart(CompletionCtx); 
  }

  const UserCntCtx = (document.getElementById('createWordsCntChart') as HTMLCanvasElement)?.getContext('2d');
  if (UserCntCtx) {
    createWordsCntChart(UserCntCtx); 
  }

  const RequestCtx = (document.getElementById('createRequestVolumeChart') as HTMLCanvasElement)?.getContext('2d');
  if (RequestCtx) {
    createDailyRequestChart(RequestCtx); 
  }
});

const userStats: { 
    totalUsers: number; 
    maleUsers: number; 
    femaleUsers: number; 
    monthlyIncrease: number; 
} = {
    totalUsers: 1360, 
    maleUsers: 816,    
    femaleUsers: 544, 
    monthlyIncrease: 10 
};

const errorWords = [
  { word: 'accommodate', partOfSpeech: 'v.', translation: '容纳；提供住宿', errorCount: 12 },
  { word: 'definitely', partOfSpeech: 'adv.', translation: '明确地，肯定地', errorCount: 15 },
  { word: 'occurrence', partOfSpeech: 'n.', translation: '发生，出现', errorCount: 8 },
  { word: 'embarrass', partOfSpeech: 'v.', translation: '使尴尬', errorCount: 20 },
  { word: 'recommend', partOfSpeech: 'v.', translation: '推荐', errorCount: 10 },
  { word: 'separate', partOfSpeech: 'adj.', translation: '分开的', errorCount: 9 },
  { word: 'pronunciation', partOfSpeech: 'n.', translation: '发音', errorCount: 13 },
];

const sortedErrorWords = computed(() => {
  return [...errorWords].sort((a, b) => b.errorCount - a.errorCount);
});

</script>

<style scoped>

</style>
