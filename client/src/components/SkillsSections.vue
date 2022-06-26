<template>
  <div>
    <div class="flex mb-4 text-3xl title" id="skill">
      <span class="border-b-4 borders pb-2">Ski</span>ll
    </div>
    <div class="grid xl:grid-cols-2 xl:gap-x-9 gap-y-5 mr-10">
      <div v-for="(item, index) in informations.sections" :key="index">
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium dark:text-white">{{
            item.name
          }}</span>
          <span class="text-sm font-medium dark:text-white"
            >{{ item.percet }}%</span
          >
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="skills h-2.5 rounded-full"
            :style="style(item.percet)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["propsData"],
    data() {
      return {
        informations: this.propsData,
      };
    },
    methods: {
      style(percet) {
        return `width : ${percet}%`;
      },
    },
  };
</script>
