import { defineConfig } from 'vite'
import generateSitemap from "vite-ssg-sitemap";
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig(  {
  plugins: [
      vue(),
     ],

    ssgOptions: {
      onFinished() { generateSitemap()},
    },


  
})
