<script >
import AppButton from './AppButton.vue';
export default {
    name: "ShowCase",
    components: { AppButton },
    props: { 

      name: String

    }
}
</script>

<template>


  <div class="container w-full flex justify-center align-center">
  <div class="showcase-info w-1/2">
    <h1 class="text-6xl font-bold"><span class="text-yellow-500">Acces Geology help</span> from anywhere and anytime</h1>
    
    <p>A learning system base on formalized teaching but with the help of electornic recourse for your knowledge.</p>
  
  
      <AppButton name='Get Started'/>
  
  </div>

  <div class="showcase-img w-1/2">
  
  
  
    <img src="/public/showcase-img.svg" alt="" class="w-full-width">
  
  
  </div>
  
  </div>
 
</template>

<style scoped>

</style>
