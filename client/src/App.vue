<template>
  <div
    id="app"
    class="flex flex-col xl:flex-row xl:w-screen xl:h-screen bg-gray-400 overflow-y-hidden"
  >
    <div
      class="flex flex-col xl:h-full xl:sticky xl:top-0 xl:w-56 xl:flex xl:flex-col"
    >
      <Navigation :language="language"></Navigation>
    </div>
    <div
      class="flex flex-col xl:flex xl:flex-row xl:flex-grow overflow-auto xl:h-full xl:w-full"
    >
      <router-view :language="language"></router-view>
      <span class="absolute top-1/5 right-5 xl:top-10 xl:right-5">
        <select
          id="language"
          v-model="language"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="EN">English</option>
          <option value="IT">Italiano</option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
  import Navigation from "./components/NavigationPage.vue";

  export default {
    
    name: "App",
    components: {
      Navigation,
    },
    data(){
      return {
        language : "EN"
      }
    },
  };
</script>
<style>
  .prova {
    color: blue !important;
  }

  .resume .resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #050d18;
  }

  .resume .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #1f5297;
    position: relative;
  }

  .resume .resume-item h5 {
    font-size: 16px;
    background: #e4edf9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .resume .resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid #1f5297;
  }
</style>
