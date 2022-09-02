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
    image: '/img2.png',
    link: "weebly.com"

  },

  {
    id: 2,
    topic: 'Volcanoes',
    description: "Everything you wanted to knmow about minerals",
    image: '/pexels-pixabay-73830.jpg',
    link: "weebly.com"

  },

  {
    id: 2,
    topic: 'Volcanoes',
    description: "Everything you wanted to knmow about minerals",
    image: '/img2.png',
    link: "weebly.com"

  }






  ]
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
            <Topics :topics='topics'/>
        </div>
      </template>



<style></style>