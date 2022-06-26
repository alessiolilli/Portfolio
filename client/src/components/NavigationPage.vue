<template>
  <div class="flex flex-row background text-white">
    <div class="flex flex-col m-4 justify-center">
      <div class="flex flex-col h-auto w-16">
        <div class="flex">
          <img
            src="../assets/piccola.jpg"
            class="rounded-full border-4 border-gray-600"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="flex w-full justify-end">
      <div class="flex flex-col justify-center cursor-pointer m-10">
        <a href="#home">
          <font-awesome-icon icon="fa-solid fa-user" class="xl:mr-3 h-5" />
          About
        </a>
      </div>
      <div class="flex flex-col justify-center cursor-pointer m-10">
        <a href="#skill">
          <font-awesome-icon icon="fa-solid fa-briefcase" class="xl:mr-3 h-5" />
          Skills
        </a>
      </div>
      <div class="flex flex-col justify-center cursor-pointer m-10">
        <a href="#resume">
          <font-awesome-icon icon="fa-solid fa-file" class="xl:mr-3 h-5" />
          {{ language === "EN" ? "Resume" : "CV" }}
        </a>
      </div>
      <div class="flex flex-col justify-center cursor-pointer m-10">
        <a href="#contact">
          <font-awesome-icon icon="fa-solid fa-envelope" class="xl:mr-1 h-5" />
          {{ language === "EN" ? "Contact" : "Contatti" }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      language: String,
    },
    watch: {
      language: function () {
        this.actualLang = this.language;
      },
    },
    data() {
      return {
        actualLang: this.language,
      };
    },
    methods: {
      goTo(link) {
        window.open(link, "_blank");
      },
    },
  };
</script>
