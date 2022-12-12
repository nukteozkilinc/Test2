<template>
    <div class="login">
       <NavbarAdmin/>
       <br>
      <formLogin/>
    </div>
  </template>
  
  <script>
  import NavbarAdmin from '@/components/NavbarAdmin.vue'
  import formLogin from '@/components/FormLogin.vue'
  export default {
    name: 'LoginView',
    components: {
        NavbarAdmin,
      formLogin
    }
  }
  </script>