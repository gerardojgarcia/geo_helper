<script>
import AppButton from './AppButton.vue';
export default {
    name: "Topics",
    components: { AppButton },

    props: {
        name: String
    }
}
</script>


<template>


    <div class="container">
    
        <!--Topics <Header-->


    <div>
        <p>Earth Science Topics</p>


        <h2>Explore Topics</h2>
     
    </div>


    <!-- Topics Card <Box-->
    
    <div class="topic-box">
    
    
        
    <div class="topic-card">
    
        <div><img src="/" alt="" class="topic-img"></div>
        <strong>The Earth</strong>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dicta ut vero praesentium nostrum reiciendis!</p>

        <AppButton name='Explore'/>
    
    
    </div>
    
    
    
    
    
    </div>    
    
    
    
    
    
    
    </div>





</template>