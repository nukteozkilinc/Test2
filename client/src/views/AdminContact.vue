<template>
  <div class="first">
    <NavbarAdmin/>
    <h1 align="center" class="mt-3">This is the contact page for admin</h1>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavbarAdmin from '@/components/NavbarAdmin.vue'
  
  export default {
    name: 'AdminPost',
    components: {
      NavbarAdmin
    }
  }
</script>
  