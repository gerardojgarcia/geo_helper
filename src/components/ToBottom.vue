<script>
    export default {
        name: "ToTop",
    
        methods: {
            toBottom(){

              let size = window.pageYOffset

            
                window.scrollBy(0, 2000)
    
                
    
    
            }
        }
    }
    </script>
    
    
    <template>
    
    
    <div @click="toBottom" id="bottom-button" class="bottom-button cursor-pointer w-28 h-28 bg-yellow-400 rounded-3xl flex items-center justify-center mr-4 self-end shadow-lg">
        <div class="  rounded-xl self-center text-6xl  "><i class="fa-solid fa-arrow-down"></i></div>
    </div>
    
    
    
    </template>
    
    <style scoped>
    
    
        .bottom-button {
            position: fixed;
            margin-top: 70vh;
        }
    
    
    
    
    </style>