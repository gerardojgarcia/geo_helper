<script >

import AppButton from './components/AppButton.vue'
import Nav from './components/Nav.vue';
import ShowCase from './components/ShowCase.vue';

export default {

components: {
    AppButton,
    Nav,
    ShowCase
},
props: {
  name: String
}


}




</script>

<template>
<header class="w-full flex justify-evenly my-8 bg-white items-center align-center z-10">

  <Nav/>
  

  <AppButton name="Login/Register"/>  

</header>

<div>

    <ShowCase/>

</div>


</template>

<style scoped>

</style>
