<script>
export default {
  name: "JumpToSection",

  data() {

    return {
      section: []
    }

    },

  created() {
   this.section= [
     {
       id: 1,
       section: 'Summary',
       sectionHash: '#summary'
     },
     {
       id: 2,
       section: "Key Points",
       sectionHash: '#key_points'
     },
     {
       id: 3,
       section: "Q&A",
       sectionHash: '#questions_answers'
     },

   ]

  }



}
</script>


<template>
<div class="backdrop-blur-lg bg-gray-100 fixed flex flex-col w-1/4 md:w-1/3 rounded-lg py-4 md:mt-96 z-10">
  <div class="text-black text-lg md:text-4xl ml-8 ">

    <strong>Jump to Section</strong>
  </div>


  <div class="flex flex-col items-center justify-start">
  <div v-for="section in section" :key="section.id" class="text-white pl-4 md:ml-8 flex flex-col md:flex-row mt-4">

  <div class="mb-2"><a :href="section.sectionHash" class="bg-teal-400 rounded-sm p-2 shadow-md hover:shadow-xl">{{section.section}}</a></div>



  </div>
  </div>
</div>
</template>



<style scoped>

</style>