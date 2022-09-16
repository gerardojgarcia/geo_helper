<script>
import FlashCard from "./FlashCard.vue";
export default {
    name: "FlashCards",
    
    components: { FlashCard }, 
    data() {
        return {
            definition: []
        };
    },
    created() {
        this.definition = [
            {
                id: 1,
                term: "Asthenosphere",
                definition: "The rock we're spinning on"
            },
            {
                id: 2,
                term: "atmosphere",
                definition: "The rock we're spinning on"
            },
            {
                id: 3,
                term: "Big Bang Theory",
                definition: "The rock we're spinning on"
            },
            {
                id: 4,
                term: "Doppler Effect",
                definition: "The rock we're spinning on"
            },
            {
                id: 5,
                term: "lithosphere",
                definition: "The rock we're spinning on"
            },
            {
                id: 6,
                term: "mantle",
                definition: "The rock we're spinning on"
            },
            {
                id: 7,
                term: "Moho",
                definition: "The rock we're spinning on"
            },
            {
                id: 8,
                term: "planetesimal",
                definition: "The rock we're spinning on"
            },
            {
                id: 9,
                term: "red shift",
                definition: "The rock we're spinning on"
            },
            {
                id: 10,
                term: "nebular theory",
                definition: "The rock we're spinning on"
            },
        ];
    },
}
</script>
<template>


    <div>
        <div class="ml-16 mt-16 mb-16"><strong class="text-7xl">FlashCards</strong></div>
    
        <div class="card-box flex flex-row flex-wrap w-full lg:w-3/4 m-auto justify-center" >

      
        
        
            <FlashCard :definition="definition" />
            
        
        </div>
    
    
    </div>


</template>

<style scoped>

    



</style>