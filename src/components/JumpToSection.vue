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

  <div class="text-white text-4xl ">

    <strong>Jump to Section</strong>
  </div>
<div v-for="section in section" :key="section.id" class="w-1/2 text-white ">

  <a :href="section.sectionHash">{{section.section}}</a>



</div>
</template>



<style scoped>

</style>