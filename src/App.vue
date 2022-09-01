<script >

import AppButton from './components/AppButton.vue'
import Nav from './components/Nav.vue';

export default {

components: {
    AppButton,
    Nav
},
props: {
  name: String
}


}




</script>

<template>
<header class="w-full flex justify-evenly my-8 bg-blue items-center align-center">

  <Nav/>
  

  <AppButton name="Login/Register"/>  

</header>


</template>

<style scoped>

</style>
