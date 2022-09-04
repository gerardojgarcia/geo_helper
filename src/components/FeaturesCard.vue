<script>
    export default {
        name: "FeaturesCard",

        props: {
            icon: String,
            data: String,
            title: String
        }




    }
</script>

<template>
    <div class="feature-card bg-white shadow-lg mx-4 rounded-lg w-52 h-52 flex flex-col ">
            
            <div class=" icon-box self-center  bg-yellow-200"><i :class="icon"></i></div>
            <p class="data mt-8 text-3xl text-teal-400 self-center text-center">{{data}}+</p>
            <p class="text-gray-500 mt-2" >{{title}}</p>
        
        
        
        </div>
</template>

<style scoped>

    .icon-box {
        margin-top: 25px;
        width: 50px;
        height: 50px;
        border-radius: 50rem;
    }


    i {
        justify-self: center;
        margin-top: 15px;
     

       

    }



</style>