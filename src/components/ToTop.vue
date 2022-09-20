<script>
export default {
    name: "ToTop",

    methods: {
        toTop(){
            window.scrollTo(0, 0)

            


        }
    }
}
</script>


<template>


<div @click="toTop" id="back-button" class="back-button cursor-pointer w-28 h-28 bg-yellow-400 rounded-3xl flex items-center justify-center mr-4  self-end shadow-lg">
    <div class="  rounded-xl self-center text-6xl  "><i class="fa-solid fa-arrow-up"></i></div>
</div>



</template>

<style scoped>


    .back-button {
        position: fixed;
        margin-top: 60vh;
         
    }

    @media (max-width: 800px){
        .back-button {
            margin-top: 55vh;
        }
    }

    @media (max-width: 400px){
        .back-button {
            margin-top: 50vh;
        }
    }




</style>