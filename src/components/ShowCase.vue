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


  <div class="showcase-container w-full flex justify-center align-center pb-16">
  <div class="showcase-info w-1/2 text-left pl-24 mt-24 pr-8">
    <h1 class="text-6xl font-bold py-4 "><span class="text-yellow-500">Access Geology help</span> from anywhere and anytime</h1>
    
    <p class="py-4">A learning system base on formalized teaching but with the help of electornic recourse for your knowledge.</p>
  
  
      <AppButton name='Get Started'/>
  
  </div>

  <div class="showcase-img w-1/2 flex ">
  
  
  
    <img src="/public/showcase-img.svg" alt="" class="w-3/4 place-center self-center">
  
  
  </div>
  
  </div>
 
</template>

<style scoped>



h1 {
  text-shadow:   1px 4px 2px rgba(0, 0, 0, 0.164);
}

</style>
