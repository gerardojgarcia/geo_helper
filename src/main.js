import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import VueGtag from "vue-gtag";

import './style.css'
import './index.css'
import Earth from './views/Earth.vue'
import Minerals from './views/Minerals.vue'
import Tectonics from './views/Tectonics.vue'
import Volcanoes from './views/Volcanoes.vue'
import Igneous from './views/Igneous.vue'
import Sedimentary from './views/Sedimentary.vue'
import TopicPage from "./views/TopicPage.vue";
import Home from './views/Home.vue'
import App from './App.vue'
import Metamorphic from "./views/Metamorphic.vue";






 const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/earth', name: 'earth', component: Earth},
        { path: '/minerals', name: 'minerals', component: Minerals},
        { path: '/tectonics', name: 'tectonics', component: Tectonics},
        { path: '/topics', name: 'topics', component: TopicPage},
        { path: '/volcanoes', name: 'volcanoes', component: Volcanoes},
        { path: '/igneous', name: 'igneous', component: Igneous},
        { path: '/sedimentary', name: 'sedimentary', component: Sedimentary},
        { path: '/metamorphic', name: 'metamorphic', component: Metamorphic}

    ],

    scrollBehavior (to, from, savedPosition){
        if (to.hash) {
            return {
                el:  to.hash
            }
          } else {
            return { top: 0 }
          }
        },
    

})




createApp(App).use(router, (VueGtag, { config: {id: "G-2N50LHTJC8" }})).mount('#app')

