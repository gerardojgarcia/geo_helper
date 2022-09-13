<script>
export default {
    name: 'FlashCards',

    data(){
        return {
            definition: []
        }
    },

    created(){
        this.definition = [
            {
                id: 1,
                word: "Earth",
                definition: "The rock we're spinning on"

            },
            {
                id: 2,
                word: "Globe",
                definition: "The rock we're spinning on"

            },

        ]
    },
    
}
</script>
<template>


    <div>
    
    
        <div class="card-box flex flex-row flex-wrap w-3/4 m-auto">
        
        
            <div class="card w-80 h-52 shadow roudned-lg mr-4 mb-16 flex flex-col justify-center items-center" v-for="definition in definition" :key="id">
                <div class="term w-full text-center">
                <strong class="text-xl ">{{definition.word}}</strong>
                </div>
                <p class="definition text-lg">{{definition.definition}}</p>
            </div>
            
        
        </div>
    
    
    </div>


</template>

<style scoped>

    .term {
        opacity: 0;
        transition: all 200ms ease-in;
        z-index: 10;
       
       
    }

    .definition {
        transition: all 200ms ease-in;
        position: absolute;
    }

        .card:hover .definition{
            opacity: 0;
        }
    .card:hover .term {
        opacity: 1;
    }



</style>