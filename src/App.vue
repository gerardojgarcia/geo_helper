<script >

import AppButton from './components/AppButton.vue'

export default {

components: {
  AppButton,
},
props: {
  name: String
}


}




</script>

<template>


<div>

  <AppButton name="Login/Register" />

</div>
</template>

<style scoped>

</style>
