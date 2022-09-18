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

data() {
  return {
    topics: []
  }
},

created() {
  this.topics = [


  {
    id: 1,
    topic: 'The Earth',
    description: "An overview of the Earth and it's life systems",
    image: '/img1.png',
    link: 'google.com'
  },

  {
    id: 2,
    topic: 'Minerals',
    description: "Everything you wanted to knmow about minerals",
    image: '/pexels-pixabay-56030.jpg',
    link: "weebly.com"

  },

  {
    id: 3,
    topic: 'Tectonics',
    description: "Everything you wanted to knmow about minerals",
    image: '/img6.png',
    link: "weebly.com"

  },

  {
    id: 4,
    topic: 'Igneous Rocks',
    description: "Everything you wanted to knmow about minerals",
    image: '/img3.png',
    link: "weebly.com"

  },
  {
    id: 5,
    topic: 'Volcanoes',
    description: "Everything you wanted to knmow about minerals",
    image: '/pexels-pixabay-73830.jpg',
    link: "weebly.com"

  },
  {
    id: 6,
    topic: 'Sedimentary Rocks',
    description: "Everything you wanted to knmow about minerals",
    image: '/img6.png',
    link: "weebly.com"

  },
  {
    id: 7,
    topic: 'Metamorphic Rocks',
    description: "Everything you wanted to knmow about minerals",
    image: '/img5.png',
    link: "weebly.com"

  },
  {
    id: 8,
    topic: 'Earthquakes',
    description: "Everything you wanted to knmow about minerals",
    image: '/img8.png',
    link: "weebly.com"

  },
  {
    id: 9,
    topic: 'Mountains',
    description: "Everything you wanted to knmow about minerals",
    image: '/pexels-eberhard-grossgasteiger-1670187.jpg',
    link: "weebly.com"

  },
  {
    id: 10,
    topic: 'Desert Geology',
    description: "Everything you wanted to knmow about minerals",
    image: '/img2.png',
    link: "weebly.com"

  },






  ]
}


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