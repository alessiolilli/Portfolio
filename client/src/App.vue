<template>
  <div id="app" class="flex flex-col w-screen h-screen bg-gray-400" >
    <div class="flex">
      <div class="flex flex-col h-screen w-1/6">
        <Navigation></Navigation>
      </div>
      <div class="flex flex-col flex-grow ">
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