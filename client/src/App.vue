<template>
  <div id="app" class="flex flex-col xl:flex-row w-screen h-screen bg-gray-400 overflow-y-hidden"  >
    <div class="flex flex-col xl:h-full xl:sticky xl:top-0 xl:w-56 xl:flex xl:flex-col">
      <Navigation></Navigation>
    </div>
    <div class="flex flex-col xl:flex xl:flex-row xl:flex-grow overflow-auto h-full w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
<style>
.prova{
  color: blue !important;
}
</style>