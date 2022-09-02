<script>
import AppButton from './AppButton.vue';

    export default {
    name: "TopicsCard",
    props: {
        name: String,
        topic: Object,
    },
    components: { AppButton }
}
</script>



<template>
    
    
        <div class="topic-card rounded-lg flex flex-col shadow-md hover:shadow-xl mx-4 text-left ">
        
        <div class="mb-4 pb-4"><img :src="topic.image" alt="" class="topic-img rounded-lg" ></div>
        <strong class="mx-4 text-3xl" >{{topic.topic}}</strong>
        <p class="mx-8 my-8">{{topic.description}}</p>


        <div class="mt-auto mb-8 self-center">

        
        <a :href="topic.link" class="text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white ">Explore</a>
        
    </div>

        
</div>




</template>


<style>

        .topic-card {
            width: 300px;
            min-height: 500px;
           

            

        }

       


    
</style>