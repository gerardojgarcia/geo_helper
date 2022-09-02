<script >

import AppButton from './components/AppButton.vue'
import Nav from './components/Nav.vue';
import ShowCase from './components/ShowCase.vue';
import Partners from './components/Partners.vue';
import Topics from './components/Topics.vue';

export default {

components: {
    AppButton,
    Nav,
    ShowCase,
    Partners,
    Topics
},
props: {
  name: String
}


}




</script>


      <template>
        <div>
          <header class="w-full flex justify-evenly my-8 bg-white items-center align-center z-10">
        
            <Nav/>
        
        
            <AppButton name="Login/Register"/>
              </header>
        
        
        
              <ShowCase/>
        
        
            <Partners/>
            <Topics/>
        </div>
      </template>



<style></style>