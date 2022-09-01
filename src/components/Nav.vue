<script>
import AppButton from './AppButton.vue';
import NavSearch from './NavSearch.vue';


    export default {
    name: "Nav",

        props:{
             name: String   
        },



    components: {
    AppButton,
    NavSearch
},
   
}
</script>

<template>
    <div>
        <nav class="flex flex-row w-auto">

            <div>
            <img src="/" alt="" class="logo">
            
            </div>
        
                <div class="navlinks text-gray-400">
                
                
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Courses</a>
               <a href="#">Tutoring</a>
               <a href="#">FAQ</a>
                
                </div>

                <NavSearch/>
        
                  
        
        </nav>
    </div>
</template>


<style scoped>
    a {
        margin-right: 25px;
    }

</style>