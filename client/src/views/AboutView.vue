<template>
  <div class="about">
    <NavBar/>
    <h1 align="center" class="mt-3">About me</h1>

    <AboutComponent/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'AboutView',
  components: {
    NavBar,
    AboutComponent
  }
}
</script>
