<template>
  <div id="app" class="flex flex-col w-screen h-screen bg-gray-400" >
    <div class="flex flex-col xl:flex">
      <div class="flex flex-col xl:h-screen xl:sticky xl:top-0 xl:w-56 xl:flex xl:flex-col">
        <Navigation></Navigation>
      </div>
      <div class="flex flex-col xl:flex xl:flex-col xl:flex-grow ">
        <router-view></router-view>
      </div>
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