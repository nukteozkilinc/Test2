<template>
    <div class="third">
      <NavBar/>
      <h1 align="center" class="mt-3">Contact me</h1>
      
      <ContactComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import ContactComponent from '@/components/ContactComponent.vue'
  
  export default {
    name: 'ContactView',
    components: {
      NavBar,
      ContactComponent
    }
  }
  </script>
  