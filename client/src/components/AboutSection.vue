<template>
  <div>
    <div class="flex mb-4 text-3xl titles" id="home">
      <span class="border-b-4 borders pb-2">Abo</span>ut
    </div>
    <div class="flex mb-3 text-xl">{{ informations.name }}</div>
    <div class="grid xl:grid-cols-2 xl:gap-x-5 gap-y-5">
      <div
        class="flex"
        v-for="(item, index) in informations.sections"
        :key="index"
      >
        <div class="flex flex-col justify-center">
          <font-awesome-icon
            icon="fa-solid fa-angle-right"
            class="mr-3 prova"
          />
        </div>
        <div class="flex flex-col">{{ item.section }}:</div>
        <div class="flex flex-col ml-2">{{ item.data }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["propsData"],
    watch: {
      propsData: function () {
        this.informations = this.propsData;
      },
    },
    data() {
      return {
        informations: this.propsData,
      };
    },
  };
</script>
