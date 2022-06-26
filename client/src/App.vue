<template>
  <div
    id="app"
    class="flex flex-col w-screen h-screen background"
  >
    <!-- <h1 class="temporalProva overflow-y-hidden bottom-0 left-0 absolute">
      provaaaaaaaaaaaaaaaaa
    </h1> -->
    <div class="xl:flex xl:flex-col hidden">
      <Navigation :language="language"></Navigation>
    </div>
    <div
      class="flex flex-col xl:flex xl:flex-row xl:flex-grow overflow-auto xl:h-full xl:w-full xl:justify-center"
    >
      <router-view :language="language"></router-view>
      <!-- <span class="absolute top-1/5 mt-3 xl:mt-0 left-0 xl:top-10">
        <select
          id="language"
          v-model="language"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="EN">English</option>
          <option value="IT">Italiano</option>
        </select>
      </span> -->
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
    data() {
      return {
        language: "EN",
        scrollPosition: null,
      };
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll);
    },
  };
</script>
<style>
  .change_color {
    background-color: red;
  }
  .temporalProva {
    transform-origin: 10 10;
    transform: rotate(90deg);
  }
  .background {
    background-color: #0a192f !important;
    color: white;
  }
  .prova {
    color: #9aa4c3;
  }
  .skills {
    background-color: #48b9a5;
  }
  .titles {
    color: #48b9a5;
  }
  .borders {
    border-color: #48b9a5;
  }

  .resume .resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .resume .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #48b9a5;
    position: relative;
  }

  .resume .resume-item h5 {
    font-size: 16px;
    background: #112240;
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
    background: #0a192f;
    border: 2px solid #48b9a5;
  }
</style>
