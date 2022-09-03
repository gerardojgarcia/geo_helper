<script>

   export default {

    name: 'Tutoring',




   }


</script>

<template>


    <div class=" tutor-container w-full flex flex-row pb-4 bg-yellow-400 relative ">
    
        <div class="tutor-info text-left flex flex-col m-16 pt-8">
        
        <div class="mt-8 mb-16">
        
            <h3 class="text-5xl ml-8 mb-2">Get Online Help Right Now!</h3>

            <p class="text-lg ml-8" >Submit your questions and get exact help you need.</p>
        
        
        
        </div>

        <div class="tutor-form ml-8 w-full">
            <form action="submit" class="flex flex-col w-full">
            
            <group>
                <input class="shadow-md" type="text" name="first-name" placeholder="First Name" required>
                <input class="shadow-md" type="text" name="last-name" placeholder="Last Name" required>
            </group>
            <group>
                <input class="shadow-md" type="text" name="email" placeholder="Email" required>
                <input class="shadow-md" type="text" name="name" placeholder="Question" required>
            </group>
            
            
            <button class=" self-center text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white w-32 my-8">Submit</button>
            
            
            </form>
        
        </div>
        
        
        
        
        
        
        
        </div>

        <img class="w-1/2 z-10 -translate-y-32 ml-8 " src="/drawkit-grape-pack-illustration-2.svg" alt="A person studying">
    
    </div>





</template>

<style scoped>
     input {
        background-color: white;
        border-radius: 5rem;
        width: 15rem;
        padding:5px;
        margin-bottom: 10px;
        margin-right: 15px;
     }

.tutor-container {
    background-color: #f9b83b;
}




</style>