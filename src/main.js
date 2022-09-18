import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import './style.css'
import './index.css'
import Earth from './views/Earth.vue'
import Minerals from './views/Minerals.vue'
import Tectonics from './views/Tectonics.vue'
import Volcanoes from './views/Volcanoes.vue'
import Igneous from './views/Igneous.vue'
import Sedimentary from './views/Sedimentary.vue'
import Home from './views/Home.vue'
import App from './App.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/earth', name: 'Earth', component: Earth},
        { path: '/minerals', name: 'Minerals', component: Minerals},
        { path: '/tectonics', name: 'Tectonics', component: Tectonics},
        
        { path: '/volcanoes', name: 'Volcanoes', component: Volcanoes},
        { path: '/igneous', name: 'Igneous', component: Igneous},
        { path: '/sedimentary', name: 'Sedimentary', component: Sedimentary},

    ],

    scrollBehavior (to, from, savedPosition){
        return savedPosition || new Promise((resolve)=>{
            setTimeout(()=> resolve({top:0, behavior: 'auto'}), 20)
            
        })
        

       
    }
    

})



createApp(App).use(router).mount('#app')
