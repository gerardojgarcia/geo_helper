<script >

import AppButton from './components/AppButton.vue'
import Nav from './components/Nav.vue';
import ShowCase from './components/ShowCase.vue';

import Topics from './components/Topics.vue';
import Tutoring from './components/Tutoring.vue';
import Features from './components/Features.vue';
import Community from './components/Community.vue';
import Footer from './components/Footer.vue';

export default {

components: {
    AppButton,
    Nav,
    ShowCase,

    Topics,
    Tutoring,
    Features,
    Community,
    Footer
},
props: {
  name: String
},





}




</script>


      <template>
        <div>
          <header class="w-full flex justify-evenly my-8 bg-white items-center align-center z-10">
        
            <Nav/>
        
        
            <AppButton name="Contact"/>
              </header>
        


                <router-view v-slot="{ Component }">
                
                  <Transition name="fade" >
                  <component :is="Component" />
                  </Transition>
                
                
                </router-view>
                <div>
                  <Footer/>
                </div>
                
        </div>

        
      </template>



<style>
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>