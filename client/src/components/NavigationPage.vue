<template>
    <div class="flex flex-row xl:flex-col xl:h-full bg-side text-white">
        <div class="flex flex-col xl:flex-row m-4 justify-center">
            <div class="flex flex-col h-auto w-16 xl:w-28">
                <div class="flex">
                    <img src="../assets/piccola.jpg" class="rounded-full xl:border-8 border-4 border-gray-600" alt="">
                </div>
                <div class="hidden xl:flex xl:justify-center xl:mt-4 xl:text-xl xl:font-bold">
                    Alessio Lilli
                </div>
                <div class="hidden xl:flex xl:justify-around xl:mt-2">
                    <div class="flex flex-col border-white border-2 rounded-full p-2 bg-gray-700 cursor-pointer"  @click="goTo('https://www.instagram.com/alessiolilli/')">
                        <font-awesome-icon icon="fa-brands fa-instagram"/>
                    </div>
                    <div class="flex flex-coll border-white border-2 rounded-full p-2 bg-gray-700 cursor-pointer" @click="goTo('https://www.linkedin.com/in/alessio-lilli-628160202/')">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex w-full justify-around xl:flex-col xl:justify-around xl:h-1/3 xl:ml-16 xl:w-1/2">
            <div class="flex flex-col xl:justify-start xl:flex-row justify-center cursor-pointer">
                <a href="#home">
                    <font-awesome-icon icon="fa-solid fa-house" class="xl:mr-3 h-5"/>
                    Home
                </a>
            </div>
            <div class="flex flex-col xl:justify-start  xl:flex-row justify-center cursor-pointer">
                <a href="#home">
                    <font-awesome-icon icon="fa-solid fa-user" class="xl:mr-3 h-5"/>
                    About
                </a>
            </div>
            <div class="flex flex-col xl:justify-start xl:flex-row justify-center cursor-pointer">
                <a href="#skill">
                    <font-awesome-icon icon="fa-solid fa-briefcase" class="xl:mr-3 h-5"/>
                    Skills
                </a>
            </div>
            <div class="flex flex-col xl:flex-row xl:justify-start justify-center cursor-pointer">
                <a href="#resume">
                    <font-awesome-icon icon="fa-solid fa-file" class="xl:mr-3 h-5"/>
                    {{ language === 'EN' ? "Resume" : "CV"}}
                </a>
            </div>
            <div class="flex flex-col xl:flex-row xl:justify-start justify-center cursor-pointer">
                <a href="#contact">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="xl:mr-1 h-5"/>
                    {{ language === 'EN' ? "Contact" : "Contatti"}}
                </a>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    props: {
      "language":String,
    },
    watch:{
      language :function (){
        this.actualLang =this.language
      }
    },
    data(){
        return {
            actualLang : this.language
        }
    },
    methods:{
        goTo(link){
            window.open(link,"_blank")
        }
    }
}
</script>