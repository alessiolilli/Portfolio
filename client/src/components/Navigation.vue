<template>
    <div class="flex flex-col h-full bg-side text-white">
        <div class="flex m-4 justify-center">
            <div class="flex flex-col h-auto w-28">
                <div class="flex">
                    <img src="../assets/piccola.jpg" class="rounded-full border-8 border-gray-600" alt="">
                </div>
                <div class="flex justify-center mt-4 text-xl font-bold">
                    Alessio Lilli
                </div>
                <div class="flex justify-around mt-2">
                    <div class="flex flex-col border-white border-2 rounded-full p-2 bg-gray-700"  @click="goTo('https://www.instagram.com/alessiolilli/')">
                        <font-awesome-icon icon="fa-brands fa-instagram"/>
                    </div>
                    <div class="flex flex-coll border-white border-2 rounded-full p-2 bg-gray-700" @click="goTo('https://www.linkedin.com/in/alessio-lilli-628160202/')">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-around h-1/3 ml-16 ">
            <div class="">
                Home
            </div>
            <div class="">
                About
            </div>
            <div class="">
                Skill
            </div>
            <div class="">
                Resume
            </div>
            <div class="">
                Contact
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goTo(link){
            window.open(link)
        }
    }
}
</script>